import { useEffect } from "react";

export function useInterval(fn,interval){
    useEffect(()=>{
        setInterval(fn , interval*1000);
    },[]);
}