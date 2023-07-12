import { tokens } from "../theme";
// import { useState, useEffect } from "react";
// import { getDatabase, ref, onValue, limitToLast } from "firebase/database";
// import app from "../firbaseConfig";

// let last10;
// function FetchData() {
//   const db = getDatabase(app);
//   useEffect(() => {
//     const dbref = ref(db, "data");
//     onValue(dbref, async (snapshot) => {
//       const data = await snapshot.val();
//       last10 = data.slice(-10);
//       // console.log(last10);
//     });
//   }, []);
// }
// export default FetchData;
// const FetchData = () => {
//   const [items, setItems] = useState([]);
//   const [interval, setInterval] = useState(null);
//   useEffect(() => {
//     const fetchItems = async () => {
//       const snapshot = await app.database().ref("/data").orderByChild("timestamp").limitToLast(10).once();
//       const data = snapshot.val();
//       setItems(data);
//     };
//     fetchItems();
//     setInterval(fetchItems, 10000); // 10 seconds
//   }, []);
//   console.log(items);
//   // return (
//   //   <div>
//   //     <ul>
//   //       {items.map((item, index) => (
//   //         <li key={index}>{item.name}</li>
//   //       ))}
//   //     </ul>
//   //   </div>
//   // );
// };
// export default FetchData;
import { fetchData } from "../FetchData";
let processedData;

(async () => {
  try {
    const fetchedData = await fetchData();
    let ind = 0;
    processedData = [
      {
        id: ind + 1,
        // data: fetchedData.slice(-14).map((item, index) => ({
        //   x: `${index + 1}`,
        //   y: item.temp,
        // })),
        name: fetchedData.slice(-14).map((item) => {
          return {
            temp: item.temp,
          };
        }),
        email: fetchedData.slice(-14).map((item) => {
          return {
            temp: item.Smoke,
          };
        }),
        age: fetchedData.slice(-14).map((item) => {
          return {
            temp: item.PIR,
          };
        }),
        phone: fetchedData.slice(-14).map((item) => {
          return {
            temp: item.Vibration,
          };
        }),
        access: "32",
      },
    ];
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
})();
export { processedData };
export const mockDataTeam = [
  {
    id: 1,
    name: "14",
    email: "21",
    age: 35,
    phone: "43",
    access: "32",
  },
  {
    id: 2,
    name: "12",
    email: "31",
    age: 42,
    phone: "43",
    access: "54",
  },
  {
    id: 3,
    name: "15",
    email: "42",
    age: 45,
    phone: "32",
    access: "21",
  },
  {
    id: 4,
    name: "14",
    email: "54",
    age: 16,
    phone: "32",
    access: "42",
  },
  {
    id: 5,
    name: "12",
    email: "44",
    age: 31,
    phone: "32",
    access: "43",
  },
  {
    id: 6,
    name: "8",
    email: "32",
    age: 150,
    phone: "43",
    access: "44",
  },
  {
    id: 7,
    name: "12",
    email: "13",
    age: 44,
    phone: "14",
    access: "34",
  },
  {
    id: 8,
    name: "20",
    email: "5",
    age: 36,
    phone: "5",
    access: "4",
  },
  {
    id: 9,
    name: "25",
    email: "10",
    age: 65,
    phone: "10",
    access: "10",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "T1",
    email: "21",
    age: 35,
    phone: "22",
    address: "23",
    city: "24",
    zipCode: "25",
    registrarId: 26,
  },
  {
    id: 2,
    name: "T2",
    email: "27",
    age: 42,
    phone: "28",
    address: "29",
    city: "30",
    zipCode: "31",
    registrarId: 32,
  },
  {
    id: 3,
    name: "T3",
    email: "34",
    age: 45,
    phone: "35",
    address: "36",
    city: "37",
    zipCode: "38",
    registrarId: 39,
  },
  {
    id: 4,
    name: "40",
    email: "41",
    age: 16,
    phone: "42",
    address: "43",
    city: "44",
    zipCode: "45",
    registrarId: 1,
  },
  {
    id: 5,
    name: "Project",
    email: "46",
    age: 31,
    phone: "47",
    address: "10",
    city: "11",
    zipCode: "14",
    registrarId: 12,
  },
  {
    id: 6,
    name: "23",
    email: "24",
    age: 150,
    phone: "25",
    address: "12",
    city: "32",
    zipCode: "43",
    registrarId: 12,
  },
  {
    id: 7,
    name: "quiz",
    email: "32",
    age: 44,
    phone: "33",
    address: "34",
    city: "45",
    zipCode: "51",
    registrarId: 12,
  },
  {
    id: 8,
    name: "viva",
    email: "34",
    age: 36,
    phone: "35",
    address: "40",
    city: "21",
    zipCode: "44",
    registrarId: 51,
  },
  {
    id: 9,
    name: "tutorial",
    email: "21",
    age: 65,
    phone: "19",
    address: "5",
    city: "45",
    zipCode: "13",
    registrarId: 92,
  },
  
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "T1",
    email: "34",
    cost: "21",
    phone: "54",
    date: "22",
  },
  {
    id: 2,
    name: "T2",
    email: "27",
    cost: "24",
    phone: "28",
    date: "21",
  },
  {
    id: 3,
    name: "T3",
    email: "21",
    cost: "24",
    phone: "39",
    date: "20",
  },
  {
    id: 4,
    name: "Assignments",
    email: "23",
    cost: "55",
    phone: "42",
    date: "22",
  },
  {
    id: 5,
    name: "project",
    email: "52",
    cost: "24",
    phone: "45",
    date: "21",
  },
  {
    id: 6,
    name: "Internal assessment",
    email: "31",
    cost: "12",
    phone: "43",
    date: "22",
  },
  {
    id: 7,
    name: "quiz",
    email: "32",
    cost: "42",
    phone: "23",
    date: "22",
  },
  {
    id: 8,
    name: "viva",
    email: "32",
    cost: "24",
    phone: "44",
    date: "21",
  },
];

export const mockTransactions = [
  {
    txId: "PIR 90.6",
    user: "Smoke 35.4",
    date: "Vibration 669.1",
    cost: "temp 18",
  },
  {
    txId: "PIR 90.4",
    user: "Smoke 33.4",
    date: "Vibration 669.1",
    cost: "temp 19",
  },
  {
    txId: "PIR 91.1",
    user: "Smoke 36.4",
    date: "Vibration 669.1",
    cost: "temp 17",
  },
  {
    txId: "PIR 92.2",
    user: "Smoke 37.4",
    date: "Vibration 669.1",
    cost: "temp 16",
  },
  {
    txId: "PIR 93.4",
    user: "Smoke 31.4",
    date: "Vibration 669.1",
    cost: "temp 18",
  },
  {
    txId: "PIR 92.6",
    user: "Smoke 32.4",
    date: "Vibration 669.1",
    cost: "temp 15",
  },
  {
    txId: "PIR 91.7",
    user: "Smoke 35.0",
    date: "Vibration 669.1",
    cost: "temp 12",
  },
  {
    txId: "PIR 90.6",
    user: "Smoke 43.7",
    date: "Vibration 686.9",
    cost: "temp 14.6",
  },
];

export const mockBarData = [
  {
    country: "1",
    "Temp": 137,
    "TempColor": "hsl(229, 70%, 50%)",
    PIR: 96,
    PIRColor: "hsl(296, 70%, 50%)",
    Vibration: 72,
    VibrationColor: "hsl(97, 70%, 50%)",
     Smoke: 140,
     SmokeColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "2",
    "Temp": 55,
    "TempColor": "hsl(307, 70%, 50%)",
    PIR: 28,
    PIRColor: "hsl(111, 70%, 50%)",
    Vibration: 58,
    VibrationColor: "hsl(273, 70%, 50%)",
    Smoke: 29,
    SmokeColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "3",
    "Temp": 109,
    "TempColor": "hsl(72, 70%, 50%)",
    PIR: 23,
    PIRColor: "hsl(96, 70%, 50%)",
    Vibration: 34,
    VibrationColor: "hsl(106, 70%, 50%)",
    Smoke: 152,
    SmokeColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "4",
    "Temp": 133,
    "TempColor": "hsl(257, 70%, 50%)",
    PIR: 52,
    PIRColor: "hsl(326, 70%, 50%)",
    Vibration: 43,
    VibrationColor: "hsl(110, 70%, 50%)",
    Smoke: 83,
    SmokeColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "5",
    "Temp": 81,
    "TempColor": "hsl(190, 70%, 50%)",
    PIR: 80,
    PIRColor: "hsl(325, 70%, 50%)",
    Vibration: 112,
    VibrationColor: "hsl(54, 70%, 50%)",
    Smoke: 35,
    SmokeColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "6",
    "Temp": 66,
    "TempColor": "hsl(208, 70%, 50%)",
    PIR: 111,
    PIRColor: "hsl(334, 70%, 50%)",
    Vibration: 167,
    VibrationColor: "hsl(182, 70%, 50%)",
    Smoke: 18,
    SmokeColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "7",
    "Temp": 80,
    "TempColor": "hsl(87, 70%, 50%)",
    PIR: 47,
    PIRColor: "hsl(141, 70%, 50%)",
    Vibration: 158,
    VibrationColor: "hsl(224, 70%, 50%)",
    Smoke: 49,
    SmokeColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Temp",
    label: "Temp",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "T2",
    label: "T2",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "T3",
    label: "T3",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Project",
    label: "Project",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "other",
    label: "other",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];
// export const mockLineData = [
//   {
//     id: "Temperature",
//     color: tokens("dark").greenAccent[500],
//     data: generateData("Temperature"),
//   },
//   {
//     id: "PIR",
//     color: tokens("dark").blueAccent[300],
//     data: generateData("PIR"),
//   },
//   {
//     id: "Vibration",
//     color: tokens("dark").redAccent[200],
//     data: generateData("Vibration"),
//   },
// ];

// function generateData() {
//   const data = [];
//   // for (let index = 0; index < 10; index++) {
//   //   data.push({
//   //     x: new Date().toLocaleTimeString(),
//   //     y: last10[index].id,
//   //   });
//   // }
//   return data;
// }


export const mockLineData = [
  {
    id: "Temperature",
    color: tokens("dark").greenAccent[500],
    // for (let index = 0; index < 10; index++) {
    //   const element = last10[index];
    //   x= new Date().toLocaleTimeString(),
    //   y= element.PIR
    //   data:[{x: x, y: y,}]
    // }
    // data: last10.map((element, index) => ({
    //   x: new Date().toLocaleTimeString(),
    //   y: element.PIR,
    // })),
    data: [
      {
        x:"a",
        y:56,
      },
      {
        x: "b",
        y: 75,
      },
      {
        x: "c",
        y: 36,
      },
      {
        x: "d",
        y: 216,
      },
      {
        x: "e",
        y: 35,
      },
      {
        x: "f",
        y: 236,
      },
      {
        x: "g",
        y: 88,
      },
      {
        x: "h",
        y: 232,
      },
      {
        x: "i",
        y: 281,
      },
      {
        x: "j",
        y: 1,
      },
      {
        x: "k",
        y: 35,
      },
      {
        x: "l",
        y: 14,
      },
    ],
  },
  {
    id: "PIR",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "a",
        y: 212,
      },
      {
        x: "b",
        y: 190,
      },
      {
        x: "c",
        y: 270,
      },
      {
        x: "d",
        y: 9,
      },
      {
        x: "e",
        y: 75,
      },
      {
        x: "f",
        y: 175,
      },
      {
        x: "g",
        y: 33,
      },
      {
        x: "h",
        y: 189,
      },
      {
        x: "i",
        y: 97,
      },
      {
        x: "j",
        y: 87,
      },
      {
        x: "k",
        y: 299,
      },
      {
        x: "l",
        y: 251,
      },
    ],
  },
  {
    id: "Vibration",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "a",
        y: 191,
      },
      {
        x: "b",
        y: 136,
      },
      {
        x: "c",
        y: 91,
      },
      {
        x: "d",
        y: 190,
      },
      {
        x: "e",
        y: 211,
      },
      {
        x: "f",
        y: 152,
      },
      {
        x: "g",
        y: 189,
      },
      {
        x: "h",
        y: 152,
      },
      {
        x: "i",
        y: 8,
      },
      {
        x: "j",
        y: 197,
      },
      {
        x: "k",
        y: 107,
      },
      {
        x: "l",
        y: 170,
      },
    ],
  },
  {
    id: "Smoke",
    color: tokens("dark").greenAccent[200],
    data: [
      {
        x: "a",
        y: 191,
      },
      {
        x: "b",
        y: 136,
      },
      {
        x: "c",
        y: 91,
      },
      {
        x: "d",
        y: 190,
      },
      {
        x: "e",
        y: 211,
      },
      {
        x: "f",
        y: 152,
      },
      {
        x: "g",
        y: 189,
      },
      {
        x: "h",
        y: 152,
      },
      {
        x: "i",
        y: 8,
      },
      {
        x: "j",
        y: 197,
      },
      {
        x: "k",
        y: 107,
      },
      {
        x: "l",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
