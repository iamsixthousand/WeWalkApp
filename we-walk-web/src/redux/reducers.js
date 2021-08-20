import { combineReducers } from 'redux';

import placesReducer from "./placesReducer";
import favouritesReducer from "./favouritesReducer";
import filterReducer from './filterReducer';

let combinedReducer=combineReducers({
    places: placesReducer, // редьюсер placesReducer отвечает за раздел state под именем places
    favourites: favouritesReducer,
    filtered: filterReducer,
    // + другие редьюсеры
});

export default combinedReducer;