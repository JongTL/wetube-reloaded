let videos = [
    {
        title:"First Video",
        rating : 5,
        comments : 2,
        createdAt: "2 minutes ago",
        views :59,
        id:1,
    },
    {
        title:"Second Video",
        rating : 5,
        comments : 2,
        createdAt: "2 minutes ago",
        views :59,
        id:2,
    },
    {
        title:"Third Video",
        rating : 5,
        comments : 2,
        createdAt: "2 minutes ago",
        views :59,
        id:3,
    },
]

export const trending=(req,res)=>{
    res.render("home",{ pageTitle : "Home", videos}); 
    // pug 로 작성한 화면을 출력하는 법. render("view Name") , 두번째 인수를 건내준다.
}
export const watch=(req,res)=> {
    const {id}=req.params; //ES6 형식. 원랜 const id = req.params.id;
    const video=videos[id-1];
    return res.render("watch",{pageTitle:`Watching: ${video.title}`,video});
}
export const getEdit=(req,res)=> {
    const {id}=req.params; //ES6 형식. 원랜 const id = req.params.id;
    const video=videos[id-1];
    res.render("edit",{pageTitle:`Editing: ${video.title}`,video});
}

export const postEdit=(req,res)=>{
    const {id}=req.params;
    const {title}=req.body;
    videos[id-1].title=title;
    return res.redirect(`/videos/${id}`);
}
export const search=(req,res)=>res.send("Search");
export const upload=(req,res)=>res.send("Upload");
export const deleteVideo=(req,res)=>res.send("deleteVideo");

//defauexport const search=(req,res)=>res.send("Search");
//export default 는 하나의 파일에허 하나만 익스포트할수있는데 위처럼 하면 한 파일에서 여러가지를 익스포트 가능