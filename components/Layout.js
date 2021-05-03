import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
             <Header />
                <div className={styles.container}>
                    {children}  
                </div>
                <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'DJ Events | Find the best parties',
    description: 'Find the lates DJ & other musical events',
    keywords:'music, events, edm, dj ',
}