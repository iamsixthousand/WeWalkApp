const NO_FILTER = 'NO_FILTER';
const FILTER_ADDED = 'FILTER_ADDED'
const FILTER_DELETED ='FILTER_DELETED';


const filterSetAC = function (filtered) {
    return {
        type: FILTER_ADDED,
        filtered: filtered,
    };
}

const filterDeleteAC = function (filtered) {
    return {
        type: FILTER_DELETED,
        filtered: filtered,
    };
}

const filterResetAC = function (filtered) {
    return {
        type: NO_FILTER,
        filtered: filtered,
    };
}



export {
    filterResetAC, filterSetAC, filterDeleteAC, 
    NO_FILTER, FILTER_ADDED, FILTER_DELETED
}

