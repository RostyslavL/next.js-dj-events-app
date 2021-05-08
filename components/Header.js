import React, {useContext} from 'react'
import Link from 'next/link'
import Search from './Search'
import styles from '@/styles/Header.module.css'
import AuthContext from '@/context/AuthContext'
import { HiPlusCircle, HiSparkles, HiLogin, HiLogout, HiClipboardList } from 'react-icons/hi'

export default function Header() {

    const {user, logout} = useContext(AuthContext)

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
                    {user ? 
                    // if logged in
                        (<> 
                            <li>
                                <Link href='/events/add'>
                                    <a className={styles.btn}>  
                                        <HiPlusCircle className={styles.icon}/> Add Event
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/account/dashboard'>
                                    <a className={styles.btn}>  
                                        <HiClipboardList className={styles.icon}/> Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <button className='btn-secondary btn-icon' onClick={() => logout()}>
                                    <HiLogout/> Log Out
                                </button>
                            </li>  
                        </>) : 
                        // if logged out
                        (  <> 
                                <li>
                                    <Link href='/account/login'>
                                        <a className='btn-secondary btn-icon'>  
                                            <HiLogin /> Log In
                                        </a>
                                    </Link>
                                </li>
                            </>
                        )  
                    } 
                </ul>
            </nav>
        </header>
    )
}
