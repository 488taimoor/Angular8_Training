import {Heroes_Actions} from './heroes.actions'
import {Heroes_Status} from './heroes.actions'
  const initialState = { 
    heroes_add_status: Heroes_Status.Heros_Add.NEW,
    heroes:{name:'taimoor',email:'488taimoor@gmail.com'}
  };
  

//reducer for update estore
export function Heroes_Reducer (state = initialState, action) {
   console.log(action.type);
    switch(action.type) {

      case Heroes_Actions.Heros_Add.NEW:
        console.log("I am from Reduce New..");
        return { ...state, heroes_add_status:Heroes_Status.Heros_Add.NEW}; 
        case Heroes_Actions.Heros_Add.POST:
        console.log("I am from Reduce Post..");
        return { ...state, heroes_add_status:Heroes_Status.Heros_Add.POST}; 
        case Heroes_Actions.Heros_Add.SUCCESS:
        console.log("I am from Reduce success..");
        return { ...state, heroes_add_status:Heroes_Status.Heros_Add.SUCCESS}; 
        case Heroes_Actions.Heros_Add.FAILURE:
        console.log("I am from Reduce failure..");
        return { ...state, heroes_add_status:Heroes_Status.Heros_Add.FAILURE}; 
        case Heroes_Actions.Heros_Add.NETWORK_FAILURE:
        console.log("I am from Reduce NETWORK_FAILURE..");
        return { ...state, heroes_add_status:Heroes_Status.Heros_Add.NETWORK_FAILURE};
      
      default:
        return {...state}
    }
  };

//   export default Heroes_Reducer;
