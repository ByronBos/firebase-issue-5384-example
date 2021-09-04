import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

function App() {
  const firebaseApp = initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
  });
  
  const db =  initializeFirestore(firebaseApp, {}); 

  return (
    <h1>Thanks for your help!</h1>
  );
}

export default App;
