import React, { useEffect ,useState} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import './users.css'

function Users() {


const [data,setData]= useState([])

useEffect(()=>{


  const fetchUsers =async()=>{
    try {
 
      const res = await axios.get('http://localhost:4000/user')
      
    setData(res.data.users);

    console.log(data,"he");
      
    } catch (error) {
    
      console.log(error);

    }

  }

  fetchUsers()
},[])

  

  
  return (
    <div className='coloumn first'>

        <div   >
        <Sidebar/>
        </div>
      

 
    <div className='container '>

        <div className='section'>
            <button className='btn btn-dark' style={{width:'20%'}}>show users</button>
            <div style={{marginTop:'4%'}}> 
            <table class="table table-dark">
  <thead className='' >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  data.map((user)=>{
return(
  <tr >
  <th scope="row">1</th>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td className='buttons'><button className='btn btn-primary ' style={{width:'40%'}}>Edit User</button></td>
  <td className='buttons'><button className='btn btn-danger ' style={{width:'40%'}}>Delete User</button>

  </td>
</tr>
)
   

  })
}
  
    
  
  </tbody>
</table>
            </div>
 
        </div>
   
      
    </div>
    </div>
  )
}

export default Users
