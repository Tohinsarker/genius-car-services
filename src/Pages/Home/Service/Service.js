import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {

    const {id,name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToserviceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt={''}></img>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() =>navigateToserviceDetail(id)} className='btn btn-primary'>Book</button>
        </div>
    );
};

export default Service;