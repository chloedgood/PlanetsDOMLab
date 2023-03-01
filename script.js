class planet{
    name; 
    inner; 
    diameter; 
    color;

    constructor(name, inner, diameter, color){
        this.name = name; 
        this.inner = inner; 
        this.diameter = diameter; 
        this.color = color; 
    }
}
//adding the array
let planetsArray = [
    new planet("Mercury", true, 3031.9, "#696969"),
    new planet("Venus", true, 7520.8, "#b89165"),
    new planet("Earth", true, 7917.5, "#5a5b86"),
    new planet("Mars", true, 4212.3, "#df8c4e"),
    new planet("Jupiter", false, 86881, "#f6a049"),
    new planet("Saturn", false, 72367, "#dcd3a1"),
    new planet("Uranus", false, 31518, "#b4d9df"),
    new planet("Neptune", false, 30599, "#456eff"),
];
//looping and printing each one
for ( var planetOne of planetsArray) { 
    console.log(planetOne.name);
}

//function that returns average
function averageDiameter(planetsArray){
    var sum = 0;
    for(let i = 0; i < planetsArray.length; i++) {
        sum += planetsArray[i].diameter;
    }

        var avg = sum/planetsArray.length;
        console.log(" Average Diameter is: " + avg);
    }
 //adding event handlers
 var index = 0;
 var previousButton =document.getElementById("previous");
 previousButton.addEventListener("click", ()=>{
    index--;

    let indexValue= document.getElementById("indexValue");
    indexValue.innerText = index;
 });

 var nextButton =document.getElementById("next");
nextButton.addEventListener("click", ()=>{
     index++;

    let indexValue = document.getElementById("indexValue");
    indexValue.innerText = index;
});

// updatePlanetDisplay
function updatePlanetDisplay(index) {

    // name display
    let newName  = planetsArray[index].name;
     let indPlanetName = document.getElementById("indvplanetName");
     indPlanetName.innerText = newName;   

 // core display
 let core  = planetsArray[index].inner;
 let innerCore = document.getElementById("inner");
 if(core === true){ 
    newCoreval = "Inner Planet"
 } else {
    newCoreval = "Outer Planet"
 }   
 innerCore.innerText = newCoreval; 
 

 // circle color
 let newShape = document.getElementById("shape");
 newShape.style.backgroundColor = planetsArray[index].color ;

// diameter display
 let diameterVal  = planetsArray[index].diameter;  
 let newDiamterVal = diameterVal/100;
 newShape.style.width = `${newDiamterVal}px`;
 newShape.style.height = `${newDiamterVal}px`;

}

// disable button function 
function enableButtons(i) {

 var prev = document.getElementById('previous');
 var next = document.getElementById('next');

if ( i <= 0){
   prev.disabled = true;
   next.disabled = false;

}  else if ( i < planetsArray.length-1 )  {
    next.disabled = false;
    prev.disabled = false;

}  else  {   
   prev.disabled = false;
   next.disabled = true; 
} 

}