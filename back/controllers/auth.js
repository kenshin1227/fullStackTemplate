const crypto = require('crypto')
const User = require('../model/user')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async (req, res) => {

  const { email, password, confirmPassword } = req.body

  if(!email || !password || !confirmPassword) {
    return res.status(400).json({
      message: 'Required information is missing',
      status: 400
    })
  }

  if(password !== confirmPassword) {
    return res.status(400).json({
      message: 'Passwords do not match'
    })
  }

  try {
    const createdUser = await User.create({
      email,
      password
    })

    if(createdUser) {
      return sendToken(createdUser, 201, res)
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'error at creating user in mongoDB'
    })
  }
}


exports.login = async (req, res) => {
  return console.log(req.body)
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({
    success: true,
    token,
    userId: user._id
  })
}



//creat 뭔가를 처음 만들 때 ex) DB.create({ketValue: value})
//read 하나만 찾을 때 ex) DB.findOne({email: emailValue})
//read wjsqn 찾을 때 ex) DB.findOne()
//upDate = 수정할 때 ex) DB.findOneAndUpdate.(찾아야하는 값{_id: IDValue}, {updatekeyvalue: updatingValue})
//delete 지울 때 ex) DB.findOneAndDelete({_ID: IDValue})

//CRUD functions < DATABASE 는  CRUD function을 통해 모든 것이 이루어짐>