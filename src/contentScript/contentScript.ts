const {absoluteXPath} = require("../utils/generateXpath");
window.onload = ()=>{
    console.log("loaded")
}
//how to find tag name when hovered?

document.onmouseover = function(e: MouseEvent) {
    var element = e.target as HTMLElement; 
const html = document.createElement("div");
html.className = "hoverText";
html.id ="boosstiElement"
html.align = "right";
html.innerHTML = "<span class='imagetest' id='boosstiSpan'>"+
"<img src='https://cdn.imgbin.com/22/15/12/imgbin-minecraft-3x3-pixel-art-font-minecraft-ggSaybW9ed18vQDSkJaQwsFyj.jpg' height=30 width=30 />";
html.style.position = "absolute"
var elDistanceToTop = window.pageYOffset + element.getBoundingClientRect().top
var elDistanceToLeft = window.pageXOffset + element.getBoundingClientRect().left
html.style.left = (elDistanceToLeft+10).toString() + "px";
// console.log(elDistanceToLeft)
html.style.top = elDistanceToTop.toString()+ "5px";
html.style.cursor = "pointer";
html.style.zIndex ="8675309 !important"
html.style.backgroundColor = "black"
html.style.height = "30px"
html.style.width = "30px"
// html.style.pointerEvents = "none" ;
document.body.appendChild(html);

}
document.onmouseout = function(e: MouseEvent) {  
    var boosstiElement = document.getElementById('boosstiElement')
   if(boosstiElement){
    boosstiElement.remove()
   }
}
document.addEventListener("click",(e)=>{
    var element = e.target as HTMLElement; 
   if(element.id === "boosstiSpan"|| element.id=="boosstiElement"){
   console.log("clicked")
   }
})




