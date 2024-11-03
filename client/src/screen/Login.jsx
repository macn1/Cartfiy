import React from 'react'
import './login.css'
import Header from '../components/Header'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {
  const[err,setError]= useState('')
    const [form, setForm] = useState({ email: "",password: "" });
const navigate = useNavigate()
  const changeHandler = (e) => {
      // const [name,value]=event.target
  // setFormadata({...formdata,[name]:value})
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
   
  };
  // console.log(form);

  const handleSubmit = (e)=>{
e.preventDefault()

axios.post('http://localhost:4000/user/login',{email:form.email,password:form.password}).then((res)=>{
  console.log(res.data)
  localStorage.setItem('username',res.data.user.name)
  localStorage.setItem('token',res.data.token)
  localStorage.setItem('id',res.data.user._id)
navigate('/')
}).catch((err)=>{
  console.log(err);
  // console.log(err.response.data.message)
setError(err.response.data.message)
  // alert(err.response.data.message)
})

  }
  return (
   <>
   <Header></Header>
   <div className="login-container">
      <form className="login-form1" onSubmit={handleSubmit}>
        <h2>Login Here</h2>
      
       
        <div className="form-group">
          <input
            type="Email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={changeHandler}
            required
          />
        </div>
       

        <div className="form-group">
          <input
            type="Password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
            required
          />
        </div>
       
        <button type="submit">submit</button>
        <div className="already-have-account">
        <p>Don't Have an account? <Link to="/signup">Register</Link></p>
      </div>
      <div className='error'> 
          {err}
        </div>
      </form>
     
     
   
    </div>

   
   </>
  )
}

export default Login