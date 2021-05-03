import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'
import { HiOutlineInformationCircle } from 'react-icons/hi'


export default function EventItem({ evt }) {
    return (
    <div className={styles.event}>
        <div className={styles.img}>
          <Image
            src={
              evt.image
                ? evt.image
                : '/images/event-default.png'
            }
            width={200}
            height={100}
          />
        </div>
            <div className={styles.info}>
                <span>
                    <b>
                        {evt.date}
                    </b> 
                    &nbsp; at &nbsp;
                    <b>
                        {evt.time}
                    </b>
                </span>
                <h3>
                    {evt.name}
                </h3>
                <div className={styles.link}>
                    <Link href={`/events/${evt.slug}`} >                        
                        <a className='btn'> Details 
                            &nbsp; <HiOutlineInformationCircle />
                        </a>
                    </Link>
                </div>
            </div>
    </div>
)}