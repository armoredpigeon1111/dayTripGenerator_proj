//Title: Day Trip Generator
//Author: Richard Fleming

function runDayTrip(){
    let destinationsArray = ["Myrtle Beach", "the State House", "Charleston", "Six Flags"];
    let restaurantArray = ["McDonald's", "Chilli's", "Wendy's", "KFC"];
    let transportTypeArray = ["bus", "train", "car", "motorcycle"];
    let entertainmentArray = ["a movie", "swimming", "bowling"];
    let tripOptionsArray = [destinationsArray, restaurantArray, transportTypeArray, entertainmentArray];
    let trip = [getSelection(destinationsArray), getSelection(restaurantArray), getSelection(transportTypeArray),getSelection(entertainmentArray) ]
    initialDayTrip(trip, tripOptionsArray);
}

//Selections array
function getSelection(array){ 
    return array[Math.floor(Math.random() * (array.length))];

}


//Provides prompt with trip details
function initialDayTrip(trip, tripOptionsArray){
let userSatisfied = prompt(`Your trip is to ${trip[0]} where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}.
Are you satisfied with your trip? Yes or No.`).toLowerCase();

isUserSatisfied(userSatisfied, trip, tripOptionsArray); //invokes user satisfication check
}



//Checks user satisfication
function isUserSatisfied(userSatisfication, trip, tripOptionsArray){
    if(userSatisfication === "no"){
        let userUnsatisfiedWith = prompt("Are you unsatisfied with destination, restaurant, transportation, or entertainment?");

        userSwitch(userUnsatisfiedWith, trip, tripOptionsArray); //invokes user switch to rerandomize selection
    }
    else if(userSatisfication === "yes"){
        console.log(`Your trip is to ${trip[0]} where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}.`);
    }


}


//Checks user input and rerandomizes user selection
function userSwitch(unsatisfiedItem, trip, tripOptionsArray){
    switch(unsatisfiedItem){
            
        case "destination":
            trip[0] = getSelection(tripOptionsArray[0]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        case "restaurant":
            trip[1] = getSelection(tripOptionsArray[1]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        case "transportation":
            trip[2] = getSelection(tripOptionsArray[2]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        case "entertainment":
            trip[3] = getSelection(tripOptionsArray[3]);
            initialDayTrip(trip, tripOptionsArray);
        break;

        default:
            let userSelection = prompt("Must select destination, restaurant, transportation, or entertainment.");
            userSwitch(userSelection, trip, tripOptionsArray);
    }
}

runDayTrip();
