import express from "express";
import {watch,getEdit,postEdit,upload,deleteVideo,getUpload,postUpload} from "../controllers/videoController";

const videoRouter=express.Router();

videoRouter.get("/:id(\\d+)",watch); //파라미터 : 을 넣는게 중요하다. id는 다른이름으로 써도 됨. url에 변수를 넣을수있게 해줌
// (\\d+)는 d(숫자)가 +뒤에 계속되야한다는 뜻
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete",deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;