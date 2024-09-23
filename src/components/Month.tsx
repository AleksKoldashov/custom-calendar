import React from 'react'


export const Month:any = (x: number, n:number, month: number, yaer:number)=> { 
if(x==0){
        return [{
            id: new Date(2024,month,n).getTime(), 
            day: n,
            month,
            yaer, 
            date: new Date(2024,month,n)
        }]
    }else{
        return [new Date(2024,month,n).getTime()].concat(Month(x-1,n+1,month, yaer))
    }
  }
  


