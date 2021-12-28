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

export const watch=async(req,res)=> {
    // const id = req.params.id; 이렇게 해도 되고
    const {id} = req.params; //이렇게해도 똑같다. 이건 es6 를 사용한 것이란다.
    const video=await Video.findById(id);
    console.log(video);
    if (video) { //ID가 없는 임의의 비디오를 사용자가 주소창에 입력할 경우를 대비
        return res.render("watch",{pageTitle: video.title,video}); 
    }
    return res.render("404",{pageTitle:"Video not found."});
    
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

export const postUpload = async(req,res)=>{
    const {title,description,hashtags}=req.body;
    /*
    const video=new Video({
        title:title,
        description:description,
        createdAt : Date.now(),
        hashtags:hashtags.split(",").map(word=>`#${word}`),
        meta : {
            views:0,
            rating:0,
        },
    });
    await video.save(); //database 에 저장. video 가 mongoose model이기 때문에  그리고 저장되는데 시간이 걸리기 때문에 위에 async 와 함께 await 써야함
    */ //이렇게 하는 방법도 있고
    try { //에러 해결하기
        await Video.create({
            title:title, //그냥 title 로 써도 된다.
            description:description,
            hashtags:hashtags.split(",").map(word=>`#${word}`),
        });
        //이렇게 하는 방법도 있다. 여기선 js 객체를 아예 안만들어도 된다.
        return res.redirect("/");
    } catch(error){
        return res.render( "upload",{
            pageTitle : "Uplaod Video",
            errorMessage: error._message,
        });
    }

    
    

}

//export const search=(req,res)=>res.send("Search");
//export const upload=(req,res)=>res.send("Upload");
//export const deleteVideo=(req,res)=>res.send("deleteVideo");

//defauexport const search=(req,res)=>res.send("Search");
//export default 는 하나의 파일에허 하나만 익스포트할수있는데 위처럼 하면 한 파일에서 여러가지를 익스포트 가능