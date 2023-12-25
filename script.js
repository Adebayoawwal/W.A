var menu=document.querySelector("#menu-icons");
var navlist=document.querySelector(".navlist");

menu.onclick = () =>  {
    menu.classList.toggle("X")
    navlist.classList.toggle("open")

}