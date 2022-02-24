import React, { useEffect, useState } from 'react'


export const ClockHook = ()=> {
  
        const[fecha, setFecha] = useState(new Date())
        const[edad, setEdad] = useState(0)
        const nombre = 'jimy'
        const apellidos = 'jonez'

       
    useEffect(() => {
       
        const timerID = setInterval(() =>{
            setEdad(edad+1)
            setFecha(new Date())
        }, 1000);

        return()=>{
            clearInterval(timerID);
        }       
    });
    
        return (
            <div>
                <h2>
                    Hora Actual:
                    {fecha.toLocaleTimeString()}
                </h2>
                <h3>{nombre} {apellidos}</h3>
                <h1>Edad: {edad}</h1>
            </div>
        )
}
