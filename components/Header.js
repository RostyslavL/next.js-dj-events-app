import React from 'react'
import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/Header.module.css'
import { HiPlusCircle,HiSparkles } from 'react-icons/hi'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>DJ Events</a>
                </Link>
            </div>
            <Search />
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                        <a className={styles.btn}>  
                                <HiSparkles className={styles.icon}/> Events
                            </a>                            
                        </Link>
                    </li>
                    <li>
                        <Link href='/events/add'>
                            <a className={styles.btn}>  
                                <HiPlusCircle className={styles.icon}/> Add Event
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
