import Link from 'next/link'
import { HiOutlineShieldExclamation, HiArrowCircleLeft } from 'react-icons/hi'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'


export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1> 
                    <HiOutlineShieldExclamation /> 
                    404 
                </h1>
                <h4> Sorry, there is nothing here</h4>
                <Link href='/'> 
                    <h4> 
                        <HiArrowCircleLeft />
                        &nbsp; 
                        Go Back Home
                    </h4>  
                </Link>
            </div>
        </Layout>
    )
}
