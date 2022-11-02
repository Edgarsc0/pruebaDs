const express=require("express");
const app=express();
app.enable('trust proxy');
console.log(app.get('trust proxy'));
app.get("/",(req,res)=>{
    console.log(`peticion recibida ${req.ip}`);
    res.send("<h1>Hola</h1>");
})
const port=process.env.PORT||8000;
app.listen(8000,()=>{
    console.log(`server on port ${port}`);
})