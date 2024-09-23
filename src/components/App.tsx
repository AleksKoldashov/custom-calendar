import React, {useEffect, useState} from 'react';
import { Month } from './Month';
import './app.css'


export default function App (){
const [data, setData]=useState([])
const [movies, setMovies]=useState<any>()
const month = new Date().getMonth()
const yaer = new Date().getFullYear()
const week = new Date(yaer,month,1).getDay()
const pagin = 1
const OneDayNowMonth=new Date(yaer,month,1).getTime()

const nowMonth = Month(90,1,month-1,yaer)

console.log(new Date(data[34]));

useEffect(()=>{
    fetch(`https://www.omdbapi.com/?apikey=c1f4b487&page=${pagin}&s='wars'&type=movie`)
    .then((res)=>res.json())
    .then(res=>setMovies(res))
},[pagin])

console.log(movies);

useEffect(()=>{
    const n = nowMonth.indexOf(OneDayNowMonth)
    switch (week) {
        case 4:
            {setData(nowMonth.slice(n-3,63))}
            break;
        default:
            break;
    }
    
},[])

    return<div className='app'>
        <h1>Работате</h1>
    {
     
    }
    </div>
}