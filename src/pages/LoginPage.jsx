import React from 'react'
import { toast } from 'react-hot-toast'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../firebase/configFirebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import imgPro from '../assets/imgPro.png'
import './LoginPage.css'
import {FcGoogle} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md'
import {useStateContext} from '../context/StateContext'
import { motion } from 'framer-motion'

const LoginPage = () => {
  // const login = () => {
    
  // }

  const {setAmILoggedIn} = useStateContext()


  

  const navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
    .then((result) => {
      toast.success('Login successful')
      setAmILoggedIn(true)
      navigate('/feed')
    }).catch((err) => {
      toast.error(err.message)
    })
  }


  return (
    <div className='main'>
    <motion.div 
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    className='info'>
        <img className='img-form' src={imgPro} width='100px' height='50px'/>
        <p className='bio'><b>Wubba Lubba Dub Dub!</b></p>
        <div className='divBtn'>
        <button onClick={signInWithGoogle} className='loginWithSocial'>
            <FcGoogle  className='FcGog'/>
            Continue with Google</button>
        <button className='loginWithSocial'>
            <MdEmail className='FcGog'/>
            Continue with Email</button>
        </div>
        <p className='or'>----------------or-----------------</p>
        <input className='input' placeholder='Email address or username'/>
        <br />
        <button className='continue'>Continue</button>
        <p className='noAccount'>Don't have an account?</p>
        <Link to='/register'>
            <button className='create'>Create account</button>
        </Link>
    </motion.div>
    </div>
  )
}

export default LoginPage