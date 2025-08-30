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
<nav className='w-full flex items-center justify-center gap-20 rounded-xl p-3  border-y-sky-200 shadow-xl bg-gray-200 min-w-5'>
 
  <Link to="/"></Link>
  <Link to="/Fetch_User" className='bg-blue-500 p-2 rounded-md font-semibold hover:bg-blue-600'>Fetch User</Link>
  <Link to="/Create_User" className='bg-emerald-300 p-2 rounded-md font-semibold hover:bg-emerald-400'>Create User</Link>
 
  <Link to="/Delete_User" className='bg-fuchsia-600 p-2 rounded-md font-semibold hover:bg-fuchsia-500'>Delete User</Link>
</nav>


 {/* // ✅ All Routes for diffrent Links  */}

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
