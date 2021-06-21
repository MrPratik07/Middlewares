const express=require('express');
const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded());

const validation(req,res,next){
    const {firstname,lastname,email,age}=request.body;
    if(firstname.length>50 || lastname.length>50){
        res.status(400).json({
            message:"firstame or lastname is big"
        })
    }

    if(typeof age!==Number){
        res.status(400).json({
            message:"age must be number"
        })
    }

    next();
}

server.post('/consumer',validation,(request,response)=>{
    response.status(200).json({
        message:"validation successful"
    })
    
})

server.listen(3000,()=> console.log("Server is Live"));
