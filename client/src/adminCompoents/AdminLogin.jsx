import React, { useState } from 'react'

import axios from 'axios'

import './admin.css'

import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const navigate =useNavigate()

    const[form,setForm]= useState({email:"",password:""})

    const [error,setError]= useState('')

    const handlerChange = (e)=>{

        const name=e.target.name;
        const value = e.target.value;

        setForm({...form,[name]:value})
    }

    const submitHandler = async(e)=>{

        e.preventDefault()


        try {

            const res  = await axios.post('http://localhost:4000/admin/login',{email:form.email,password:form.password})

            if(res.data.status){
                localStorage.setItem('name',res.data.name)
                localStorage.setItem('token',res.data.token)
                navigate('/admin')
            }
           
            
        } catch (err) {

            setError('incorret username or password')
            console.log(err)
            console.log(error);
            

            
        }


       
    }

    




  return (
    
        <div className='login'>
    <div class="container " style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
    <div class="card p-4" style={{"width": "40%" }} >
        <div class="text-center mb-4">
            <h2>Login</h2>
        </div>
        <div>
            <form onSubmit={submitHandler}> 
                <div className="form-group p-3" >
                    {/* <label for="email">Email address</label> */}
                    <input type="email" name='email' class="form-control" id="email" placeholder="Enter email" value={form.email} onChange={handlerChange}/>
                </div>
                <div class="form-group p-3">
                    {/* <label for="password">Password</label> */}
                    <input type="password" name='password' class="form-control" id="password" placeholder="Password"  value={form.password} onChange={handlerChange}/>
                </div >
                <div className="fs-1 text-white "  >
                   <h4>{error}</h4>
                   
                </div >
                <div className='form-group p-3 ' >
                <button type="submit" class="btn btn-primary btn-block p-3">Login</button>
                </div>
         
            </form>
        </div>
    </div>
</div>
</div>
  )
}

export default AdminLogin
