import React, {useState, useEffect} from "react"
import {useLocalStorage} from "./useLocalStorage.js"

export const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage("clicked")
    useEffect(() => {
        if(darkmode === true)
 {
   
    document.body.classList.add("dark-mode")
 }
 else {
     document.body.classList.remove("dark-mode")
 }
    },[darkmode])
    return [darkmode, setDarkMode]
}