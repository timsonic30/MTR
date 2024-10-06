const line = {
  KTL: {
    text: "觀塘線",
    color: "#7ed957",
    sta: [
      { code: "WHA", name: "Whampoa" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" },
      { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "LOF", name: "Lok Fu" },
      { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "CHH", name: "Choi Hung" },
      { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" },
      { code: "KWT", name: "Kwun Tong" },
      { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
    ],
  },
  ISL: {
    text: "港島線",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town" },
      { code: "HKU", name: "HKU" },
      { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" },
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" },
      { code: "CAB", name: "Causeway Bay" },
      { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" },
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" },
      { code: "SWH", name: "Sai Wan Ho" },
      { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" },
      { code: "CHW", name: "Chai Wan" },
    ],
  },
  TWL: {
    text: "荃灣線",
    color: "#ff3131",
    sta: [
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Price Edward" },
      { code: "SSP", name: "Sham Shui Po" },
      { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" },
      { code: "MEF", name: "Mei Foo" },
      { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" },
      { code: "KWH", name: "Kwai Hing" },
      { code: "TWH", name: "Tai Wo Hau" },
      { code: "TSW", name: "Tsuen Wan" },
    ],
  },
  SIL: {
    text: "南港島線",
    color: "#cbcd09",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "OCP", name: "Ocean Park" },
      { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" },
      { code: "SOH", name: "South Horizons" },
    ],
  },
  TCL: {
    text: "東涌線",
    color: "#f6943d",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "LAK", name: "Lai King" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" },
      { code: "TUC", name: "Tung Chung" },
    ],
  },
  EAL: {
    text: "東鐵線",
    color: "#5ce1e6",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "EXC", name: "Exhibition Centre" },
      { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" },
      { code: "FOT", name: "Fo Tan" },
      { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" },
      { code: "TAP", name: "Tai Po Market" },
      { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" },
      { code: "SHS", name: "Sheung Shui" },
      { code: "LOW", name: "Lo Wu" },
      { code: "LMC", name: "Lok Ma Chau" },
    ],
  },
  TML: {
    text: "屯馬線",
    color: "#8d6019",
    sta: [
      { code: "WKS", name: "Wu Kai Sha" },
      { code: "MOS", name: "Ma On Shan" },
      { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" },
      { code: "SHM", name: "Shek Mun" },
      { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" },
      { code: "CKT", name: "Che Kung Temple" },
      { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" },
      { code: "TKW", name: "To Kwa Wan" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" },
      { code: "ETS", name: "East Tsim Sha Tsui" },
      { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "MEF", name: "Mei Foo" },
      { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" },
      { code: "YUL", name: "Yuen Long" },
      { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" },
      { code: "SIH", name: "Siu Hong" },
      { code: "TUM", name: "Tuen Mun" },
    ],
  },
  AEL: {
    text: "機場快線",
    color: "#3d9ea0",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" },
      { code: "AWE", name: "AsiaWorld Expo" },
    ],
  },
  TKL: {
    text: "將軍澳線",
    color: "#8d45ab",
    sta: [
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
      { code: "TKO", name: "Tseung Kwan O" },
      { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" },
      { code: "POA", name: "Po Lam" },
    ],
  },
};

// Create line buttons
const lineBtn = () => {
  const lineSection = document.querySelector("nav");

  for (let lineSF in line) {
    let name = line[lineSF].text;
    let color = line[lineSF].color;
    const button = document.createElement("div");
    button.textContent = name;
    button.id = lineSF;
    button.className = "button";
    button.style.border = `2px solid ${color}`;
    button.style.color = color;
    lineSection.appendChild(button);
  }
};

lineBtn();

async function callMTR2(lineName) {
  //sta.code get all the station name from sta array of object
  let UP = [];
  let DOWN = [];
  let time = document.querySelector("#time");
  let tempTime = null;
  for (let sta of line[lineName].sta) {
    const api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${lineName}&sta=${sta.code}`;
    const response = await fetch(api);
    const result = await response.json();
    let trainDetail = result.data[`${lineName}-${sta.code}`];

    // Check if the key exist
    let trainUP = trainDetail?.UP;
    let trainDOWN = trainDetail?.DOWN;

    // Put the existed key to the array
    if (trainUP) {
      let a = trainUP.find((el) => el.seq === "1");
      UP.push({
        station: sta.name,
        time: a["time"].slice(11, -3),
        platform: a["plat"],
      });
    }
    if (trainDOWN) {
      let b = trainDOWN.find((el) => el.seq === "1");
      DOWN.push({
        station: sta.name,
        time: b["time"].slice(11, -3),
        platform: b["plat"],
      });
    }
    tempTime = result.sys_time;
  }
  DOWN.reverse();
  time.innerText = "最後更新時間 : " + tempTime;
  return { UP, DOWN };
}

const removeDiv = () => {
  const box = document.querySelectorAll("section>div");
  box.forEach((el) => el.remove());
  const time = document.querySelector("#time");
  time.textContent = "";
  // hidden the section border
  const section = document.querySelectorAll("section");
  section.forEach((el) => (el.style.border = "0px"));
};

const KTLBtn = document.getElementById("KTL");
const ISLBtn = document.getElementById("ISL");
const TWLBtn = document.getElementById("TWL");
const SILBtn = document.getElementById("SIL");
const TCLBtn = document.getElementById("TCL");
const EALBtn = document.getElementById("EAL");
const TMLBtn = document.getElementById("TML");
const AELBtn = document.getElementById("AEL");
const TKLBtn = document.getElementById("TKL");

const boardUP = document.querySelector(".UP");
const boardDOWN = document.querySelector(".DOWN");

const cancelEffect = () => {
  const allBtn = document.querySelectorAll(".button");
  allBtn.forEach((el) => {
    el.style.backgroundColor = "#FFFFFF";
    el.style.fontWeight = "Normal";
    for (const lineName in line) {
      if (line[lineName].text === el.innerText) {
        el.style.color = line[lineName].color;
        break;
      }
    }
  });
};

const createDiv = (UP, DOWN, lineName) => {
  createSection(lineName);
  UP.forEach((el) => {
    let box = document.createElement("div");

    const { station, time, platform } = el;
    let stationDiv = document.createElement("div");
    let timeDiv = document.createElement("div");
    let platformDiv = document.createElement("div");

    stationDiv.textContent = station;
    timeDiv.textContent = `下班列車 : ${time}`;
    platformDiv.textContent = `開出月台 : ${platform}`;
    box.appendChild(stationDiv);
    box.appendChild(timeDiv);
    box.appendChild(platformDiv);

    boxStyling(box, lineName);

    boardUP.appendChild(box);
  });

  DOWN.forEach((el) => {
    let box = document.createElement("div");

    const { station, time, platform } = el;
    let stationDiv = document.createElement("div");
    let timeDiv = document.createElement("div");
    let platformDiv = document.createElement("div");

    stationDiv.textContent = station;
    timeDiv.textContent = `下班列車 : ${time}`;
    platformDiv.textContent = `開出月台 : ${platform}`;
    box.appendChild(stationDiv);
    box.appendChild(timeDiv);
    box.appendChild(platformDiv);

    boxStyling(box, lineName);

    boardDOWN.appendChild(box);
  });
};

const boxStyling = (box, lineName) => {
  box.style.height = "100px";
  box.style.width = "250px";

  let color = line[lineName].color;
  box.style.border = `1px solid ${color}`;
  box.style.backgroundColor = `${color}`;
  box.style.color = "#FFFFFF";
  box.style.borderRadius = "15px";
  box.style.borderRadius = "15px";
  box.style.padding = "10px";
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "space-evenly";
};

const createSection = (lineName) => {
  let section = document.querySelectorAll("section");
  let color = line[lineName].color;
  let count = 0;
  for (let sec of section) {
    sec.style.border = `1px Solid ${color}`;
    sec.style.borderRadius = "6px";
    sec.style.width = "95%";

    const header = document.createElement("div");
    createHeader(lineName, header, count);
    sec.appendChild(header);
    count++;
  }
};

const createHeader = (lineName, header, count) => {
  header.style.width = "100%";
  header.style.height = "2rem";
  header.style.padding = "10px";
  if (count == 0) {
    header.innerText = `To ${
      line[lineName].sta[line[lineName].sta.length - 1].name
    }`;
  } else {
    header.innerText = `To ${line[lineName].sta[0].name}`;
  }
};

KTLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "KTL";
  const { UP, DOWN } = await callMTR2(lineName);

  KTLBtn.style.backgroundColor = line[lineName].color;
  KTLBtn.style.color = "White";
  KTLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

ISLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "ISL";
  const { UP, DOWN } = await callMTR2("ISL");
  ISLBtn.style.backgroundColor = line[lineName].color;
  ISLBtn.style.color = "White";
  ISLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

TWLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "TWL";
  const { UP, DOWN } = await callMTR2("TWL");
  TWLBtn.style.backgroundColor = line[lineName].color;
  TWLBtn.style.color = "White";
  TWLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

SILBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "SIL";
  const { UP, DOWN } = await callMTR2("SIL");
  SILBtn.style.backgroundColor = line[lineName].color;
  SILBtn.style.color = "White";
  SILBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

TCLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "TCL";
  const { UP, DOWN } = await callMTR2("TCL");
  TCLBtn.style.backgroundColor = line[lineName].color;
  TCLBtn.style.color = "White";
  TCLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

EALBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "EAL";
  const { UP, DOWN } = await callMTR2("EAL");
  EALBtn.style.backgroundColor = line[lineName].color;
  EALBtn.style.color = "White";
  EALBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

TMLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "TML";
  const { UP, DOWN } = await callMTR2("TML");
  TMLBtn.style.backgroundColor = line[lineName].color;
  TMLBtn.style.color = "White";
  TMLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

AELBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "AEL";
  const { UP, DOWN } = await callMTR2("AEL");
  AELBtn.style.backgroundColor = line[lineName].color;
  AELBtn.style.color = "White";
  AELBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});

TKLBtn.addEventListener("click", async function () {
  cancelEffect();
  removeDiv();
  let lineName = "TKL";
  const { UP, DOWN } = await callMTR2("TKL");
  TKLBtn.style.backgroundColor = line[lineName].color;
  TKLBtn.style.color = "White";
  TKLBtn.style.fontWeight = "Bold";
  createDiv(UP, DOWN, lineName);
});
