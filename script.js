
document.getElementById("allCenter").addEventListener("click", function() {

    var classContent = document.querySelector(".grid-container").getAttribute("class");

    if(classContent.includes("conCenter")) {
        document.querySelector(".grid-container").classList.remove("conCenter");
    } else {
        if(classContent.includes("conRight")) { document.querySelector(".grid-container").classList.remove("conRight"); }
        if(classContent.includes("conLeft")) { document.querySelector(".grid-container").classList.remove("conLeft"); }
        document.querySelector(".grid-container").classList.add("conCenter");
    }

});

document.getElementById("allLeft").addEventListener("click", function() {

    var classContent = document.querySelector(".grid-container").getAttribute("class");

    if(classContent.includes("conLeft")) {
        document.querySelector(".grid-container").classList.remove("conLeft");
    } else {
        if(classContent.includes("conRight")) { document.querySelector(".grid-container").classList.remove("conRight"); }
        if(classContent.includes("conCenter")) { document.querySelector(".grid-container").classList.remove("conCenter"); }
        document.querySelector(".grid-container").classList.add("conLeft");
    }

});

document.getElementById("allRight").addEventListener("click", function() {

    var classContent = document.querySelector(".grid-container").getAttribute("class");

    if(classContent.includes("conRight")) {
        document.querySelector(".grid-container").classList.remove("conRight");
    } else {
        if(classContent.includes("conLeft")) { document.querySelector(".grid-container").classList.remove("conLeft"); }
        if(classContent.includes("conCenter")) { document.querySelector(".grid-container").classList.remove("conCenter"); }
        document.querySelector(".grid-container").classList.add("conRight");
    }

});


