import React from 'react';
import './Card.css';
import CardList from '../CardList/CardList';
import { cardlist } from '../../data';

const Card = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">Check out some of my projects that span as follows: Doritos landing page, Calculator Web Application, a model fontawesome login design, a vuejs todolist app. 
            </p>
        </div>
        <div className="pl-list">
            {cardlist.map((item) => (<CardList key={item.id} img={item.img} link={item.link} />))}
        </div>  
    </div>
  )
}

export default Card;