import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './cssfiles/PlacesList.css'
import loadingImg from '../img/loadingdata.gif'
import PlaceElement from './elements/PlaceElement.jsx'
import { placesThunkAC } from '../redux/fetchThunk.js'
import BackButtonFav from './elements/BackButtonFav.jsx';

class Favourites extends React.PureComponent {

    static propTypes = {

        favourites: PropTypes.object.isRequired,
        places: PropTypes.object.isRequired
    }

    state = {
        page: 'FavouritesPage'
    }

    componentDidMount() {
        this.props.dispatch(placesThunkAC(this.props.dispatch));
        console.log('mounted')

    }

    render() {
        console.log(this.props.favourites)

        if (this.props.places.status <= 1)
            return (
                <div className="PlacesBox">
                    <div>
                        <img id='loadingImg' className='loadingImg' src={loadingImg} alt='data-loading-img' />
                    </div>
                </div>
            );

        if (this.props.places.status === 2)
            return (
                <div id='errorDiv' className="PlacesBox">
                    <div>
                        Ошибка загрузки данных!
                    </div>
                </div>
            );
        else { //status 3
            if (!this.props.favourites.favourites)
                return (
                    <div className="PlacesBox">
                        <div>
                            В избранном ничего нет!
                        </div>
                    </div>
                )
            else {
                let placesElements = this.props.places.data; //места 
                let favElementS = this.props.favourites.favourites; //фавоуриты
                let exportFavElementS = placesElements.reduce((acc, elem) => {
                    if (favElementS.includes(elem.image))
                        acc.push(elem)
                    return acc
                }, []);
                console.log(exportFavElementS);
                let renderFavouriteS = exportFavElementS.map(place => {
                    return (
                        <PlaceElement page={this.state.page} place={place} key={place.image + 'key'} />
                    )
                })
                return (
                    <>
                        <div id='renderDiv' className="PlacesBox">
                            <div className='PlacesControlPanelCenter'>
                                <BackButtonFav />
                            </div>
                            <div className='PlacesElemContainer2'>
                                {renderFavouriteS.length === 0 &&
                                    <div style={{
                                        display: 'flex',
                                        allignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '2px'
                                    }}>
                                        <label style={{fontSize: '40px'}}>cписок пуст..</label>
                                    </div>}
                                    
                                {renderFavouriteS}
                            </div>
                        </div>

                    </>
                )
            }
        }
    }

};

const mapStateToProps = function (state) {
    return {
        favourites: state.favourites,
        places: state.places
    };
};

export default connect(mapStateToProps)(Favourites);

