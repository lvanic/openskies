import { useState } from "react"
import { setRegister, setRegisterInfo } from "../redux/actions/actions";
import { connect } from "react-redux";
import '../css/Register.css'
import { useEffect } from "react";


function Registration(props) {

  const initalState = [
    { id: 0, surname: '', name: '', bDay: '', citizen: '', numbD: '', validityP: '', codeC: '', tel: '', mail: '' }
  ];

  const [information, setInformation] = useState(initalState);
  const [direction, setDirection] = useState(
    {
      from: props.countries[0].name,
      to: props.countries[props.countries.length - 1].name,
      timeFrom: new Date().toISOString().substring(0, 10),
      timeTo: new Date().toISOString().substring(0, 10)
    }
  );
  const [isButtonBlock, setButtonBlock] = useState(true);
  const [activeCountryTo, setActiveCountryTo] = useState(props.countries[props.countries.length - 1]);
  const [activeCountryFrom, setActiveCountryFrom] = useState(props.countries[0]);
  const [countriesFrom, setCountrysFrom] = useState([]);
  const [countriesTo, setCountrysTo] = useState([]);
  const [prevCountry, setPrevCountry] = useState([{}, {}]);
  const [secretCode, setSecretCode] = useState('');

  const directionHandler = (e) => {
    const buf = countriesFrom
    setCountrysFrom(countriesTo);
    setActiveCountryTo(buf);
    const bufCountry = activeCountryFrom;
    setActiveCountryFrom(activeCountryTo);
    setActiveCountryTo(bufCountry);
  }
  const activeToHandler = (e) => {
    setActiveCountryTo(countriesTo.find((element) => element.name === e.target.value))
  }
  const activeFromHandler = (e) => {
    setActiveCountryFrom(countriesFrom.find((element) => element.name == e.target.value))
  }
  useEffect(() => {
    setCountrysFrom(props.countries);
    const r = [...props.countries];
    setCountrysTo(r.reverse());

    if (activeCountryFrom.name == activeCountryTo.name) {
      setActiveCountryTo(prevCountry[0]);
    }
    if (activeCountryFrom.name == activeCountryTo.name) {
      setActiveCountryFrom(prevCountry[1]);
    }
    setPrevCountry([activeCountryFrom, activeCountryTo]);
  }, [activeCountryFrom, activeCountryTo])

  useEffect(() => {
    if (Object.values(information)
      .some(element => Object.values(element)
        .some(el => el == '' && !Number.isInteger(el)))) {
      if (!isButtonBlock) {
        setButtonBlock(true);
      }
    }
    else {
      setButtonBlock(false)
    }
  }, [information, direction]);

  function submitRegister() {
    var data = {
      direction: direction,
      information: information,
      secretCode: Math.round(Math.random() * 10000)
    }
    setSecretCode(data.secretCode);
    props.setRegisterInfo(data);
    props.setRegister(true);
  }
  return (
    !props.isRegister ?
      <div className="block_hidden_order">
        <section className="register">
          <div className="wrapper">
            <h1 className="title_online">Онлайн-регистрация</h1>
          </div>
        </section>
        <main className="forms">
          <div className="wrapper">
            <h1 className="title">Пассажиры</h1>
            <p className="description">
              Имя и фамилия должны совпадать с указанными в паспорте.
            </p>
            <div className="form">

              <div className="inputs">
                {information.map((element, index) => (
                  <div>
                    <h1 className="title_form">{index + 1} пассажир</h1>
                    <input type="text" placeholder="Фамилия" value={element.surname} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, surname: e.target.value }
                        :
                        item))} />
                    <input type="text" placeholder="Имя" value={element.name} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, name: e.target.value }
                        :
                        item)
                    )} />
                    <input type="text" placeholder="Дата рождения" value={element.bDay} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, bDay: e.target.value }
                        :
                        item)
                    )} />
                    <input type="text" placeholder="Гражданство" value={element.citizen} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, citizen: e.target.value }
                        :
                        item)
                    )} />
                    <input type="text" placeholder="Номер документа" value={element.numbD} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, numbD: e.target.value }
                        :
                        item)
                    )} />
                    <input type="text" placeholder="Срок действия" value={element.validityP} onChange={(e) => setInformation(
                      information.map(item => item.id === element.id
                        ? { ...item, validityP: e.target.value }
                        :
                        item)
                    )} />

                    <h1 className="title_form two">Контактная информация</h1>
                    <div className="inputs" style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'nowrap',
                      alignContent: 'center',
                      alignItems: 'flex-start'
                    }}>
                      <input type="text" placeholder="Код страны" value={element.codeC} onChange={(e) => setInformation(
                        information.map(item => item.id === element.id
                          ? { ...item, codeC: e.target.value }
                          :
                          item)
                      )} />
                      <input type="text" placeholder="Номер телефона" value={element.tel} onChange={(e) => setInformation(
                        information.map(item => item.id === element.id
                          ? { ...item, tel: e.target.value }
                          :
                          item)
                      )} />
                      <input type="text" placeholder="Email" value={element.mail} onChange={(e) => setInformation(
                        information.map(item => item.id === element.id
                          ? { ...item, mail: e.target.value }
                          :
                          item)
                      )} />
                    </div>
                  </div>

                ))}

              </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div onClick={() => {
                if (information.length == 9) {
                  alert('На выбранную дату кончились билеты')
                } else {
                  const element = information.slice(-1)[0];
                  setInformation([...information, { id: element.id + 1, surname: '', name: '', bDay: '', citizen: '', numbD: '', validityP: '', codeC: '', tel: '', mail: '' }])
                }

              }}
                style={{ display: 'flex', justifyContent: 'space-around', fontSize: '35px', color: '#24ff00' }}>
                +
              </div>
              <div onClick={() => {
                const buf = information;
                if (buf.length > 1 && buf.length < 10) {
                  buf.pop();
                }
                setInformation([...buf])
              }}
                style={{ display: 'flex', justifyContent: 'space-around', fontSize: '35px', color: 'red' }}>
                -
              </div>
            </div>
            <h1 className="title">Выбор рейса</h1>
            <div className="blocks">
              <div className="block">
                <select onChange={activeFromHandler}>
                  {countriesFrom.map((element, i) => (
                    element.name == activeCountryFrom.name ? <option value={element.name} selected>{element.name}</option> : <option value={element.name}>{element.name}</option>
                  ))}
                </select>
                <div className="arrow" onClick={directionHandler}>
                  <p>⇄</p>
                </div>
                <select onChange={activeToHandler}>
                  {countriesTo.map((element, i) => (
                    element.name == activeCountryTo.name ? <option value={element.name} selected>{element.name}</option> : <option value={element.name}>{element.name}</option>
                  ))}
                </select>
              </div>
              <div className="block">
                Время вылета туда
                <select>
                  {activeCountryFrom.scheduleFrom.map(el => (
                    <option>{el}</option>
                  ))}
                </select>
                <input type='date' onChange={(e) => { setDirection({ ...direction, timeFrom: e.target.value }) }} defaultValue={new Date().toISOString().substring(0, 10)} />
                Время прилета обратно
                <select >
                  {activeCountryTo.scheduleFrom.map(el => (
                    <option>{el}</option>
                  ))}
                </select>
                <input type='date' onChange={(e) => { setDirection({ ...direction, timeTo: e.target.value }) }} defaultValue={new Date().toISOString().substring(0, 10)} />
              </div>
            </div>
          </div>
        </main>
        <div className="btn_wrapper">
          <button className="btn" disabled={isButtonBlock} style={isButtonBlock ? { background: "gray" } : null} id="show_order" onClick={submitRegister}>Продолжить</button>
        </div>
      </div>
      :
      <div className="register">
        <div className="wrapper">
          <p className="title_online">
            {
              secretCode == '' ?
                'Оформление заказа прошло успешно. Для дальнейшей оплаты проверьте ваш email.'
                :
                `Оформление заказа прошло успешно. Для дальнейшей оплаты проверьте ваш email. Ваш секретный код для трека - ${secretCode}, пожалуйста запомните его`
            }


          </p>
          <input type='button' value='Еще один полет' className="new_order" onClick={() => {
            props.setRegister(false)
            setInformation(initalState)
          }} />
        </div>
      </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isRegister: state.isRegister,
    countries: state.countries,
    tickets: state.tickets
  }
}
const mapDispatchToProps = {
  setRegister,
  setRegisterInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)