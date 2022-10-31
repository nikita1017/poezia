let commentLeft = document.getElementById("commentLeft")
let commentRight = document.getElementById("commentRight")

commentLeft.onclick = function () {
    console.log("18")                                 
    let activePair = document.getElementsByClassName("activePair")[0]
    let prevPair;
    if (activePair.previousElementSibling){
    prevPair=activePair.previousElementSibling
    }                                        
    else{
    prevPair = pairs[2]
    }
    activePair.classList.remove("activePair");
    setTimeout(function () {
        prevPair.classList.add("activePair");
        },300)
    

}
commentRight.onclick = function () {
    console.log("18")
    let activePair = document.getElementsByClassName("activePair")[0];
    console.log(activePair.nextElementSibling);
    let nextPair = activePair.nextElementSibling;
    if (activePair.nextElementSibling.classList[0] == "pair") {
        nextPair = activePair.nextElementSibling;
    }
    else {
        nextPair = pairs[0];
    }
    activePair.classList.remove("activePair");
    setTimeout(function () {
    nextPair.classList.add("activePair");
    },300)


}