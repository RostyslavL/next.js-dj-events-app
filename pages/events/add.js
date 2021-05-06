import React from 'react'
import Layout from '../../components/Layout'
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {API_URL} from '@/config/index'
import styles from '@/styles/Form.module.css'
import { HiOutlineChevronLeft,  } from 'react-icons/hi'

export default function AddEventPage() {

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

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)

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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                        required
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
