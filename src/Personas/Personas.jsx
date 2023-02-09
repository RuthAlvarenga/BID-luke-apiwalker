import axios from 'axios';
import React, { useEffect, useState } from 'react'
import obiwan from '../Img/obiwan.jpeg';
import styles from './Personas.module.css'

const Personas = (props) => {

    const [persona, setPersona] = useState({});
    const [error, setError] = useState(false)
    

    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+ props.match.params.id)
            .then(response=> response.data)
            .then(result =>{
                console.log(result);
                setPersona(result);
            })
            .catch (error => {
                console.error(error);
                setError(true)
            })
        
        
    }, [])
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Ruta Persona: {props.match.params.id}</h1>
            
            {
                error?
                <div className='errorcontainer'>
                    <img src={obiwan} className='img' />
                    <p className='error'>"Estos no son los droides que estabas buscando"</p>
                </div>
                :
                <div className={styles.datos}>
                    <h3>Name: {persona.name}</h3>
                    <h3>Height: {persona.height}</h3>
                    <h3>Mass: {persona.mass}</h3>
                    <h3>Eye Color: {persona.eye_color}</h3>
                    <h3>Hair Color: {persona.hair_color}</h3>
                    <h3>Skin Color: {persona.skin_color}</h3>
                    <h3>Gender: {persona.gender}</h3> 
                </div>
            }
        </div>
    
    )
}

export default Personas;