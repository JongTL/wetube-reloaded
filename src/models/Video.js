//data 의 형식을 정의해주기
//구체적인 값을 주는게 아니다

import mongoose from "mongoose";
import videoRouter from "../routers/videoRouter";

//데이터 타입은 자세할 수록 좋다!

const videoSchema = new mongoose.Schema({
    title : {type:String, required:true, trim:true,maxlength:80}, 
    description : {type:String, required:true, trim:true,minlength:20},
    createdAt:{type :Date, required:true, default:Date.now }, //date.now() 를 안쓰는이유. () 를 하면 즉시 함수를 실행해서. 이렇게 쓰면 몽구스가 비디오가 만들어질때 자동으로 실행해줌
    hashtags:[{type:String,trim :true}],
    meta:{
        views:{type :Number,default:0,required:true}, //여기에 string 을 넣으면 데이터에 포함되지 않는다.
        rating:{type :Number,default:0,required:true},
    },
});

const Video=mongoose.model("Video",videoSchema);
export default Video;
