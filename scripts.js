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

let tableau;
let chapter = [];
let stage;
let energy;

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
});

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
});

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
});

selectedArray.addEventListener("change", () => { 
  selectedStage.addEventListener("change", () => {
   if (selectedArray.value === "normal" && selectedStage.value !== "sta7") { 
     tableau = normal; 
     energy = 4;
   } else if (selectedArray.value === "normal" && selectedStage.value === "sta7") {
     energy = 6;
   } else if (selectedArray.value === "hard" && selectedStage.value !== "sta7") { 
     tableau = normal; 
     energy = 6;
   } else if (selectedArray.value === "hard" && selectedStage.value === "sta7") {
     energy = 8;
   }
    
 })});