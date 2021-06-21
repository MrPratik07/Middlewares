const express=require('express');
const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded());

function validation(firstname,lastname,age){
    if(firstname.length>50 || lastname.length>50){
        return false;
    }

    if(typeof age!==Number){
        return false;
    }

    return true;
}

server.post('/consumer',(request,response)=>{
    const {firstname,lastname,email,age}=request.body;
    if(validation(firstname,lastname,age)){
        response.status(200).json({
            message:"Validation Successful"  
        });
        
    }
    else{
        response.status(400).json({
            message:"error"       
        })
    }
})

server.listen(3000,()=> console.log("Server is Live"));
