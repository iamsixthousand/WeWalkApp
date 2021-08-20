import React from 'react';
import PlacesList from './PlacesList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placesThunkAC } from '../redux/fetchThunk.js'
import './cssfiles/PlacesList.css'
import loadingImg from '../img/loadingdata.gif'

class PlacesPage extends React.PureComponent {


    static propTypes = {
        places: PropTypes.object.isRequired,
        page: PropTypes.bool.isRequired //for fav page

    };

    state = {
        places: null,
    }

    componentDidMount() {
        this.setState({...this.state,
            places: this.props.places
        })
        this.props.dispatch(placesThunkAC(this.props.dispatch));
        console.log('mounted')

    }
    compo
    /*componentDidUpdate() {
        window.addEventListener('popstate', (event) => {
            if (event.state) {
              //do your code here
            }
           }, false);
        window.history.pushState({ name: "browserBack" }, "on browser back click", window.location.href);
        window.history.pushState({ name: "browserBack" }, "on browser back click", window.location.href);
    }*/

    render() {

        const city = this.props.match.params.city;



        if (this.props.places.status <= 1)
            return (
                <div className="PlacesBox">
                    <div>
                        <img className='loadingImg' src={loadingImg} alt='data-loading-img' />
                    </div>
                </div>
            );

        if (this.props.places.status === 2)
            return (
                <div className="PlacesBox">
                    <div>
                        Ошибка загрузки данных!
                    </div>
                </div>
            );
        else {

            let cityPlaces = this.props.places.data.filter(place => place.city === city); //или === ?
            console.log(cityPlaces);
            return (
                <>
                    {this.props.page === false &&
                        <div>
                            <PlacesList allplaces={this.props.places.data} places={cityPlaces} />
                        </div>}
                </>
            )
        }

    }

}

const mapStateToProps = function (state) {
    return {
        places: state.places,
        page: state.favourites.isOnFavPage
    };
};

//window.onbeforeunload = (e) => alert('Данные будут утеряны!')

export default connect(mapStateToProps)(PlacesPage);