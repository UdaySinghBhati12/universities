import React from 'react'
import "../App.css"

export default function Main({universities}){


    
    return (
        <div className='main'>
            
                <div className='component'>
                 
                    {universities.map( (university, index) => ( 
                        <div key={index} >
                            <p className='grid-item'>NAME OF COLLAGE : {university.name}</p>
                            <p>COUNTRY : {university.country}</p>
                            <p>DOMAINS : {university.domains}</p>
                            <p>CODE : {university["alpha_two_code"]}</p>
                            <p>STATE : {university["state-province"]}</p>
                            <p>WEB_PAGE : {university["web_pages"]}</p>
                            
                            </div>
                        ))
                    }
                </div>
           
        </div>
    )
}