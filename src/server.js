
import express from "express";
import morgan from "morgan";
import globalRouter from"./routers/globalRouter";
import videoRouter from"./routers/videoRouter";
import userRouter from"./routers/userRouter";





const app = express();
//express 앱이 만들어지고 난 이후에 코드작성
const logger = morgan("dev"); //dev, tiny, common 등 여러옵션이있음

app.set("view engine", "pug")//퍼그를 뷰엔진으로 사용한다고 선언 , 디폴트로 저장경로가 views 폴더라 임포트 안해도된다.
app.set("views",process.cwd()+"/src/views"); //보여줄 파일이 있는 경로 설정

app.use(logger);
app.use(express.urlencoded({extended:true})); //post 의 form 을 이해하게 하기 위한 미들웨어

app.use("/",globalRouter); //라우터 사용하기
app.use("/videos",videoRouter);
app.use("/users",userRouter);

export default app;

//express 가 get 요청을 받으면 handleHome을 실행하는데 그때 req 과 res 를 넘겨줌. 

const handleListening=() =>
    console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);

