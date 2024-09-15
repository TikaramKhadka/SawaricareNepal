const {Router}= require('express')
const UserRoute = Router()
UserRoute.get('/users',(req,res)=>{
    res.send(['ram','shyam','hari'])
})
UserRoute.post('/register',(req,res)=>{
      res.send({msg:"user registered successfully"})
  })
  UserRoute.put('/users/:id',(Req, res)=>{
      res.send({msg:"user updated successfully"})
  })
  
module.exports.UserRoute;