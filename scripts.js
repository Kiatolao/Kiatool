const normal = [189,219,251,282,313,345,376,313,345,376,407,438,470,501,438,470,501,532,564,594,626,564,594,626,657,689,720,752,689,720,752,783,813,845,876,813,845,876,908,939,971,1001,939,971,1001,1032,1064,1095,1127,1064,1095,1127,1158,1190,1120,1252,1190,1220,1252,1283,1314,1346,1377,1314,1346,1377,1408,1439,1471,1502];
const hard = [1448,1476,1502,1528,1556,1582,1610,1507,1535,1561,1589,1615,1642,1669,
1568,1594,1621,1648,1675,1701,1729,
1627,1654,1681,1708,1734,1762,1788,
1687,1713,1741,1767,1793,1821,1847,
1748,1773,1800,1826,1854,1880,1907,
1806,1833,1859,1886,1913,1940,1967,
1865,1892,1919,1946,1973,1999,2027,
1925,1952,1978,2006,2032,2059,2086,
1985,2011,2039,2065,2092,2119,2145];
const brutal = [2360,2414,2468,2521,2574,2628,2682,2539,2592,2646,2700,2754,2807,2860,2717,2771,2825,2878,2932,2986,3040,
2897,2950,3003,3057,3111,3164,3218,
3075,3129,3183,3236,3289,3343,3397,
3254,3307,3361,3415,3469,3522,3575,
3432,3486,3540,3593,3647,3701,3755,
3612,3665,3718,3772,3826,3879,3933,
3790,3844,3898,3951,4004,4058,4112,
3969,4022,4076,4130,4184,4237,4290];
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
let myLoad = loading.value;
let tableau;
let chapter = [];
let stage;
let energy;
let totalEnergy;

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

timeLoad.addEventListener("input", () => {
  myLoad = timeLoad.value;
});

// Updates energy cost on event
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

// Update exp on event
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

// Calculate total time/xp/energy
calculate.addEventListener("click", () => {

let convertedMin;
let totalExp;
let remainingSec;

// Total time formula
let totalTimeMin = myMin * myRun;
let totalTimeSec = mySec * myRun;
let totalTimeLoad = myLoad * myRun;
let totalTime = (totalTimeMin * 60) + totalTimeSec + totalTimeLoad;

if (totalTime >= 60) {
  convertedMin = Math.floor(totalTime / 60);
  remainingSec = totalTime % 60;
} else {
  convertedMin = 0;
  remainingSec = totalTime;
};

//Total energy formula
totalEnergy = energy * myRun;
totalExp = stage * myRun;
console.log(totalEnergy, totalExp)

//Results display
let paragraphT = `<span style="color: orange">${convertedMin}</span> minutes <span style="color: orange">${remainingSec}</span> seconds`;
document.getElementById("time").innerHTML = paragraphT;

let paragraphEx = ` <span style="color: orange">${totalExp}</span> XP`;
document.getElementById("exp").innerHTML = paragraphEx;

let paragraphEn = ` <span style="color: orange"> ${totalEnergy}</span> energy`;
document.getElementById("energy").innerHTML = paragraphEn;
});

