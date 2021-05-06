import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> Copyryght &copy; RostyslavL 2021</p>
            <Link href='/about'>
                About this Project
            </Link>
        </footer>
    )
}
