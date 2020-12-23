function sendnumber() {
    number1=document.getElementById("typeinput").value;
    number2=document.getElementById("typeinput2").value;
    realanswer=parseInt(number1) * parseInt(number2)

    questionnumber="<h4>" + number1 +"X" + number2+"</h4>";
    inputbox="<br> : <input type='text' id='inputcheckbox'>" ;
    checkbutton="<br><br><button class=btn btn-Danger onclick='check()'>Check</button>"
    row = questionnumber + inputbox + checkbutton;

    document.getElementById("output").innerHTML= row;
    document.getElementById("typeinput").value="";
    document.getElementById("typeinput2").value="";
}