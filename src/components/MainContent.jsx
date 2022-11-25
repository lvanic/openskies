import {Link, useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import { setCountry } from '../redux/actions/actions';

function MainContent (props) {
  const navigate = useNavigate();

    return(
        <>
          <div className="wrapper">
            <h1 className="title_app">Предложения</h1>
          </div>

          <section className="appliaation">
            <div className="wrapper">
              <div className="container_blocks">

                <div className="app_block">
                  <img src="img/Greece/Greece1.svg" alt="greece" />
                  <a onClick={() => {navigate('/about-country?id=0'); props.setCountry(props.countries[0])}}>
                    <div className="hidden_text">Греция</div>
                  </a>
                </div>
                <div className="app_block">
                  <img src="img/Turkey/Turkey1.svg" alt="Turkey" />
                  <a onClick={() => {navigate('/about-country?id=1'); props.setCountry(props.countries[1])}}>
                    <div className="hidden_text">Турция</div>
                  </a>
                </div>
                <div className="app_block">
                  <img src="img/Cuprys/Cuprus1.svg" alt="Cuprus" />
                  <a onClick={() => {navigate('/about-country?id=2'); props.setCountry(props.countries[2])}}>
                    <div className="hidden_text">Кипр</div>
                  </a>

                </div>
              </div>
            </div>
          </section>
        </>
    );
}

const mapStateToProps = (state) => {
  return{
      language: state.language,
      country: state.activeCountry,
      countries: state.countries
  }
};
const mapDispatchToProps = {
  setCountry
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContent);