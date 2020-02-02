const openmodal=()=>
{
    var modal=document.getElementById("modal")
    modal.classList.add("active-modal");
    var overlay=document.getElementById("overlay")
    overlay.classList.add("activate-overlay")
}

const closemodal=()=>
{
    var modal=document.getElementById("modal")
    modal.classList.remove("active-modal");
    var overlay=document.getElementById("overlay")
    overlay.classList.remove("activate-overlay")
    

}
const overLayClick=()=>
{
    var overlay=document.getElementById("overlay")
    overlay.addEventListener("click",()=>{
        closemodal();
    })
}


