//data 의 형식을 정의해주기
//구체적인 값을 주는게 아니다

import mongoose from "mongoose";
import videoRouter from "../routers/videoRouter";

const videoSchema = new mongoose.Schema({
    title : String, //{type:String} 이렇게 써도 된다.
    description : String,
    createdAt:Date,
    hashtags:[{type:String}],
    meta:{
        views:Number,
        rating:Number,
    },
});

const Video=mongoose.model("Video",videoSchema);
export default Video;
