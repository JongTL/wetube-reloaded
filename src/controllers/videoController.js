import Video from "../models/Video";

/* //callback 패턴
export const home=(req,res)=>{
    Video.find({},(error,videos)=>{ 
        if(error){
            return res.render("server-error")
        }
        return res.render("home",{ pageTitle : "Home", videos}); 
        // pug 로 작성한 화면을 출력하는 법. render("view Name") , 두번째 인수를 건내준다.
    });   
}
*/

//아래는 promise 방식
export const home=async(req,res)=>{
        const videos=await Video.find({});//await 기다려주는 것을 할 수있다! 여기선 db 를 받아오는 것을 기다려줌
        return res.render("home",{ pageTitle : "Home", videos})
}

export const watch=(req,res)=> {
    // const id = req.params.id; 이렇게 해도 되고
    const {id} = req.params; //이렇게해도 똑같다. 이건 es6 를 사용한 것이란다.
    return res.render("watch",{pageTitle: `Watching`});
}
export const getEdit=(req,res)=> {
    const {id} = req.params; //이렇게해도 똑같다. 이건 es6 를 사용한 것이란다.
    return res.render("edit",{pageTitle:`Editing`});
}

export const postEdit=(req,res)=>{
    const {id} = req.params;
    const {title}=req.body;
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req,res)=>{
    return res.render("upload",{ pageTitle : "Upload video"});
}

export const postUpload = (req,res)=>{
    const {title}=req.body;
    return res.redirect("/");

}

//export const search=(req,res)=>res.send("Search");
//export const upload=(req,res)=>res.send("Upload");
//export const deleteVideo=(req,res)=>res.send("deleteVideo");

//defauexport const search=(req,res)=>res.send("Search");
//export default 는 하나의 파일에허 하나만 익스포트할수있는데 위처럼 하면 한 파일에서 여러가지를 익스포트 가능