import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.contianer}>
        <main className={styles.main}>
          <Header/>
          {children}
        </main>
      </div>
    </>
  )
}
