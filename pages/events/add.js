import React from 'react'
import Layout from '../../components/Layout'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import styles from '@/styles/Form.module.css'
import { HiOutlineChevronLeft,  } from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {parseCookies} from '@/helpers/index'

export default function AddEventPage({token}) {

    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: '',
    })

    const router = useRouter()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        // Validation
        const hasEmptyFields = Object.values(values).some((element) => element === '')
        
        if(hasEmptyFields){
            toast.error('Wow An Error ! Please Fill all fields')
        }
        const res = await fetch(`${API_URL}/events `, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                },
            body: JSON.stringify(values)
        })
        if(!res.ok){
            if(res.status === 403 ||res.status === 401){
                toast.error('Wow An Error : No Token Included')
                return
            }
            toast.error('Wow An Error ! Something Went Wrong')
        }else{
            const evt = await res.json()
            router.push(`/events/${evt.slug}`)
            toast.success('Great ! Success')
            return
        }

    }
    
    const handleInputChange = (e) =>{
        const {name, value}  = e.target
        setValues({...values, [name]: value})

    }

    return (
        <Layout title='Add new Event'>
            <Link href="/events">
                <a className='btn'>  
                    <HiOutlineChevronLeft/> Go Back   
                </a>
            </Link>
            <h1>Add Event</h1>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name"> <b>Event Name</b></label>
                        <input 
                            type="text"  
                            id="name" 
                            name="name" 
                            value={values.name} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="performers"> <b>Performers</b> </label>
                        <input 
                            type="text"  
                            id="performers" 
                            name="performers" 
                            value={values.performers} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="venue"> <b>Venue</b></label>
                        <input 
                            type="text"  
                            id="venue" 
                            name="venue" 
                            value={values.venue} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="name"> <b>Address</b></label>
                        <input 
                            type="text"  
                            id="address" 
                            name="address" 
                            value={values.address} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="date"> <b>Date</b></label>
                        <input 
                            type="date"  
                            id="date" 
                            name="date" 
                            value={values.date} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="name"> <b>Time</b></label>
                        <input 
                            type="time"  
                            id="time" 
                            name="time" 
                            value={values.time} 
                            onChange={handleInputChange}
                            
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="description"> <b>Event Description</b></label>
                    <textarea 
                        type="text" 
                        name="description" 
                        id="description"
                        value={values.description} 
                        onChange={handleInputChange}  
                        
                    ></textarea>
                </div>
                    <input 
                        type="submit"  
                        className='btn'
                        value="Add Event" 
                    /> 
            </form>
        </Layout>
    )
}


export async function getServerSideProps({req}){
    const {token} = parseCookies(req)

    return  {
        props:{
            token
        }
    }
}