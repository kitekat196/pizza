import React from "react";
import { Link } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel"
import '../scss/aboutUs.scss'
import map from '../assets/img/карты.png'
import { Footer } from "../components";
import Table from "../components/Table";
import { useEffect } from 'react';

 

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackButtonClick = () => {
    window.history.back();
  }

  return (
    <>
      <div className="about__company">
        <div className="about__company__title">
          <span>O КОМПАНИИ</span>
        </div>
        <div className="about__company__decpription">
          <span style={{ fontWeight: "bold", fontSize: "23px" }}>Pizza Express 24 </span>
          <span>
            - это достаточно молодая, но динамично развивающаяся сеть пиццерий,
            которая сочетает в себе формат быстрого и качественного питания, основанная на новых
            технологиях и высоком качестве продукции. Это кафе, где активное обслуживание не влияет
            на качество вкуса.
          </span>
          <div className="about__company__subdesc">
            <span>
              Здесь одинаково комфортно себя чувствуют люди разных возрастов.
            </span>
          </div>
        </div>
      </div>


      <Table />


      <div className="map__block">
        <span className="map__block__title">Мы здесь</span>
        <br></br>
        <a href="https://clck.ru/345uSq" target="_blank">
          <img className="map__block__thismap" src={map} alt="карта" />
        </a>
      </div>


      <ControlledCarousel />


      <div className="cart__bottom-buttons" style={{ justifyContent: 'center' }}>
        <a href="/" className="button button--outline button--add go-back-btn">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to='/'>
            <span onClick={handleBackButtonClick}> Вернуться назад</span>
          </Link>
        </a>
      </div>


      <Footer />
    </>
  );
}

export default AboutUs;