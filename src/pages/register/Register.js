import React, { useState } from 'react'
import './register.css'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Register() {
const nav=useNavigate()
  const [inputdata,setinputdata]=useState({
    username:"",
    email:"",
    password:""
})
const setinputvalue=(e)=>{
  const {name,value}=e.target
  setinputdata({...inputdata,[name]:value})
}
console.log(inputdata);

const register=(e)=>{
  e.preventDefault()
  const {username,email,password}=inputdata

  if(username ==="" || email === "" || password === ""){
    toast.error("fields cannot be empty")
  }
  if(username.length<4 || username.length>20){
    toast.error("min length/4 max length/20")
  }
  if (!email.includes('@') || !email.includes('.')) {
    toast.error("Invalid Email")
    return;
  }
  if (!password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)) {
    toast.error('Password must contain at least one capital letter, one symbol, and one number');
    return;
  }
 else{
  toast.success("Sign up success")
  setTimeout(() => {
    nav('/vlog')
  }, 5000);
 }
}
  
  return (
    <>

    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-5 bg-style">
            <div className="welcome">
                <h4 className='welcome-heading'>Welcome Back!</h4>
                <p className="welcome-par">
                    To keep connected with us please login whth your personal info  
                </p>

                <button className='button0'>
  <span> SIGN IN
  </span>
</button>
               </div>
                <div className="circle"></div>
            <div className="square"></div>
            <div className="square1"></div>

               

          
            </div>

            <div className="col-lg-6">

              <h3 className="heading-welcome1"> Create Account

              </h3>
              <div className="row">
                <div className="col-lg-4">
                  
                </div>
                <div className="col-lg-4">

                  <div className="row">
                    <div className="col-sm-4">
                    <div className="rounded-circle small-circle">
                    <p className="social">
                    <i class="fa-brands fa-facebook-f"></i>

                    </p>
                  </div>


                    </div>
                    <div className="col-sm-4">
                    <div className="rounded-circle small-circle">
                    <p className="social">
                    <i className="fa-brands fa-google-plus-g"></i>

                    </p>
                  </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="rounded-circle small-circle">
                    <p className="social">
                    <i class="fa-brands fa-linkedin-in"></i>

                    </p>
                  </div>
                    </div>
                  </div>
                   <p className="mt-3">or use your email for registration</p>

                   <div className="">


                   <Form>
      <Form.Group className="mb-3 formcolor" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Name" name='username'
            value={inputdata.username}
            onChange={setinputvalue} />
      </Form.Group>
      <Form.Group className="mb-3 formcolor" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" className='input-text' name='email'
            value={inputdata.email}
            onChange={setinputvalue} placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3 formcolor" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name='password'
            value={inputdata.password}
            onChange={setinputvalue} placeholder="Password" />
      </Form.Group>
      <button className='button1 ms-5' onClick={register}>
  <span> SIGN UP
  </span>
</button>
    </Form>

                   </div>

                
                  
                </div>
                <div className="col-lg-4"></div>
              </div>

            </div>
        </div>
        <ToastContainer position='top-center'/>

    </div>

    
    </>
  )
}

export default Register