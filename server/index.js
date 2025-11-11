import express from 'express'

import cors from 'cors'


const app = express();
app.use(cors());

app.get("/test",(req,res)=>{
  return res.json({
    message:"congrats server is running with status Ok"
  })
})
const PORT= 4000 ;

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})