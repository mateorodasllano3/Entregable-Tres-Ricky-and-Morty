import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UrlLocation = ({characther}) => {

    const[UrlCharacter, SetUrlCharacter] = useState({})

    useEffect(()=>{
        axios.get(characther)
        .then((res) => SetUrlCharacter(res.data))
    },[])

    console.log(UrlCharacter)
    
    return (
        <div className='Card-Character'>
            
            <img src={ UrlCharacter.image } alt="" />
            <br />
            
            <h2>{ UrlCharacter.name }</h2>
            <div className='Status-Character'>
                {UrlCharacter.status === "Alive" && <i class="fa-solid fa-circle" style={{color:"Green"}}></i>}
                {UrlCharacter.status === "Dead" && <i class="fa-solid fa-circle" style={{color:"Red"}}></i>}
                {UrlCharacter.status === "unknown" && <i class="fa-solid fa-circle" style={{color:"Gray"}}></i>}
                {" "}{UrlCharacter.status}
            </div>
            <p><b>Specie:</b> <br />{ UrlCharacter.species }</p>
            <p><b>Origin:</b> <br />{ UrlCharacter.origin?.name }</p> 
            <p><b>Episodes where Appear:</b> <br />{ UrlCharacter.episode?.length}</p> 
         
        </div>
    );
};


export default UrlLocation;
