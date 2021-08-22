const FAVOURITE_ADDED = 'FAVOURITE_ADDED';
const FAVOURITE_DELETED = 'FAVOURITE_DELETED';
const FAV_PAGE_SELECTED = 'FAV_PAGE_SELECTED';
const NOT_FAV_PAGE_SELECTED = 'NOT_FAV_PAGE_SELECTED';

const favouriteSetAC = function (favourites) { //++
    return {
        type: FAVOURITE_ADDED,
        favourites: favourites,
    };
}

const favouriteDeleteAC = function (favourites) { //--
    return {
        type: FAVOURITE_DELETED,
        favourites: favourites,
    };
}

const favPageSelectedAC = function (isOnFavPage) { //
    return {
        type: FAV_PAGE_SELECTED,
        isOnFavPage: isOnFavPage,
    };
}

const notFavPageSelectedAC = function (isOnFavPage) { //
    return {
        type: NOT_FAV_PAGE_SELECTED,
        isOnFavPage: isOnFavPage,
    };
}

export {
    favouriteSetAC, FAVOURITE_ADDED,
    favouriteDeleteAC, FAVOURITE_DELETED,
    favPageSelectedAC, FAV_PAGE_SELECTED,
    notFavPageSelectedAC, NOT_FAV_PAGE_SELECTED
}