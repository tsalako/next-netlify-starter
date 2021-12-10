import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <br/>
      <Link href="/">
        <footer className={styles.footer}>
          Holiday greetings from Julia and Tofe
        </footer>
      </Link>
    </>
  )
}
