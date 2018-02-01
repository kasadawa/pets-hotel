const express = require('express') ; 
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://admin:admin@ds161306.mlab.com:61306/pets-hotel', ['users']);
router.post('/login', (req,res,next)=>{
    let {email, password} = req.body;
    let message= 'success';
    db.users.findOne({email: email, password: password},(err,docs)=>{
      console.log(docs)
      if(!err && !!docs){
        res.json({success: true , info:docs });
      }else{ 
        res.json({success:false})
      }
    })

  });


router.post('/register', (req,res,next)=>{
    let {email,address,phone,password} = req.body; 

    db.users.save({email,address,phone,password},(err,docs)=>{
        if(!err){
          res.json({message:'Succesfully registered'})
        }
    })

  });
 
module.exports = router;