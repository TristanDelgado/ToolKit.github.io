function addCountDown(){
    document.getElementById("popup").style.visibility = "visible";
}

function submitPressed()
{
    /*
    var allTables = document.getElementsByTagName("table");
    var lastTable = allTables[allTables.length - 1];
    lastTable.insertAdjacentHTML(afterend, "<table><caption>Days until end of semester</caption><tr><th>Days</th><th>Hours</th><th>Minutes</th><th>Seconds</th></tr><tr><td>000</td><td>00</td><td>00</td><td>00</td></tr></table>");
   lastTable.insertAdjacentHTML("afterend", "<button>Hello</button>")
   */
    alert("Pressed");
   let div = document.getElementById("timers");
   let text = document.createElement("p");
   let textNode = document.createTextNode("This is a test");
   text.appendChild(textNode);
   div.appendChild(text);
}
