import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DetailProfile from '../components/DetailProfile'
import Sidebar from '../components/Sidebar'
import './searchPage.css'
import { useStateContext } from '../context/StateContext'

const SearchPage = () => {
  const {amILoggedIn} =  useStateContext() 
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
        <Box className='boxSide' sx={{height:{sx:'auto',md:'90vh'}}}>
            {amILoggedIn && <Sidebar />}
        </Box>
        <Box className='boxDetail'>
            {amILoggedIn ? <DetailProfile /> : <h1>Error 404 : Page not found</h1>}
        </Box>
    </Stack>
  )
}

export default SearchPage