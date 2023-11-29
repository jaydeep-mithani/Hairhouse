import { CloseWithCircle } from '~/components'
import { useCallback } from 'react'

import styles from '../ProductImageGallery.module.css'
import { ModalProps } from '../ProductImageGallery.types'

export const ImageModal = ({ isOpen, setIsOpen, currentMedia }: ModalProps) => {
  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])
  return (
    <div
      className={` ${styles.scrollbar_hide} ${
        isOpen ? 'flex' : 'hidden'
      }  flex-col items-center overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-10 bg-white `}
      onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 z-10">
        <CloseWithCircle />
      </button>
      <div className="absolute m-4 overflow-auto ">
        {currentMedia?.mediaContentType === 'VIDEO' ? (
          <video className="w-full" controls>
            <source src={currentMedia?.sources[1].url} type="video/mp4" />
          </video>
        ) : (
          <img src={currentMedia?.previewImage?.url} alt="info" />
        )}
      </div>
    </div>
  )
}
