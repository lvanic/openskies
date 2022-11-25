import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCountry} from "../redux/actions/actions"

function Countries(props){
    const navigate = useNavigate();
    return(
        <div className="view-countries"> 
            {props.countries.map((el, i) => (
                <div key={i} className="country" onClick={() => {
                    props.setCountry(el)
                    navigate(`/about-country?id=${i}`)
                }}>
                    <img src={el.photo[1]}/>
                    <div className="country-name">{el.name}</div>
                </div>
            ))}
        </div>
    );
}
const mapStateToProps =(state) => {
    return{
        countries: state.countries
    }
}
const mapDispatchToProps ={
    setCountry
}
export default connect(mapStateToProps, mapDispatchToProps)(Countries);