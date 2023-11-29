import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType } from '@shopify/hydrogen'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { ArticleAuthorAndShare, BlogBreadcrumbs } from '~/components'
import {
  ArticlePageTitleInfoSection,
  ArticlePageImageSection,
  ArticlePageTextSection,
  ArticlePageVideoSection,
  ArticlePageLinksSection,
  ArticleSourcesSection,
  ArticlePageAccordionSection,
  ArticleProductCarousel,
  BlogCarousel,
} from '~/sections'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { ArticlePageDocument } from 'graphql/articlePage/ArticlePage.generated'
import React from 'react'
import { createClient } from 'urql'

const ArticleContentSection = ({ sectionData }) => {
  switch (sectionData.__typename) {
    case 'SectionTextBlockWithCTAs':
      return <ArticlePageTextSection data={sectionData} />
    case 'SectionFullWidthImage':
      return <ArticlePageImageSection data={sectionData} />
    case 'SectionFullWidthVideo':
      return <ArticlePageVideoSection data={sectionData} />
    case 'SectionsAccordion':
      return <ArticlePageAccordionSection data={sectionData} />
    case 'SectionRelatedProduct':
      return <ArticleProductCarousel data={sectionData} />
    case 'SectionBlogCarousel':
      return (
        <BlogCarousel
          id={sectionData?.id}
          heading={sectionData?.heading}
          articles={sectionData?.articles}
          showScrollbarForHighRes
        />
      )
    default:
      return null
  }
}

export async function loader({ params, request, context }: LoaderArgs) {
  const { blogHandle, articleHandle } = params
  const { pathname } = new URL(request.url)

  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const { articlePage, relatedPosts, websiteConfigs } = await client
    .query(ArticlePageDocument, {
      url: `blog/${blogHandle}/${articleHandle}`,
      relatedPostsWhere: {
        blog: {
          articles_some: {
            url: `blog/${blogHandle}/${articleHandle}`,
          },
        },
        NOT: [
          {
            url: `blog/${blogHandle}/${articleHandle}`,
          },
        ],
      },
    })
    .toPromise()
    .then((result) => {
      return result?.data || { articlePage: {}, relatedPosts: [], websiteConfigs: [] }
    })

  const [page, relatedArticles, header, footer] = [
    articlePage,
    relatedPosts,
    websiteConfigs?.[0]?.header,
    websiteConfigs?.[0]?.footer,
  ]

  if (!page?.id) {
    throw new Response(null, { status: 404 })
  }

  return defer({
    page,
    relatedArticles,
    header,
    footer,
    pathname,
    analytics: {
      pageType: AnalyticsPageType.blog,
    },
  })
}

export default function Page() {
  const { page, relatedArticles, header, footer } = useLoaderData<typeof loader>()

  const shareIcons = {
    title: 'SHARE',
    enableShare: true,
    options: ['Twitter', 'Facebook', 'Pinterest'],
    pageTitle: page?.title,
    pageUrl: page?.url,
    imageUrl: page?.thumbnail?.url,
  }

  return (
    <>
      {header && <HeaderSection page={page} {...header} />}
      {!page?.hideBreadcrumb && (
        <BlogBreadcrumbs
          routes={[
            {
              path: '/',
              title: 'Home',
            },
            {
              path: `/${page?.blog?.url}`,
              title: page?.blog?.title,
            },
            {
              path: `/${page?.url}`,
              title: `${page?.title}`,
            },
          ]}
        />
      )}
      {page && (
        <ArticlePageTitleInfoSection
          title={page?.title}
          subtitle={page?.subtitle}
          url={page?.url}
          author={page?.author}
          blog={page?.blog}
          thumbnail={page?.thumbnail}
          image={page?.image}
          publishedAt={page?.publishedAt}
          publishDate={page?.publishDate}
        />
      )}
      {page?.linksSection && <ArticlePageLinksSection data={page?.linksSection} />}
      {page?.sources && !page?.sources?.showAfterSection && <ArticleSourcesSection data={page?.sources} />}
      {page?.author && !page?.additionalSettings?.showAuthorInfoAfter && (
        <div className="max-w-[784px] mx-auto mb-8">
          <ArticleAuthorAndShare author={page?.author} shareIcons={shareIcons} />
        </div>
      )}
      {!!page?.articleContent?.length &&
        page?.articleContent.map((section, index) => {
          if (section.__typename === 'SectionBlogCarousel' && !section?.articles?.length) {
            section.articles = relatedArticles
          }
          return (
            <React.Fragment key={`${index + 1}`}>
              {ArticleContentSection && <ArticleContentSection sectionData={section} />}
              {page?.sources && page?.sources?.showAfterSection === section.id && (
                <ArticleSourcesSection data={page?.sources} />
              )}
              {page?.author && page?.additionalSettings?.showAuthorInfoAfter === section.id && (
                <div className="max-w-[784px] mx-auto mb-[40px]">
                  <ArticleAuthorAndShare author={page?.author} shareIcons={shareIcons} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}
