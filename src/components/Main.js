import React from 'react'
import "../App.css"

export default function Main({universities}){


    
    return (
        <div className='main'>
            
                <div className='component'>
                 
                    {universities.map( (university, index) => ( 
                        <div key={index} >
                            <p >Name of Collage : {university.name}</p>
                            <p>Country : {university.country}</p>
                            <p>Domain : {university.domains}</p>
                            <p>Code : {university["alpha_two_code"]}</p>
                            <p>State : {university["state-province"]}</p>
                            <p>Web page : {university["web_pages"]}</p>
                            
                            </div>
                        ))
                    }
                </div>
           
        </div>
    )
}