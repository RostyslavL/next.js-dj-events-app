import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {HiOutlineTrash, HiPencil, HiCalendar,HiChevronLeft} from 'react-icons/hi'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function EventPage({evt}) {

    const router = useRouter()

    return (
        <Layout>
            <div className={styles.event}>
               
                <span>
                    <HiCalendar/> <b> {new Date(evt.date).toLocaleDateString('pl-PL')} </b>  At  <b>{evt.time}</b>
                </span>
                <h1>{evt.name}</h1>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image.formats.large.url} width={960} height={600}/>
                    </div>
                )} 
                <p>
                    <b>
                    Performers: 
                    </b>
                </p>  
                <p>
                    <i>
                        {evt.performers}
                    </i>
                </p>
                <h3>
                    <b>Description</b>
                </h3>
                <p>
                    <i>
                        {evt.description}
                    </i>
                </p>
                <h3>Venue: {evt.venue}</h3>
                <p>{evt.address}</p>

                <EventMap evt={evt}/>

                <Link href='/events'>
                    <a className={styles.back}>
                       <HiChevronLeft />  Go Back
                    </a>
                </Link>
            </div>
        </Layout>
    )
 }
// export async function getStaticPaths(){
//     const res = await fetch(`${API_URL}/events`)
//     const events = await res.json()
//     const paths = events.map((evt) =>({
//         params: { slug: evt.slug}
//     }))
//     return{
//         paths,
//         fallback: true,
//     }
// }

// export async function getStaticProps({params: { slug }}){

//     const res = await fetch(`${API_URL}/events?slug=${slug}`)
//     const events = await res.json()
//     return {
//         props: {
//             evt: events[0]
//         },
//         revalidate: 1
//     }
// }

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`)
    const events = await res.json()
  
    return {
      props: {
        evt: events[0],
      },
    }
  }