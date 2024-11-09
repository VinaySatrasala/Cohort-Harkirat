import { useEffect, useState } from "react"

export const useDimensions = () =>{
    const [dim, setDim] = useState({x : window.innerWidth , y : innerHeight});
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setDim({x : window.innerWidth , y : innerHeight});
        })
    },[]);
    return dim;
}