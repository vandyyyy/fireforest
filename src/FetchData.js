// import { useEffect } from "react";
// import { getDatabase, ref, onValue } from "firebase/database";
// import app from "./firbaseConfig";
// function FetchData() {
//   const db = getDatabase(app);
//   useEffect(() => {
//     const dbref = ref(db, "data");
//     onValue(dbref, async (snapshot) => {
//       const data = await snapshot.val();
//     });
//   }, []);
// }
// export default FetchData;
import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firbaseConfig";

export async function fetchData() {
  const db = getDatabase(app);
  const dbref = ref(db, "data");

  return new Promise((resolve, reject) => {
    onValue(dbref, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
}
