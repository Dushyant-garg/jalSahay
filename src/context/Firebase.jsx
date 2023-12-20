import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged,} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBh26Kf_xGai5aPWENbtMF_PnSVnIjDl3A",
    authDomain: "base-project-14a6e.firebaseapp.com",
    projectId: "base-project-14a6e",
    storageBucket: "base-project-14a6e.appspot.com",
    messagingSenderId: "98033806276",
    appId: "1:98033806276:web:3e15bbf99d60d61debd291",
    measurementId: "G-QB1NDE1LJY"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, []);

    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const singinUserWithEmailAndPass = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    const logOut = ()=>{
        signOut(firebaseAuth);
    }

    const handleCreateNewListing = async (name, problem, category, address, city, coordinates, photo, status) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${photo.name}`);
        const uploadResult = await uploadBytes(imageRef, photo);
        return await addDoc(collection(firestore, "Complaints"), {
            name,
            problem,
            category,
            address,
            city,
            coordinates,
            imageURL: uploadResult.ref.fullPath,
            status,
        });
    };
//GET ALL COMPALAINTS
    const listAllComplaints = () => {
        return getDocs(collection(firestore, "Complaints"));
    };
//GET IMAGE
    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };
//GET A PARTICULAR COMPLAINT
    const getComplaintById = async (id) => {
        const docRef = doc(firestore, "Complaints", id);
        const result = await getDoc(docRef);
        return result;
    };
//FETCH COMPLAINTS USING CATEGORY
    const fetchMyComplaints = async (category) => {
        const collectionRef = collection(firestore, "Complaints");
        const q = query(collectionRef, 
                            where("category", "==", category)
                            //If only solved is to be removed
                            // , where("status", "!=", "Solved")
                            //If both solved and cancelled are to be removed
                            // , where("status", "not-in", ['Solved', 'Cancelled'])
                            
                        );
        const result = await getDocs(q);
        return result;
    };
//FETCH COMPLAINTS USING LOCATION
    const fetchMyComplaintsUsingLocation = async (location) => {
        const collectionRef = collection(firestore, "Complaints");
        const q = query(collectionRef, where("city", "==", location));
        const result = await getDocs(q);
        return result;
    };
//FETCH COMPLAINTS USING STATUS
    const fetchMyComplaintsUsingStatus = async (status) => {
        const collectionRef = collection(firestore, "Complaints");
        const q = query(collectionRef, where("status", "==", status));
        const result = await getDocs(q);
        return result;
    };

//FETCH COMPLAINTS USING STATUS
const fetchMyComplaintsUsingName = async () => {
    const collectionRef = collection(firestore, "Complaints");
    const q = query(collectionRef, where("name", "==", "CCTV"));
    const result = await getDocs(q);
    return result;
};
//UPDATE STATUS
    const updateStatus = async (statusId, value) => {
        const docRef = doc(firestore, "Complaints", statusId);
        await updateDoc(docRef,{
            status : value
        })
        // const q = query(docRef, where("status", "==", status));
        // const result = await getDocs(q);
        // return result;
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider
            value={{
                signinWithGoogle,
                signupUserWithEmailAndPassword,
                singinUserWithEmailAndPass,
                logOut,
                handleCreateNewListing,
                listAllComplaints,
                getImageURL,
                getComplaintById,
                fetchMyComplaints,
                fetchMyComplaintsUsingLocation,
                fetchMyComplaintsUsingStatus,
                fetchMyComplaintsUsingName,
                updateStatus,
                isLoggedIn,
                user,
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};



