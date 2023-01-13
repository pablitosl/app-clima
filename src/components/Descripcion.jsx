import React from 'react';
import './descripcion.css';
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FaWind} from 'react-icons/fa';
import {BiHappy} from 'react-icons/bi';
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md';

const Descripcion = ({weather, units}) => {

    const tempUnit = units === 'metric' ? 'ºC' : 'ºF';
    const windUnit = units === 'metric' ? 'm/s' : 'm/h';

    const cards = [
        {
            id: 1,
            icon: <BsFillArrowDownCircleFill />,
            title: 'min',
            data: weather.temp_min.toFixed(),
            unit : tempUnit,
        },
        {
            id: 2,
            icon: <BsFillArrowUpCircleFill />,
            title: 'max',
            data: weather.temp_max.toFixed(),
            unit : tempUnit,
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: 'feels like',
            data: weather.feels_like.toFixed(),
            unit : tempUnit,
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: 'presión',
            data: weather.pressure,
            unit : 'hPa',
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: 'humedad',
            data: weather.humidity,
            unit : '%',
        },
        {
            id: 6,
            icon: <FaWind />,
            title: 'viento',
            data: weather.speed.toFixed(),
            unit : windUnit,
        },
    ]

  return (
    <div className="section section__descripcion">

        {cards.map(({id, icon, title, data, unit}) => (
            <div key={id} className="card" >
                <div className="descripcion__card-icon">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
        ))}
        
    </div>
  )
}

export default Descripcion