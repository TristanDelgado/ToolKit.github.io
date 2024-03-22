function addCountDown(){
    document.getElementById("name").value = "";
    document.getElementById("day").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    document.getElementById("popup").style.visibility = "visible";
}

function submitPressed()
{
    document.getElementById("popup").style.visibility = "hidden";

    var div = document.getElementById("timers");
    var newTable = document.createElement("table");

    var caption = document.createElement("caption");
    caption.innerHTML = document.getElementById("name").value;
    newTable.appendChild(caption);
    newTable.className = caption.innerHTML;
    
    var newRow  = document.createElement("tr");
    var days    = document.createElement("th");
    var hours   = document.createElement("th");
    var minutes = document.createElement("th");
    var seconds = document.createElement("th");

    days.innerHTML = "Days";
    hours.innerHTML = "Hours";
    minutes.innerHTML = "Minutes";
    seconds.innerHTML = "Seconds";

    newRow.appendChild(days);
    newRow.appendChild(hours);
    newRow.appendChild(minutes);
    newRow.appendChild(seconds);

    newTable.appendChild(newRow);

    newRow  = document.createElement("tr");
    days    = document.createElement("td");
    hours   = document.createElement("td");
    minutes = document.createElement("td");
    seconds = document.createElement("td");

    days.innerHTML    = document.getElementById("day").value;
    hours.innerHTML   = document.getElementById("hours").value;
    minutes.innerHTML = document.getElementById("minutes").value;
    seconds.innerHTML = document.getElementById("seconds").value;

    newRow.appendChild(days);
    newRow.appendChild(hours);
    newRow.appendChild(minutes);
    newRow.appendChild(seconds);

    newTable.appendChild(newRow);

    div.appendChild(newTable);
}

function remove()
{
    var div = document.getElementById("deletePopup");
    while(div.firstChild != null)
    {
        div.firstChild.remove();
    }

    var allTables = document.getElementsByTagName("table");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    checkbox.type = "checkbox";


    for(var i = 0; i < allTables.length; i++)
    {
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.name = allTables[i].firstElementChild.innerHTML;
        label.innerHTML = allTables[i].firstElementChild.innerHTML;
        div.appendChild(checkbox);
        div.appendChild(label);
        div.insertAdjacentHTML("beforeend", "<br>");
        checkbox = document.createElement("input");
        label = document.createElement("label");
    }
    
    div.insertAdjacentHTML("beforeend", '<input type="button" id="submitDelete" name="submitDelete" value="Submit" onClick="removeSelected()">');

    document.getElementById("deletePopup").style.visibility = "visible";
}

function removeSelected()
{
    document.getElementById("deletePopup").style.visibility = "hidden";

    var checkBoxes = document.getElementsByClassName("checkbox");
    for(var i = 0; i < checkBoxes.length; i++)
    {
        if(checkBoxes[i].checked)
        {
            var tableToDelete = document.getElementsByClassName(checkBoxes[i].name);
            tableToDelete[0].remove();
        }
    }
}

