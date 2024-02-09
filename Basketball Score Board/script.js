let HomeScoreEl = document.getElementById("Home-Score");
let GuestScoreEl = document.getElementById("Guest-Score");

let HomeCount = 0;
let GuestCount = 0;
let AddOne = 1;
let AddTwo = 2;
let AddThree = 3;

function HomeAddOne(){ 
    HomeCount += AddOne ;
    HomeScoreEl.innerHTML = HomeCount;
}
function HomeAddTwo(){ 
    HomeCount += AddTwo;
    HomeScoreEl.textContent = HomeCount;
}
function HomeAddThree(){ 
    HomeCount += AddThree;
    HomeScoreEl.textContent = HomeCount;
}
//  Guest Score increase

function GuestAddOne(){ 
    GuestCount += AddOne;
    GuestScoreEl.textContent = GuestCount;
}
function GuestAddTwo(){ 
    GuestCount += AddTwo;
    GuestScoreEl.textContent = GuestCount;
}
function GuestAddThree(){ 
    GuestCount += AddThree
    GuestScoreEl.textContent = GuestCount;
}

function reset() {
    GuestScoreEl.innerHTML = 0;
    HomeScoreEl.innerHTML = 0;
    HomeCount = 0;
    GuestCount = 0;
  }
