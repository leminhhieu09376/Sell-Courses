import React from 'react'
import { useParams } from 'react-router-dom';
const Learning = () => {
    const { id } = useParams();

    return (
        <div>{id}</div>
    )
}

export default Learning