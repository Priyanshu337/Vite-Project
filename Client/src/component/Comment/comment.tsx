import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

interface Cmnt {
    value: any
}

export default function Comments({ value }: Cmnt) {
    console.log('comment', value)
    const fetchRandomData = (): any => {

        return axios.get(`https://jsonplaceholder.typicode.com/comments`)
    }

    const [cmt, setCmt] = useState({});

    const fetchcmnt = async () => {
        const response = await fetchRandomData();
        console.log(response.data);
        const profile = response.data.find((user: { id: any; }) => user.id === value.id);
        setCmt(profile);

    }
    useEffect(() => {
        if (value?.id) {
            fetchcmnt();
        }
    }, [value]);

    return (
        <>
            <div className='comment-container'>
                {cmt?.body ? <h1 style={{ color: 'black' }} > {cmt?.body}</h1 > : null
                }
            </div>
        </>
    )
}
