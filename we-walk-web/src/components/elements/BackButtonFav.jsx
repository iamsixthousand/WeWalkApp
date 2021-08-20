import React from 'react';
import '../cssfiles/PlacesList.css'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { notFavPageSelectedAC } from '../../redux/favouritesAC'
import PropTypes from 'prop-types'

class BackButtonFav extends React.Component {

    static propTypes = {
        page: PropTypes.bool.isRequired //for fav page

    };

    historyBack = () => {
        this.props.dispatch(notFavPageSelectedAC(false))
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='LinkBack' onClick={this.historyBack}>
                НАЗАД
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        page: state.favourites.isOnFavPage,
    };
};

export default withRouter(connect(mapStateToProps)(BackButtonFav));

