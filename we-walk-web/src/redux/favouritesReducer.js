import {
  FAVOURITE_ADDED, FAVOURITE_DELETED,
  FAV_PAGE_SELECTED, NOT_FAV_PAGE_SELECTED
} from './favouritesAC';


const initState = {

  favourites: [], //favourites
  isOnFavPage: false,

}

function favouritesReducer(state = initState, action) {
  switch (action.type) {

    case FAVOURITE_ADDED: {
      console.log('added fav')
      let favouriteS = []
      state.favourites.forEach((elem) => {
        if (elem !== action.favourites) {
          favouriteS.push(elem);
        }
      })
      favouriteS.push(action.favourites)
      let newState = {
        ...state,
        favourites: favouriteS,
      };
      console.log(newState.favourites)
      return newState;
    }

    case FAVOURITE_DELETED: {
      console.log('deleted fav')
      let favouriteS = [];
      state.favourites.forEach((elem) => {
        if (elem !== action.favourites) {
          favouriteS.push(elem);
        }
      })
      let newState = {
        ...state,
        favourites: favouriteS,
      };
      console.log(newState.favourites)
      return newState;
    }

    case FAV_PAGE_SELECTED: { ///////////////////////////////???
      console.log('fav page')
      let newState = {
        ...state,
        isOnFavPage: action.isOnFavPage
      };
      return newState;
    }

    case NOT_FAV_PAGE_SELECTED: { ///////////////////////////////???
      console.log('not fav page')
      let newState = {
        ...state,
        isOnFavPage: action.isOnFavPage
      };
      return newState;
    }

    default:
      return state;
  }
}

export default favouritesReducer;