import { initializeApp } from "firebase/app";
import {getFirestore, 
        collection, 
        getDocs, 
        doc, 
        getDoc, 
        query, 
        where,
        addDoc, 
    } 
        from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfMZe74fpsG1ovdUJcJomLfxIeOP6b3A4",
    authDomain: "datashop-e99bd.firebaseapp.com",
    projectId: "datashop-e99bd",
    storageBucket: "datashop-e99bd.appspot.com",
    messagingSenderId: "682764965228",
    appId: "1:682764965228:web:7e798dba184279e86e8f49"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
    const miColleccion = collection(firestore, "producto");
    let respuesta = await getDocs(miColleccion);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado
    });
    return dataDocs;
}

export async function getSingleItem(idParams) {
    const docRef = doc(firestore, "producto", idParams);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };

}

export async function getItemsByCategory(idParams) {
    const collectionRef = collection(firestore, "producto");
    const queryCategory = query(collectionRef, where("category", "==", idParams)
    );

    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado;
    });
    return dataDocs;
}

export async function createBuyOrder(orderData){

    const miColleccion = collection(firestore, "orders");
    let respuesta = await addDoc(miColleccion, orderData);
    return respuesta.id;
}

export default firestore;