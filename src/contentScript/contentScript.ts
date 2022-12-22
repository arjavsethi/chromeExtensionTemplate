const {absoluteXPath} = require("../utils/generateXpath");
window.onload = ()=>{
    console.log("loaded")
}
//how to find tag name when hovered?

document.onmouseover = function(e: MouseEvent) {
    var element = e.target as HTMLElement; 
    // console.log(absoluteXPath(element));


//  const html = "<div class='hoverText' align=right>" +
//       "  <span class='imagetest'>"+
//            " <img src='Files/infoplaceholder.png' height=20 width=20 />"+
//        "     <span class='hover' > See About Page for more info </span>"+
//      "   </span>"+
// "  </div>"
const html = document.createElement("div");
html.className = "hoverText";
html.id ="boosstiElement"
html.align = "right";
html.innerHTML = "<span class='imagetest'>"+
"<img src='https://cdn.imgbin.com/22/15/12/imgbin-minecraft-3x3-pixel-art-font-minecraft-ggSaybW9ed18vQDSkJaQwsFyj.jpg' height=20 width=20 />";
html.style.position = "absolute"



element.appendChild(html);












}
document.onmouseout = function(e: MouseEvent) {
    // var element = e.target as HTMLElement; 
    // console.log(absoluteXPath(element));
  
    var boosstiElement = document.getElementById('boosstiElement')
    boosstiElement.remove()
}




