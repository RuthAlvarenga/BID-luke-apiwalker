import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import obiwan from '../Img/obiwan.jpeg';


const Principal = () => {
    const [opciones, setOpciones] = useState([]);
    const [selected, setSelected] = useState("");
    const [id, setId] = useState("1");
    const [error, setError] = useState(false);
    const [result, setResult] = useState({});



    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => response.data)
            .then(result => {
                console.log(result);
                let resultList = [];
                for (const [key, value] of Object.entries(result)) {
                    resultList.push({ name: key, route: value })
                }

                setOpciones(resultList);
                console.log(resultList);
                setSelected(resultList[0].route)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        console.log(selected);
    }, [selected])

    const handleBuscar = (e) => {
        e.preventDefault();
        let url = selected + id;
        axios.get(url)
            .then(response => response.data)
            .then(result => {
                setError(false);
                console.log(result);
                if (selected.includes(selected)) {
                    console.log(result)
                    setResult(result);
                }
                if (selected.includes("people")){
                    console.log(result.homeworld);
                    axios.get(result.homeworld)
                    .then(resp => resp.data)
                    .then(res => {
                        console.log(res);
                        result.planet = res;
                        console.log(result);
                    })
                }
            })
            .catch(error => {
                console.log(error);
                setError(true);

            })

    }


    return (
        <div className='container'>
            <h1 className='starwar'>API Stars Wars</h1>
            <form onSubmit={handleBuscar} className='form'>
                <label className='label'>Search for:  </label>
                <select value={selected} onChange={(e) => setSelected(e.target.value)} className='selected'>
                    {
                        opciones.map((item, index) =>
                            <option key={item.name + index} value={item.route}>{item.name}</option>)
                    }
                </select>
                <label className='label'>ID: </label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} className='input'/>
                <button type="submit" className='btn'>Buscar</button>
            </form>

            {
                error?
                <div className='errorcontainer'>
                    <img src={obiwan} className='img' />
                    <p className='error'>"Estos no son los droides que estabas buscando"</p>
                </div>
                :
                <div className='result'>
                    <div>
                        {
                            result.name ?
                                <div >
                                    Name: {result.name}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.climate ?
                                <div>
                                    Climate: {result.climate}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.hair_color ?
                                <div>
                                    Hair Color: {result.hair_color}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.eye_color ?
                                <div >
                                    Eye Color: {result.eye_color}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.skin_color ?
                                <div >
                                    Skin Color: {result.skin_color}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.height ?
                                <div >
                                    Height: {result.height}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.mass ?
                                <div >
                                    Mass: {result.mass}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.gender ?
                                <div >
                                    Gender: {result.gender}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.population ?
                                <div>
                                    Population: {result.population}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.gravity ?
                                <div>
                                    Gravity: {result.gravity}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.diameter ?
                                <div>
                                    Diameter: {result.diameter}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.orbital_period ?
                                <div >
                                    Orbital Period: {result.orbital_period}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.language ?
                                <div >
                                    Language: {result.language}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.average_height ?
                                <div>
                                    Average height: {result.average_height}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.classification ?
                                <div>
                                    Classification: {result.classification}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.designation ?
                                <div>
                                    Designation: {result.designation}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.language ?
                                <div>
                                    Language: {result.language}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.director ?
                                <div>
                                    Director: {result.director}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.producer ?
                                <div >
                                    Producer: {result.producer}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.title ?
                                <div >
                                    Title: {result.title}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.episode_id ?
                                <div >
                                    Episode Id: {result.episode_id}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.cargo_capacity ?
                                <div >
                                    Cargo capacity: {result.cargo_capacity}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.passengers ?
                                <div >
                                    Passengers: {result.passengers}
                                </div> :
                                ''
                        }
                    </div>
                    <div>
                        {
                            result.max_atmosphering_speed ?
                                <div >
                                    Max atmosphering speed: {result.max_atmosphering_speed}
                                </div> :
                                ''
                        }
                    </div>
                </div>

            }

        </div>

    )
}

export default Principal;