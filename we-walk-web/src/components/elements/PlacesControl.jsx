import React from 'react';
import '../cssfiles/PlacesList.css'
import { connect } from 'react-redux';
import PlacesControlLinks from './PlacesControlLinks'
import FilterComp from './FilterComp'
import  PropTypes  from 'prop-types';


class PlacesControl extends React.PureComponent {

static propTypes = {
    page: PropTypes.bool.isRequired,
}


    render() {
        return (
            <>
                {!this.props.page && 
                <>
                <FilterComp/>
                <PlacesControlLinks/>
                </>}
            </>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        page: state.favourites.isOnFavPage,
    };
};

export default connect(mapStateToProps)(PlacesControl);