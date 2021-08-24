
export const trending=(req,res)=>{
    const videos = [
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
            id:1,
        },
        {
            title:"Third Video",
            rating : 5,
            comments : 2,
            createdAt: "2 minutes ago",
            views :59,
            id:1,
        },
    ]
    res.render("home",{ pageTitle : "Home", videos}); 
    // pug 로 작성한 화면을 출력하는 법. render("view Name") , 두번째 인수를 건내준다.
}
export const see=(req,res)=>
    res.render("watch");
export const edit=(req,res)=>
    res.render("edit");

export const search=(req,res)=>res.send("Search");
export const upload=(req,res)=>res.send("Upload");
export const deleteVideo=(req,res)=>res.send("deleteVideo");

//defauexport const search=(req,res)=>res.send("Search");
//export default 는 하나의 파일에허 하나만 익스포트할수있는데 위처럼 하면 한 파일에서 여러가지를 익스포트 가능