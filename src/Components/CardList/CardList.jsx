import React from 'react';
import './CardList.css';
// import { Link } from 'react-router-dom';

const CardList = ({img, link}) => {
  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle red"></div>
            <div className="p-circle yellow"></div>
            <div className="p-circle green"></div>
        </div>

        <a href={link} target ='_blank' rel="noreferrer" >
          <img src={img} alt="" className="p-img" />
        </a>

        {/* <Link to={link} target={'_blank'}>
            <img src={img} alt="" className="p-img" />
        </Link> */}

    </div>
  )
}

export default CardList;