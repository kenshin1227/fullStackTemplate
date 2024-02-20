import { useState } from "react";


const Register = (props) => {

  const [ submitForm, setSubmitForm ] = useState ({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { email, password, confirmPassword } = submitForm

  const formChangeHandler = (e) => {
    setSubmitForm((prev)=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const clickHandler = (e) => {
    e.preventDefault()

    console.log('button clicked')
  }

  return (


    <div>
      <p>Resister Account</p>
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