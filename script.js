let display=document.getElementById("display");

function clearscr(){
    display.value="";
}
function deletechar(){
    display.value=display.value.slice(0,-1);
}

function appendtodisplay(input){
    display.value+=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
