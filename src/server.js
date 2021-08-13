import express from "express";
const PORT=4000;

const app = express();
//express 앱이 만들어지고 난 이후에 코드작성

const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req,res)=>{
    return res.send("i'm listening");
}


app.use(logger);


app.get("/",logger,handleHome);

//express 가 get 요청을 받으면 handleHome을 실행하는데 그때 req 과 res 를 넘겨줌. 


const handleListening=() =>
    console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);

