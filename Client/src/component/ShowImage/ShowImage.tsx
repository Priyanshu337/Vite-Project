import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import "./ShowImage.css";

const fetchRandomData = (): any => {
    // Fetching data from the API
    return axios.get(`https://jsonplaceholder.typicode.com/photos`)
}

interface showImage {
    val: any;

}
export default function ShowImage({ val }: showImage) {

    const [user, setUser] = useState({});

    const fetchImage = async () => {
        const response = await fetchRandomData();
        console.log(response.data);
        const profile = response.data.find((user: any) => user.id === val.id);
        setUser(profile);
    }
    useEffect(() => {
        if (val?.name) {
            fetchImage();
        }
    }, [val])

    return (
        <div className='image-container'>
            {user?.url ? <img className='img-container' src={user?.url} /> : null}
        </div>
    )
}