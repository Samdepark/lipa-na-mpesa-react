import App from "./App";
const express = require ("express");
 const app = express();
 const cors =require("cors");
 const axios =require("axios")

 app.listen(3000,()=>{
    console.log('server running okay')
 });


 app.use(express.json());
 app.use(express.urlencoded({ extended:true  }));
 app.use(cors());
 app.get("/token",(req,res)=>{
   generateToken();
 });

 const generateToken = async (req,res,next)=>{
   await axios.get("https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
      header:{
         Authorization:`Basic${auth}`,
      }
   }).then((response)=>{
      console.log(response.token)
      next()
   }).catch((err)=>{
      res.status(400).json(err.message)
   })
 }
//middle ware to generate token
   app.post("/stk",generateToken,(req,res)=>{
    const phone =req.details.phone.subString(1);
    const amount = req.details.amount;
    const date = new Date()
    const Timestamp=
    date.getFullYear()+
    ('0' + (date.getMonth()+1)).slice(-2)+
    ('0' + date.getDate()).slice(-2)+
    ('0' + date.getHours()).slice(-2)+
    ('0' + date.getMinutes()).slice(-2)+
    ('0' + date.getSeconds()).slice(-2);

    const password = Timestamp.toString("base64")
   async function stkpush(){ 
    await axios.post(
      "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {    
        "BusinessShortCode":"174379",    
        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
      "Timestamp": Timestamp,    
      "TransactionType": "CustomerPayBillOnline",    
        "Amount": amount,    
       "PartyA":`254${phone}`,    
        "PartyB":"174379",    
      "PhoneNumber":`254${phone}`,    
      "CallBackURL":"https://mydomain.com/pat",    
      "AccountReference":"Test",    
      "TransactionDesc":"Test"
     },
     {
        headers:{
            Authorization:`Bearer{token}`
        },
     }).then((data)=>{
        console.log(data)
        res.status(200).json(data)
     }).catch((err)=>{
      res.status(400)
     })
   }res.json()
 })