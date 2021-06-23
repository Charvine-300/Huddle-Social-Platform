function setUp() {
    var button = document.getElementById("center");

    if (self.innerWidth <= 800) {
        
        button.onmousedown = function() {
            button.style.width = "340px";
            button.style.height = "37px";
        }

        button.onmouseup = function() {
            button.style.width = "350px";
            button.style.height = "40px";
        }
    }

    else {
        
        button.onmousedown = function() {
            button.style.width = "190px";
            button.style.height = "22px";
        }

        button.onmouseup = function() {
            button.style.width = "200px";
            button.style.height = "25px";
        }
    }
    

    var bigg = document.getElementById("container");
    console.log(bigg);

    var image = document.getElementsByTagName("img")[2];
    console.log(image);

    var att = image.getAttribute("src");
    console.log(att);

    var desktop = document.createElement("img");
    console.log(desktop);



    console.log(document.body.clientWidth); //Width of inner subject
    console.log(self.innerWidth); //Width of browser


    var mason = function() {
        if(self.innerWidth > 800) {
            bigg.removeChild(image);

            bigg.append(desktop);
            desktop.setAttribute("src", "images/bg-desktop.svg");
            desktop.setAttribute("style", "width: 1300px");
        } 
    }

    mason();

}


window.onload = function() {
    setUp();
}