async function main(){
    let a=document.getElementById("background");
    console.log(a);
    let b=["images/Bg-01.jpg","images/Bg-02.jpg","images/Bg-03.jpg","images/Bg-04.jpg","images/Bg-05.jpg","images/Bg-06.jpg"];
    console.log(b);
    let index=0;
    setInterval(() => {
        index = (index + 1) % b.length;
        a.style.backgroundImage=`url(${b[index]})`;
    }, 10000);

    document.querySelector("#ham-all").addEventListener("click",()=>{
        document.querySelector(".left").style.display="block";
        document.querySelector("#header-box").style.opacity="0.4";
        document.querySelector(".right").style.opacity="0.4";
        document.querySelector("#background").style.opacity="0.4";
        document.querySelector(".background").style.opacity="0.4";
        document.querySelector(".container-2").style.opacity="0.4";
        document.querySelector("body").style.position="fixed";
        document.querySelector("body").style.top="0";
        document.querySelector("body").style.bottom="0";
        document.querySelector("body").style.left="0";
        document.querySelector("body").style.right="0";
    })
    document.querySelector(".cancel").addEventListener("click",()=>{
        document.querySelector(".left").style.display="none";
        document.querySelector("#header-box").style.opacity="1";
        document.querySelector(".right").style.opacity="1";
        document.querySelector("#background").style.opacity="1";
        document.querySelector(".background").style.opacity="1";
        document.querySelector(".container-2").style.opacity="1";
        document.querySelector("body").style.position="static";
    })
}
main();