import { useEffect } from "react";
import { useState } from "react"
import { connect } from "react-redux";
import '../css/tracking.css'

function Tracking(props) {
    const [secretCode, setSecretCode] = useState();
    const [isSecretCode, setIsSecretCode] = useState(false);
    const [info, setInfo] = useState();
    const clickHandler = (e) => {
        if (props.info.find(x => x.secretCode == secretCode) != undefined & secretCode != 0) {
            setIsSecretCode(true);
            setInfo(props.info.find(x => x.secretCode == secretCode))
            console.log(props.info.find(x => x.secretCode == secretCode))
        }
        else {
            alert("Такого трек номера не существует")
        }
    }
    return (
        <div>
            {
                isSecretCode ?
                    <>
                        <div className="info-item">
                            <div>Откуда:&nbsp;</div>
                            <div>{info.direction.from}</div>
                        </div>
                        <div className="info-item">
                            <div>Куда:&nbsp;</div>
                            <div>{info.direction.to}</div>
                        </div>
                        <div className="info-item">
                            <div>Пассажиры:&nbsp;</div>
                            <div>{info.information.length}</div>
                        </div>
                        <div className="info-item">
                            <div>Ожидаемая дата вылета:&nbsp;</div>
                            <div>{info.direction.timeFrom}</div>
                        </div>
                        <div className="info-item">
                            <div>Ожидаемая дата возвращения:&nbsp;</div>
                            <div>{info.direction.timeTo}</div>
                        </div>
                    </>
                    :
                    <div className="secret_code_form">
                        <div className="secret_code_form_input">
                            <div className="secret_code_title">Введите код отслеживания</div>
                            <input type='text' value={secretCode} onChange={(e) => setSecretCode(e.target.value)} className='secret_code_input'/>
                            <input type='button' value='Подтвердить' onClick={clickHandler} className='secret_code_button'/>
                        </div>
                    </div>
            }

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        info: state.registerInfo
    }
}
export default connect(mapStateToProps)(Tracking);