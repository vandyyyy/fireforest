import app from "../firbaseConfig";
import { getDatabase, ref, onValue,get } from "firebase/database";

let fetchedData = [];

const fetchData = async() => {
 const db = getDatabase(app);
 const dbref = ref(db,"data");
await get(dbref).then((snapshot)=>{
    if(snapshot.exists()){
        fetchedData = snapshot.val();
    }
})
}


const processTempData = async() => {
   let processedTemp = [];
   let processedPIR = [];
   let processedVibration = [];
   let processedSmoke = [];
   let last14 = [];
   await fetchData().then(()=>{
    last14 = [...fetchedData.slice(-14)]
   })
   for(let i = 0;i < last14.length; i++){
    let temp = {
       "x": `${i}`,
       "y": last14[i].temp,
    }
    let pir = {
        "x": `${i}`,
        "y": last14[i].PIR
    }
    let vibration = {
        "x": `${i}`,
        "y": last14[i].Vibration
    }
    let smoke = {
        "x": `${i}`,
        "y": last14[i].Smoke
    }
    processedTemp.push(temp);
    processedPIR.push(pir);
    processedVibration.push(vibration);
    processedSmoke.push(smoke);
}
console.log(processedPIR);
console.log(processedTemp)
return [processedTemp,processedPIR,processedVibration,processedSmoke];
}

export {fetchData,processTempData};