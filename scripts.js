const normal = [189,219,251,282,313,345,376
,313,345,376,407,438,470,501
,438,470,501,532,564,594,626
,564,594,626,657,689,720,752
,689,720,752,783,813,845,876];
const hard = [20,21,22,23,24,25,26];
const brutal = [];
const nightmare = [];

const selectedArray = document.getElementById("selectedArray");
const selectedSlice = document.getElementById("selectedSlice");
const selectedStage = document.getElementById("selectedStage");
const timeCompMin = document.getElementById("minutes");
const timeCompSec = document.getElementById("seconds");
const multiRun = document.getElementById("multis");
const timeLoad = document.getElementById("loading");
const calculate = document.getElementById("calculatebtn");
const reset = document.getElementById("resetbtn");

let myMin = timeCompMin.value;
let mySec = timeCompSec.value;
let myRun = multiRun.value;
let tableau;
let chapter = [];
let stage;
let energy;
let totalTime;
let totalEnergy;
let totalExp;

//updated input
timeCompMin.addEventListener("input", () => {
  myMin = timeCompMin.value;
});

timeCompSec.addEventListener("input", () => {
  mySec = timeCompSec.value;
});

multiRun.addEventListener("input", () => {
  myRun = multiRun.value;
});

// Updates energy cost when an event is triggered
function updateEnergy() {
  if (selectedArray.value === "normal") {
    if (selectedStage.value === "sta7") {
      energy = 6;
    } else {
      energy = 4;
    }
  } else if (selectedArray.value === "hard") {
    if (selectedStage.value === "sta7") {
      energy = 8;
    } else {
      energy = 6;
    }
  } else if (selectedArray.value === "brutal") { 
    if (selectedStage.value === "sta7") { 
      energy = 10; 
    } else { 
      energy = 8; 
    }
  } else if (selectedArray.value === "nightmare") { 
    if (selectedStage.value === "sta7") { 
      energy = 12; 
    } else { 
      energy = 10; 
    }
  }
};

// Update exp when an event is triggered
function updateStage() {
  let array = normal;
  if (selectedArray.value === "normal") {
    array = normal;
  } else if (selectedArray.value === "hard") {
    array = hard;
  } else if (selectedArray.value === "brutal") {
    array = brutal;
  } else if (selectedArray.value === "nightmare") {
    array = nightmare;
  }

  let slice = array;
  if (selectedSlice.value === "cha1") {
    slice = array.slice(0, 7);
  } else if (selectedSlice.value === "cha2") {
    slice = array.slice(7, 14);
  } else if (selectedSlice.value === "cha3") {
    slice = array.slice(14, 21);
  } else if (selectedSlice.value === "cha4") {
    slice = array.slice(21, 28);
  } else if (selectedSlice.value === "cha5") {
    slice = array.slice(28, 35);
  } else if (selectedSlice.value === "cha6") {
    slice = array.slice(35, 42);
  } else if (selectedSlice.value === "cha7") {
    slice = array.slice(42, 49);
  } else if (selectedSlice.value === "cha8") {
    slice = array.slice(49, 56);
  } else if (selectedSlice.value === "cha9") {
    slice = array.slice(56, 63);
  } else if (selectedSlice.value === "cha10") {
    slice = array.slice(63, 70);
  }

  if (selectedStage.value === "sta1") {
    stage = slice[0];
  } else if (selectedStage.value === "sta2") {
    stage = slice[1];
  } else if (selectedStage.value === "sta3") {
    stage = slice[2];
  } else if (selectedStage.value === "sta4") {
    stage = slice[3];
  } else if (selectedStage.value === "sta5") {
    stage = slice[4];
  } else if (selectedStage.value === "sta6") {
    stage = slice[5];
  } else if (selectedStage.value === "sta7") {
    stage = slice[6];
  }
  updateEnergy();
};

// Difficulty option select
selectedArray.addEventListener("change", () => {
  if (selectedArray.value === "normal") {
    tableau = normal;
  } else if (selectedArray.value === "hard") {
    tableau = hard;
  } else if (selectedArray.value === "brutal") {
    tableau = brutal;
  } else if (selectedArray.value === "nightmare") {
    tableau = nightmare;
  }
  updateStage();
});

// Chapter option select
selectedSlice.addEventListener("change", () => {
  if (selectedSlice.value === "cha1") {
    chapter = tableau.slice(0, 7); 
  } else if (selectedSlice.value === "cha2") {
    chapter = tableau.slice(7, 14);
  } else if (selectedSlice.value === "cha3") {
    chapter = tableau.slice(14, 21);
  } else if (selectedSlice.value === "cha4") {
    chapter = tableau.slice(21, 28);
  } else if (selectedSlice.value === "cha5") {
    chapter = tableau.slice(28, 35);
  } else if (selectedSlice.value === "cha6") {
    chapter = tableau.slice(35, 42);
  } else if (selectedSlice.value === "cha7") {
    chapter = tableau.slice(42, 49);
  } else if (selectedSlice.value === "cha8") {
    chapter = tableau.slice(49, 56);
  } else if (selectedSlice.value === "cha9") {
    chapter = tableau.slice(56, 63);
  } else if (selectedSlice.value === "cha10") {
    chapter = tableau.slice(63, 70);
  }
  updateStage();
});

// Stage option select
selectedStage.addEventListener("change", () => {
if(selectedStage.value === "sta1") {
  stage = chapter[0];
} else if (selectedStage.value === "sta2") {
  stage = chapter[1];
} else if (selectedStage.value === "sta3") {
  stage = chapter[2];
} else if (selectedStage.value === "sta4") {
  stage = chapter[3];
} else if (selectedStage.value === "sta5") {
  stage = chapter[4];
} else if (selectedStage.value === "sta6") {
  stage = chapter[5];
} else if (selectedStage.value === "sta7") {
  stage = chapter[6];
}
updateStage();
});

calculate.addEventListener("click", () => {
let paragraph = `${myMin * myRun} minutes`;
document.getElementById("result").innerHTML = paragraph;
  
});

