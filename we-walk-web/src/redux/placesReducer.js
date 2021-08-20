import { PLACES_LOADING, PLACES_ERROR, PLACES_SET } from './placesAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function placesReducer(state=initState,action) {
  switch (action.type) {

    case PLACES_LOADING: {
      console.log('load')
      let newState={
        status:1,
        places:null,
      };
      return newState;
    }

    case PLACES_ERROR: {
      console.log('error')
      let newState={
        status:2,
        places:null,
      };
      return newState;
    }

    case PLACES_SET: {
      console.log('set')
      let newState={
        status:3,
        data:action.places,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default placesReducer;