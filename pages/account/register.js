import { HiUserAdd } from 'react-icons/hi'
import {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/AuthForm.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '@/context/AuthContext'

export default function RegisterPage() {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const {register, error} = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(password !== passwordConfirm ){
            toast.error(`Error: Oops Passwords don't match`)
            return
        }else if ( password ===''){
            toast.error(`Error: Please Fill All Fields`)
            return
        }
    else{
            register({username, email, password})
            toast.success(`Great ! Welcome`)
        }
    }

    return (
        <Layout title='User Registration' >
           <div className={styles.auth}>
            <h1>
                <HiUserAdd /> Register
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={ (e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Adress</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">User Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={ (e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input 
                        type="password" 
                        id="passwordConfirm" 
                        value={passwordConfirm} 
                        onChange={ (e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    value='Register'
                    className='btn-secondary'                    
                />
            </form>
            <p>
                Already have an account ? &nbsp;
                Go to <Link href='/account/login'> Login Page </Link>
            </p>
           </div>
        </Layout>
    )
}
