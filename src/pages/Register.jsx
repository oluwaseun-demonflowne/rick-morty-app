import React, { useState } from 'react'
import { auth } from '../firebase/configFirebase'
// import {createUs}
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import imgPro from '../assets/imgPro.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { motion } from 'framer-motion'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const [passwordFocused, setPasswordFocused] = useState(false)
  const [CPasswordFocused, setCPasswordFocused] = useState(false)

  const handleFocus = () => {
    setPasswordFocused(true)
  }

  const handleFocuss = () => {
    setCPasswordFocused(true)
  }

  const registerUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      toast.success('Registered succesfully')
      navigate('/login')
    })
    .catch((error) => {
      toast.error('Failed, try again')
    })
  }


  return (
    <div className='nav-main'>
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    className='nav-info'>
        <img className='reg-img-form' src={imgPro} width='100px' height='50px'/>
        <p className='bio'><b>Wubba Lubba Dub Dub!</b></p>
        {/* <div className='divBtn'>
        <button className='loginWithSocial'>
            <FcGoogle className='FcGog'/>
            Continue with Google</button>
        <button className='loginWithSocial'>
            <MdEmail className='FcGog'/>
            Continue with Email</button>
        </div> */}
        <br />
        <form onSubmit={registerUser}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='input' type='email' placeholder='create email'/>
        <input onBlur={handleFocus} passwordFocused={passwordFocused.toString()} pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$' value={password} onChange={(e) => setPassword(e.target.value)} className='input' type='password' placeholder='input password'/>
        <p className='exclaims'>pasword must contain a letter,num and special character and be between 8-20 characters.</p>
        <input onBlur={handleFocuss} CPasswordFocused={CPasswordFocused.toString()} pattern={password} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='cp' type='password' placeholder='confirm password'/>
        <p className='exclaim'>must be same with password</p>
        <button type='submit' className='continue'>Register</button>
        </form>
        <p className='noAccount'>Have an account already?</p>
        <Link to='/login'>
            <button className='create'>Login</button>
        </Link>
    </motion.div>
    </div>
  )
}

export default Register