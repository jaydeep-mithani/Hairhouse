import { useLoaderData } from '@remix-run/react'
import { AnalyticsPageType } from '@shopify/hydrogen'
import { defer, type LoaderArgs } from '@shopify/remix-oxygen'
import { BlogBreadcrumbs } from '~/components/blogBreadcrumbs'
import { BlogPageTemplate } from '~/sections/blogPageTemplate'
import { Footer } from '~/sections/footer'
import { HeaderSection } from '~/sections/header'
import { BlogPageDocument } from 'graphql/blogPage/BlogPage.generated'
import { createClient } from 'urql'

export async function loader({ request, context }: LoaderArgs) {
  const { pathname, searchParams } = new URL(request.url)
  const currentPage = Math.max(Number(searchParams.get('page') ?? 1), 1)
  const searchTerm = searchParams.get('s') || null
  const postsPerPage = 9
  const postsSortOrder = 'publishedAt_DESC'
  const skipItems = (currentPage - 1) * postsPerPage
  const customerAccessToken = await context.session.get('customerAccessToken')

  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  const queryVariables = {
    url: 'blog',
    highlightedPostCondition: null,
    fetchArticlesCondition: searchTerm ? { _search: searchTerm } : null,
    orderBy: postsSortOrder,
    first: postsPerPage,
    skip: skipItems,
  }

  const { pageOptions, articlesWithPagination, allBlogs, highlightedPosts, websiteConfigs } = await client
    .query(BlogPageDocument, queryVariables)
    .toPromise()
    .then((result) => {
      return (
        result?.data || {
          pageOptions: {},
          articlesWithPagination: {},
          allBlogs: [],
          highlightedPosts: [],
          websiteConfigs: [],
        }
      )
    })

  const [page, totalPosts, pagination, articles, blogs, highlightedPost, header, footer] = [
    pageOptions,
    articlesWithPagination?.aggregate?.count,
    articlesWithPagination?.pageInfo,
    articlesWithPagination?.edges,
    allBlogs,
    highlightedPosts[0],
    websiteConfigs?.[0]?.header,
    websiteConfigs?.[0]?.footer,
  ]

  if (!page?.id) {
    throw new Response(null, { status: 404 })
  }

  return defer({
    page,
    totalPosts,
    pagination,
    articles,
    blogs,
    highlightedPost,
    header,
    footer,
    pathname,
    currentPage,
    postsPerPage,
    analytics: {
      pageType: AnalyticsPageType.blog,
    },
  })
}

export default function Page() {
  const { page, currentPage, postsPerPage, totalPosts, articles, blogs, highlightedPost, header, footer } =
    useLoaderData<typeof loader>()
  const pageCount = Math.ceil(totalPosts / postsPerPage)
  const highlightedPostSettings = {
    data: highlightedPost,
    buttonText: page?.additionalSettings?.articleViewLinkText,
  }
  const featuredArticlesSettings = {
    title: page?.additionalSettings?.featuredPostsHeading,
    itemsPerRowDesktop: 3,
    viewLinkText: page?.additionalSettings?.articleViewLinkText,
    articles: page?.featuredArticles,
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
              path: `/${page?.url}`,
              title: page?.title,
            },
          ]}
        />
      )}
      {(page?.title || page?.url || !!articles?.length) && (
        <BlogPageTemplate
          title={page?.title}
          subtitle={page?.subtitle}
          url={page?.url}
          blogs={blogs}
          highlightedPostSettings={highlightedPostSettings}
          featuredArticlesSettings={featuredArticlesSettings}
          articles={articles}
          totalPages={pageCount}
          currentPage={currentPage}
        />
      )}
      {footer && <Footer page={page} {...footer} />}
    </>
  )
}
