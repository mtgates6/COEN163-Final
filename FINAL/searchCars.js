function searchCars(){
    let input = document.getElementById("search").ariaValueMax;
    input=input.toLowerCase();
    if(input == "red"){
        window.location.href = "redCars.html";
    }
}