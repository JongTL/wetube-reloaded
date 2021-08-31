import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube",{
    useNewUrlParser : true,
    useUnifiedTopology:true,
});
// 슬래쉬 뒤에 이름을 적어주면 db를 만들수있다
//이 주소는 터미널에 mongo 실행했을 때 나오는 주소

const db=mongoose.connection;

const handleOpen = ()=>console.log("✅Connected to DB");
const handleError=(error)=>console.log("❌DB error",error);

db.on("error",handleError);
db.once("open",handleOpen); //once 는 connection 이 열릴 때 한번만 작동한다.

