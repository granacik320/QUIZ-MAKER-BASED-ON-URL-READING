let urlsearch = new URLSearchParams(window.location.search);
const buttoncheck = document.querySelector(".btnincorner");
const list = document.querySelector("article")
var sectionid = 0;
var spanid = 1000;
var id = 0;
const asks = urlsearch.getAll('ask');
const replays = urlsearch.getAll('replay');

buttoncheck.addEventListener("click", check)

asks.forEach(element => {
    if(element == ""){

    }else{
        sectionid++;
        spanid++;
        const section = document.createElement("section");
        const span = document.createElement("span");
        const textarea = document.createElement("textarea");
        const div = document.createElement("div");

        section.setAttribute("id", sectionid);
        div.setAttribute("class", "ask");
        div.setAttribute("id", spanid);
        span.innerHTML = element;

        document.querySelector("article").appendChild(section);
        document.getElementById(sectionid).appendChild(div);
        document.getElementById(spanid).appendChild(span);
        document.getElementById(sectionid).appendChild(textarea);
    }
});

function check(){
    const el = list.childNodes;
    var i = 0;
    var result = 0;
    el.forEach(element => {
        id++;
        const section = document.createElement("section");
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const span = document.createElement("span");
        const span2 = document.createElement("span");
    
        div.setAttribute("class", "ask2");
        div2.setAttribute("class", "replay2");

        section.setAttribute("id", "section" + id);
        div.setAttribute("id", "1div" + id);
        div2.setAttribute("id", "2div" + id);

        span.innerHTML = element.firstChild.innerText;
        span2.innerHTML = element.lastChild.value;
        if(element.lastChild.value == ""){
            span2.innerHTML = "You didn't answer";
        }

        document.querySelector(".popuparticle").appendChild(section);
        document.getElementById("section" + id).appendChild(div);
        document.getElementById("section" + id).appendChild(div2);
        document.getElementById("1div" + id).appendChild(span);
        document.getElementById("2div" + id).appendChild(span2);
        if(element.lastChild.value == replays[i]){
            result++;
            
        }else{
            document.getElementById("1div" + id).style.background = "#ff9494"
            document.getElementById("2div" + id).style.background = "#ff9494"
            element.lastChild.style.borderColor = "red"; 
        }
        i++;
    });
    
    document.querySelector("text").textContent = result/i*100 + "%"; 
    document.querySelector(".ring").setAttribute("stroke-dasharray",[result/i*100*5,"500"]);
    document.querySelector(".backgraundpopup").style.display = "flex";
}
