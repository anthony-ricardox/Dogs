import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UseHeader.module.css'

const UserHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className='title'>Minha Conta</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader
