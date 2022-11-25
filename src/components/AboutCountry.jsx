import React from 'react'
import { connect } from 'react-redux';
import '../css/About_country.css'

function AboutCountry(props) {
  window.scrollTo(0, 0);
  return (<>
    <section className="img">
      <div className="wrapper">
        <div className="imgs">
          {
            props.country.photo.map((ph, i) => (
              i != 0 ?
                <img src={ph} />
                :
                null
            ))
          }
        </div>
        <div className="text">
          <p className="title_text">{props.country.name}</p>
          <p className="text_des_les"></p>
          <p className="description">{props.country.description}</p>
        </div>
      </div>
    </section>
    <img className="img_osnova" src={props.country.photo[0]} />
  </>
  );
}
const mapStateToProps = (state) => {
  return {
    country: state.activeCountry
  }
}
export default connect(mapStateToProps)(AboutCountry);