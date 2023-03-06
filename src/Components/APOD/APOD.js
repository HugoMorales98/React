import { useEffect, useState } from 'react';
import './APOD.css';

const dataURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const APOD = () => {
    const [data, setData] = useState ([]);

    const fetchData = () => {
        fetch(dataURL)
        .then(res => res.json())
        .then(res => setData(data))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

console.log(data);

    return (

        <div className='apod-container'>
            <h1 className='apod-title'>{data.title}</h1>
            <img className='apod-img' alt="APOD" src={data.url}></img> 
            <h2 className='apod-date'>{data.date}</h2>
            <h1 className='apod-description'>{data.explanation}</h1>
        </div>

    )
}

export default APOD;