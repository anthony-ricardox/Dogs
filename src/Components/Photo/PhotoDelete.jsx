import React from 'react'
import styles from './PhotoDelete.module.css'
import userFetch from '../../Hooks/userFetch'
import { PHOTO_DELETE } from '../../api'

const PhotoDelete = ({id}) => {
    const {loading, request} = userFetch()

   async function handleClick (event) {   
        event.preventDefault()
        const {url, options} = PHOTO_DELETE(id)
        const {response} = await request(url, options)
        if( response.ok) window.location.reload()
    }

  return (
    <div>
        <button onClick={handleClick} className={styles.delete}> Deletar</button>
    </div>
  )
}

export default PhotoDelete
