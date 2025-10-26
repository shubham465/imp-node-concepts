const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.route('/register').post(async (req, res)=> {
      const {name, role, email, password} = req.body

      const hashPassword = await bcrypt.hash(password, 10)

      if(name && role, email, password){
        const user = await User.create({
            name, 
            role, 
            email,
            password: hashPassword
        })

        res.json(user)
      }
      else
        res.send("Incomplete fields")
})


router.route('/login').post(async (req, res) => {
      // In a real application, you would verify user credentials here
      const {email, password} = req.body

      // Sign the JWT
      const user = await User.findOne({email})
      if(user && await (bcrypt.compare(password, user.password))){

      // Create the JWT payload
        const payload = {
          id: user.id,
          email: email,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
        res.json({ token });
      }
  });

router.route('/').get(async (req, res)=> {
     const user = await User.find({})
     res.json(user)
})

module.exports = router