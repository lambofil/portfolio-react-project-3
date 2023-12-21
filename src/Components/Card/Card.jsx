import React from "react";
import "./Card.css";
import CardList from "../CardList/CardList";
import { cardlist } from "../../data";

const Card = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          My projects span as follows: Redux-Movie App, Modern gpt3 website,
          Gericht Restaurant Website, Modern Banking Landing Page, Simple Form
          Validation, Exchange Rate Calculator App, Movie-Seat Booking App,
          Custom Video Player App and a Sample Landing page.
        </p>
      </div>
      <div className="pl-list">
        {cardlist.map((item) => (
          <CardList key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Card;
