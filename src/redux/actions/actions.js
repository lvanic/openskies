export function setCountry(country){
    return{
        type: "SET_COUNTRY",
        payload: country
    }
}
export function setRegisterInfo(data){
    return{
        type:"SET_REGISTER_INFO",
        payload:{
            secretCode: data.secretCode,
            information: data.information,
            direction: data.direction
        }
    }
}
export function setRegister(isRegister){
  return{
      type: "SET_REGISTER",
      payload: isRegister
  }
}