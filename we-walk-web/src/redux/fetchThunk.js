import isoFetch from 'isomorphic-fetch';

import { placesLoadingAC, placesErrorAC, placesSetAC } from "./placesAC";


function placesThunkAC(dispatch) {
    // Как и любой action creator, placesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.



    return function () {

        const fetchTarget = 'http://localhost:8000/places'; //url запроса

        dispatch(placesLoadingAC());
        isoFetch(fetchTarget, { method: 'GET'})
            .then((response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then((data) => {
                console.log(data)
                dispatch(placesSetAC(data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(placesErrorAC());
            });
    }

}

export { placesThunkAC };

////////////////////////////////////////////////////////////////////////////////////

