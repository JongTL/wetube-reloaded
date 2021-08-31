import express from "express";
import {watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload,
    deleteVideo,
} from "../controllers/videoController";

const videoRouter=express.Router();

videoRouter.get("/:id(\\d+)",watch); //파라미터 : 을 넣는게 중요하다. id는 다른이름으로 써도 됨. url에 변수를 넣을수있게 해줌
// = videoRouter.rout("/:id(\\d+)").get(watch);

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
//이 문장은 아래 두 문장과 뜻이 같다.
//videoRouter.get("/:id(\\d+)/edit",getEdit); // (\\d+)는 d(숫자)가 +뒤에 계속되야한다는 뜻
//videoRouter.post("/:id(\\d+)/edit",postEdit) //psot 만들기.

videoRouter.route("/upload").get(getUpload).post(postUpload);


//videoRouter.get("/:id(\\d+)/delete",deleteVideo);
//videoRouter.get("/upload",upload); //이건 :id 있는 것보다 위에 있어야 잘 작동한다. 아니면 upload를 아이디로 인식한다.


export default videoRouter;