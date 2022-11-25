import { countries } from "../../data";
const initialState = {
    activeCountry: countries[0],
    countries: [...countries],
    isRegister: false,
    tickets: [{
        from: '',
        date: null,
        rest: 10
    }],
    registerInfo: [
        {
            id:0,
            secretCode:'0',
            information:[],
            direction:{}
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "SET_COUNTRY":
            return { ...state, activeCountry: action.payload };
        case "SET_REGISTER":
            return { ...state, isRegister: action.payload };
        case "SET_REGISTER_INFO":
            return { ...state, registerInfo: [...state.registerInfo, {...action.payload, id:state.registerInfo.length}] };
        default:
            return state;
    }
}