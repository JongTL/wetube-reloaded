import express from "express";
import {see,edit,upload,deleteVideo} from "../controllers/videoController";

const videoRouter=express.Router();

videoRouter.get("/upload",upload); //이건 :id 있는 것보다 위에 있어야 잘 작동한다. 아니면 upload를 아이디로 인식한다.
videoRouter.get("/:id(\\d+)",see); //파라미터 : 을 넣는게 중요하다. id는 다른이름으로 써도 됨. url에 변수를 넣을수있게 해줌
videoRouter.get("/:id(\\d+)/edit",edit); // (\\d+)는 d(숫자)가 +뒤에 계속되야한다는 뜻
videoRouter.get("/:id(\\d+)/delete",deleteVideo);


export default videoRouter;