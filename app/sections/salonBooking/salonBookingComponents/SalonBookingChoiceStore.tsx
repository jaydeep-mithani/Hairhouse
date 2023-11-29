import { Typography, Button, Input, Link } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { IconSearch, IconPinMap } from '~/components'
import { LocationServicesAction } from '~/lib/type'
import clsx from 'clsx'
import { useEffect, useState, useTransition } from 'react'
import { useDebounce } from 'react-use'

import styles from '../SalonBooking.module.css'
import { SalonBookingChoiceStoreProps, StoreSearchResultsProps, LocationListingsProps } from '../SalonBooking.types'

const SEARCH_DEBOUNCE = 400
const ACTION = '/api/location-services'
const CUT_DISTANCE = 2

export const SalonBookingChoiceStore = ({ setIsSelectedStore }: SalonBookingChoiceStoreProps) => {
  const [searchValue, setSearchValue] = useState<string>()
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)

  const handleSearchValue = (value: string) => {
    setSelectedPlaceId(null)
    return setSearchValue(value)
  }

  const [isPending, startTransition] = useTransition()
  const fetcher = useFetcher()
  const secondFetcher = useFetcher()
  const thirdFetcher = useFetcher()

  useDebounce(
    () => {
      if (searchValue) {
        startTransition(() => {
          fetcher.submit(
            {
              locationServicesAction: LocationServicesAction.GET_SEARCH_RESULTS,
              inputValue: searchValue,
            },
            { method: 'post', action: ACTION },
          )
        })
      }
    },
    SEARCH_DEBOUNCE,
    [searchValue],
  )

  useEffect(() => {
    if (selectedPlaceId) {
      startTransition(() => {
        secondFetcher.submit(
          {
            locationServicesAction: LocationServicesAction.GET_MAPS_DATA,
            placeId: selectedPlaceId,
          },
          { method: 'post', action: ACTION },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlaceId])

  useEffect(() => {
    if (secondFetcher.data?.lat && !isPending) {
      startTransition(() => {
        thirdFetcher.submit(
          {
            locationServicesAction: LocationServicesAction.GET_LOCATION_LISTINGS,
            latitude: secondFetcher.data?.lat,
            longitude: secondFetcher.data?.lng,
          },
          { method: 'post', action: ACTION },
        )
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondFetcher.data])

  const handleSelectStore = (selectedStore: LocationListingsProps) => {
    localStorage.setItem('selectedStore', JSON.stringify(selectedStore))
    setIsSelectedStore(true)
  }

  return (
    <div className="w-full mb-5 md:mb-20 text-center flex flex-col items-center">
      <div className="w-full max-w-[656px]">
        <Typography
          tag="p"
          weight="bold"
          variant="displayExtraLarge"
          theme={{
            root: 'mb-3 md:mb-4',
          }}>
          Find store
        </Typography>
        <div className="mb-[48px] md:mb-[56px]">
          <Input
            prefix={<IconSearch width={20} height={20} />}
            placeholder="Melbourne"
            value={searchValue}
            onChange={handleSearchValue}
          />
          {!!fetcher?.data?.length && searchValue !== '' && !selectedPlaceId && (
            <div className={clsx('w-full max-w-[656px] relative z-20 rounded', styles.searchResults)}>
              {fetcher?.data?.map((item: StoreSearchResultsProps) => {
                return (
                  <button
                    type="button"
                    key={item?.place_id}
                    className={clsx('flex items-center gap-2 p-2 pl-3 w-full max-w-[654px]', styles.searchResult)}
                    onClick={() => {
                      return setSelectedPlaceId(item?.place_id)
                    }}>
                    <IconPinMap width={20} height={20} />
                    {item?.description && (
                      <Typography tag="p" variant="body">
                        {item?.description}
                      </Typography>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
        {!isPending && !!thirdFetcher?.data?.length && (
          <div className={clsx('my-4 text-left', styles.borderBottom)}>
            {thirdFetcher?.data?.map((item: LocationListingsProps) => {
              return (
                <div className={clsx('py-6 relative', styles.borderTop)} key={item.id}>
                  {item?.name && (
                    <Typography
                      tag="p"
                      variant="subheading"
                      theme={{
                        root: clsx('mb-[14px] max-w-[233px] md:max-w-full', styles.storeTitle),
                      }}>
                      {item?.name}
                    </Typography>
                  )}
                  {item?.address2 && (
                    <Typography
                      tag="p"
                      variant="body"
                      theme={{
                        root: clsx(styles.grey, styles.bodyThin),
                      }}>
                      {item?.address2}
                    </Typography>
                  )}
                  {item?.address1 && (
                    <Typography
                      tag="p"
                      variant="body"
                      theme={{
                        root: clsx('mb-2', styles.grey, styles.bodyThin),
                      }}>
                      {item?.address1}
                    </Typography>
                  )}
                  {!!item?.distance && (
                    <Typography
                      tag="p"
                      variant="label"
                      theme={{
                        root: styles.grey,
                      }}>
                      {`${item?.distance?.toFixed(CUT_DISTANCE)}KM`}
                    </Typography>
                  )}
                  {item?.bookable_service?.salon_bookable && (
                    <div className="absolute top-6 right-0">
                      <Button
                        variant="solid"
                        status="primary"
                        theme={{ root: clsx('w-[100px]', styles.selectBtn) }}
                        onClick={() => {
                          return handleSelectStore(item)
                        }}>
                        Select
                      </Button>
                    </div>
                  )}
                  {!item?.bookable_service?.salon_bookable && item?.phone && (
                    <div
                      className={clsx(
                        'mt-2 pt-2 pb-[14px] text-center md:text-left md:py-2 md:pl-3 md:flex md:gap-3 md:items-center',
                        styles.notAvaliableBlock,
                      )}>
                      <Typography tag="p" variant="body">
                        Please call to make a booking at this store:
                      </Typography>
                      <Link prefetch="intent" className="underline text-sm font-normal underline-offset-4" to="/">
                        <Typography tag="p" variant="body">
                          {item?.phone}
                        </Typography>
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
