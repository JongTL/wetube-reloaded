import express from "express";
import {join, login} from "../controllers/userController"; // ../ 는 폴더 나가는거 ./는 현위치
import {home,search} from "../controllers/videoController";



const globalRouter = express.Router(); //라우터 만들기



globalRouter.get("/",home);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
//globalRouter.get("/search",search);


export default globalRouter; //익스포트