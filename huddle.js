//Setting Up Events after window loads
function setUp() {
     function Bamer() {
        location.assign("HuddleOne/huddleOne.html");
    }

    var button = document.getElementById("button");

    button.onmousedown  = function() {
        button.style.width = "170px";
        button.style.height = "32px";
    }
    
    button.onmouseup = function() {
        button.style.width = "180px";
        button.style.height = "35px";
    }

     button.onclick = function() {
        setTimeout(Bamer, 1000);
    }

    
    var start = document.getElementById("start");
    
    start.onmousedown  = function() {
        start.style.width = "350px";
        start.style.height = "47px";
    }
    
    start.onmouseup = function() {
        start.style.width = "360px";
        start.style.height = "50px";
    }

    start.onclick = function() {
        setTimeout(Bamer, 1000);
    }
    
    var starter = document.getElementById("starter");
    
    starter.onmousedown  = function() {
        starter.style.width = "410px";
        starter.style.height = "47px";
    }
    
    starter.onmouseup = function() {
        starter.style.width = "420px";
        starter.style.height = "50px";
    }

    starter.onclick = function() {
        setTimeout(Bamer, 1000);
    }
}

//Onload function
window.onload = function() {
    setUp();
}
