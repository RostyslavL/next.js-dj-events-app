import Link from 'next/link'
import {HiOutlineTrash, HiPencil, HiCalendar,HiChevronLeft} from 'react-icons/hi'
import styles from '@/styles/DashboardEvent.module.css'


export default function DashboardEvent({evt, handleDelete}) {
    return (
        <div className={styles.event}>
            <h4>
                <Link href={`/events/${evt.slug}`}>
                    <a>{evt.name}</a>
                </Link>
            </h4>
            <Link href={`/events/edit/${evt.id}`}>
                    <a className={styles.edit}>
                        <HiPencil /> <span> Edit Event</span>
                    </a>
                </Link>
                <a className={styles.delete} onClick={() => handleDelete(evt.id)}>
                        <HiOutlineTrash /> <span> Delete Event</span>
                </a>
        </div>
    )
}
