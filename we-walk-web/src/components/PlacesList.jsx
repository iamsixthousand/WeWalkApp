import React from 'react';
import PlaceElement from './elements/PlaceElement.jsx'
import PropTypes from 'prop-types';
import './cssfiles/PlacesList.css'

import FilterComp from './elements/FilterComp.jsx';
import PlacesControlLinks from './elements/PlacesControlLinks.jsx'
import { connect } from 'react-redux';
//import { placesThunkAC } from '../redux/fetchThunk.js'


class PlacesList extends React.PureComponent {


    static propTypes = {
        places: PropTypes.arrayOf(PropTypes.object).isRequired,
        filtered: PropTypes.object.isRequired,
        allplaces: PropTypes.arrayOf(PropTypes.object).isRequired,
        page: PropTypes.bool.isRequired
    };

    state = {
        data: this.props.places,
        page: 'PlacesListPage'
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.props.filtered.filtered)
    }
    // в пропсах получу массив данных о местах через AJAX
    // метод HIDE
    // метод FAVOURITE
    // метод FILTER
    // метод RENDER FAVOURITES
    hidePlace() {

    }

    favouritePlace() {

    }

    render() {
        let filterArrayS = this.props.filtered.filtered;
        let placesElements = [];
        //const ref = React.createRef();
        //let CityPlaces=[];
        //или === ?

        if (filterArrayS.indexOf('foodanddrink') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'foodanddrink'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('party') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'party'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('entertainment') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'entertainment'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('nature') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'nature'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement  realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('culture') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'culture'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('religion') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'religion'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('shopping') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'shopping'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('other') !== -1) {

            let cityPlaces = this.props.places.filter(place => place.destination === 'other'); //или === ?
            console.log(cityPlaces);
            placesElements.push(cityPlaces.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
            )
        }

        if (filterArrayS.indexOf('none') !== -1) {

            placesElements = this.props.places.map(place => {
                return (
                    <PlaceElement realpage={this.props.page} page={this.state.page} place={place} key={place.image + 'key'} />
                )
            })
        }

        return (
            <>
            {!this.props.page && <div className="PlacesBox">
                <div className='PlacesControlPanel'>
                    <div className='PlacesControlPanelCenter'>
                        <FilterComp disableButton={this.props.filtered.filtered.indexOf('none') ? false : true} />
                        <PlacesControlLinks />
                    </div>
                </div>
                <div className='PlacesElemContainer'>
                    {placesElements}
                </div>
            </div >}
            </>
        )
    }
}
const mapStateToProps = function (state) {
    return {
        filtered: state.filtered,
        page: state.favourites.isOnFavPage,
        
        
    };
};

export default connect(mapStateToProps)(PlacesList); //withRouter