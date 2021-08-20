const PLACES_LOADING = 'PLACES_LOADING';
const PLACES_ERROR = 'PLACES_ERROR';
const PLACES_SET = 'PLACES_SET';


const placesLoadingAC = function () {
  return {
    type: PLACES_LOADING,
  };
}

const placesErrorAC = function () {
  return {
    type: PLACES_ERROR,
  };
}

const placesSetAC = function (places) {
  return {
    type: PLACES_SET,
    places: places,
  };
}



export {
  placesLoadingAC, PLACES_LOADING,
  placesErrorAC, PLACES_ERROR,
  placesSetAC, PLACES_SET,
}
