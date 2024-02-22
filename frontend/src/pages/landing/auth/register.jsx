import { useState } from "react";
import axios from 'axios'


const Register = (props) => {

  const [ submitForm, setSubmitForm ] = useState ({
    email: '',
    password: '',
    confirmPassword: ''
  })



  const [ message, setMessage ] = useState()

  const { email, password, confirmPassword } = submitForm

  const formChangeHandler = (e) => {
    setSubmitForm((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

const inputValidation = (email, password, passwordConfirm) => {
  if(!email) {
    setMessage('please enter your email')
    return false
  }
  if(!password) {
    setMessage('please enter your password')
    return false
  }
  if(!passwordConfirm) {
    setMessage('please enter confirming password')
    return false
  }
  
  if(password !== passwordConfirm) {
    setMessage('Your passwords do not match')
    return false
  }
  
  return true
}


  const clickHandler = (e) => {
    e.preventDefault()

    if(!inputValidation(email, password, confirmPassword)) {
      return
    }



    // todo: API call

    const sendOutForm = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }


    const requestToAPI = async (form) => {
      try {

        const request = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/register`, form)
  
        if(request) {
        }
        console.log(request.data)
      } catch (error) {
        console.log(error)
      }
    }

    requestToAPI(sendOutForm)

  }

  return (


    <div>
      <p>Resister Account</p>
      {message && <p> {message} </p>}
      <form onSubmit={clickHandler}>
        <div>
          <p>email</p>
          <input type='email' name='email' value={email} onChange={formChangeHandler} />
        </div>

        <div>
          <p>password</p>
          <input type='password' name='password' value={password} onChange={formChangeHandler} />
        </div>

        <div>
          <p>confirmPassword</p>
          <input type='password' name='confirmPassword' value={confirmPassword} onChange={formChangeHandler} />
        </div>


        <div>
        <button type="submit">Register Account</button>
        </div>
      </form>
 
    </div>
    
  );
}
export default Register;