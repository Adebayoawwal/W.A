var menu=document.querySelector("#menu-icons");
var navlist=document.querySelector(".navlist");

menu.onclick = () =>  {
    menu.classList.toggle("-")
    navlist.classList.toggle("open")
}