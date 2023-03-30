import React, { useState } from 'react'
import { categories } from './sidebarData'
import './sidebar.css'
import { useStateContext } from '../context/StateContext'


const Sidebar = () => {
 const {selected,setSelected,setSearch} =  useStateContext([])
 console.log(selected)
 



  return (
    <div className='sidebtn'>
        <input className='nameSearch' onChange={e => setSearch(e.target.value)}  placeholder='Search name' />
        {/* <button></button> */}
        {categories.map((category) => (
            <button onClick={() => setSelected(category.name)}>
                <span style={{color:'#3A98B9'}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Sidebar