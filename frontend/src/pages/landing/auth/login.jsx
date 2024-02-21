import { useState } from "react";
import axios from 'axios'


const Login = (props) => {

  const [ submitForm, setSubmitForm ] = useState ({
    email: '',
    password: '',
  })



  const [ message, setMessage ] = useState()

  const { email, password } = submitForm

  const formChangeHandler = (e) => {
    setSubmitForm((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const inputValidation = (email, password ) => {
    if(!email) {
      setMessage('please enter your email')
      return false
    }
    if(!password) {
      setMessage('please enter your password')
      return false
    }

    return true
  }


    const clickHandler = (e) => {
      e.preventDefault()

      if(!inputValidation(email, password )) {
        return
      }



      // todo: API call

      const sendOutForm = {
        email: email,
        password: password
      }
  
  
      const requestToAPI = async (form) => {
        const request = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/login`, form)
      }
      console.log('button clicked')
  
      requestToAPI(sendOutForm)


      console.log('button clicked')
    }

  return (

    <div>
      <p>Login </p>
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
          <button type="submit"> Login </button>
          </div>
        </form>
    </div>
  );
}
export default Login;