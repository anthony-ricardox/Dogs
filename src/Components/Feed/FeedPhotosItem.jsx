import React from 'react'
import styles from './FeedPhotoItem.module.css'


const FeedPhotosItem = ({photo}) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acesso}</span>
    </li>
  )
}

export default FeedPhotosItem
