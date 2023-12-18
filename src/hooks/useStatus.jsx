import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

export default function useCategory() {
    const firebase = useFirebase()
    const [registered, setRegistered] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [solved, setSolved] = useState([]);
    const [cancelled, setCancelled] = useState([]);
  
    // const getStatusValues = async () => {
        
    //     await firebase.fetchMyComplaintsUsingStatus("Registered").then((value) => setRegistered(value.data()))
    //     await firebase.fetchMyComplaintsUsingStatus("ongoing").then((value) => setOngoing(value.data()))
    //     await firebase.fetchMyComplaintsUsingStatus("solved").then((value) => setSolved(value.data()))
    //     await firebase.fetchMyComplaintsUsingStatus("cancelled").then((value) => setCancelled(value.data()))
    // }
    const fetchData = async () => {
        const res = await firebase.fetchMyComplaintsUsingStatus("Registered")
        setRegistered(res.docs)
        const res2 = await firebase.fetchMyComplaintsUsingStatus("Ongoing")
        setOngoing(res2.docs)
        const res3 = await firebase.fetchMyComplaintsUsingStatus("Solved")
        setSolved(res3.docs)
        const res4 = await firebase.fetchMyComplaintsUsingStatus("Cancelled")
        setCancelled(res4.docs)

    }
    useEffect(() => {
        fetchData()
    }, [])
  
    return {registered,ongoing,solved,cancelled}
  }