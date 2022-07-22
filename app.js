const buttonadd = document.querySelector("main button");
const buttoncopy = document.querySelector(".btnincorner");
const list = document.querySelector("article")
var sectionid = 1;
//var num = 0;

//events
buttonadd.addEventListener("click", add);
buttoncopy.addEventListener("click", create)

function add(){
    sectionid++;
    const section = document.createElement("section");
    const input = document.createElement("input");
    const textarea = document.createElement("textarea");


    section.setAttribute("id", sectionid);
    input.setAttribute("placeholder", "   Question");
    textarea.setAttribute("placeholder", "   correct answer");

    document.querySelector("article").appendChild(section);
    document.getElementById(sectionid).appendChild(input);
    document.getElementById(sectionid).appendChild(textarea);
}
function create(e){
    let url = new URLSearchParams();
    const quizlist = list.childNodes;
    const ele = e.target.parentElement;
    quizlist.forEach(function(ele){
        //num++;
        //var ask = "ask" + num;
        //var replay = "replay" + num;
        url.append("ask",ele.firstChild.value);
        url.append("replay",ele.lastChild.value);
    })
    navigator.clipboard.writeText(window.location.origin + "/quiz.html" + "?" + url);
}