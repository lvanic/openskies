import React, { Component , ReactDOM}  from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLanguage } from "../redux/actions/actions";

function HeadBar(props) {
  const navigate = useNavigate();
    return (
<header className="header">
      <div className="wrapper">
        <div className="logo">
          <a onClick={() => navigate('/')}>
            <img src="../img/logo.svg" alt="OpenSkiesLogo" />
          </a>
        </div>
        <a onClick={() => navigate('/register')} className="btn_online">
          <span className="hidden">онлайн-</span>регистрация</a>
        <div className="header_contancts">
          <p className="phone">8(029)7292215 внутренние рейсы</p>
          <div className="line"></div>
          <p className="phone">8(029)7254495 международные рейсы</p>
        </div>
        <div className="burger">
          <div className="container" id="burger">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="photo">
        <img src="/img/plain.svg" alt="plane" />
      </div>
      <nav className="nav">
        <div className="wrapper">
          <ul className="list_items">
            <li><a onClick={() => navigate('/')}>Главная</a></li>
            <li><a className="btn_app" onClick={() => navigate('/countries')}>Куда поехать</a></li>
            <li><a className="btn_about_us" onClick={() => navigate('/about-us')}>О нас</a></li>
            <li><a onClick={() => navigate('/rules')}>Дополнительные услуги</a></li>
            <li><a onClick={() => navigate('/tracking')}>Отслеживание заказа</a></li>
          </ul>
        </div>
      </nav>
    </header>
    );
  }
  
  const mapStateToProps = (state) => {
    return{
        language: state.language
    }
  };

  export default connect(mapStateToProps)(HeadBar);
