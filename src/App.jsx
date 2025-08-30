import React from 'react'
import FetchUserList from './Components/FetchUserList'

import { Link, Route, Routes } from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import EditUser from './Components/EditUser'
import HomePage from './Components/HomePage'
import DeleteUser from './Components/DeleteUser'

const App = () => {
  return (
    <div>
<nav className='w-full flex items-center justify-center gap-20 rounded-md p-3'>
  <Link to="/"></Link>
  <Link to="/Fetch_User" className='bg-amber-500 p-2 rounded-md'>Fetch User</Link>
  <Link to="/Create_User" className='bg-emerald-300 p-2 rounded-md'>Create User</Link>
 
  <Link to="/Delete_User" className='bg-cyan-500 p-2 rounded-md'>Delete User</Link>
</nav>

<Routes>
<Route path="/" element={<HomePage/>}/>
    <Route path="/Fetch_User" element={<FetchUserList/>}/>
     <Route path="/Create_User" element={<CreateUser/>}/>
    <Route path="/edit/:id" element={<EditUser />} />
    <Route path="/Delete_User" element={<DeleteUser/>} />
  </Routes>



 
     
    </div>
  )
}

export default App
