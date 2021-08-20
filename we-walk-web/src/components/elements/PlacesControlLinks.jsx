import React from 'react';
import '../cssfiles/PlacesList.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { favPageSelectedAC } from '../../redux/favouritesAC'
import Tooltip from '@material-ui/core/Tooltip';


class PlacesControlLinks extends React.PureComponent {

    changePage = () => this.props.dispatch(favPageSelectedAC(true))

    render() {
        return (
            <>
                <Tooltip title="В избранное">
                <div className='LinkTo' onClick={this.changePage}>
                    <Link to='/places/favourites'>В избранное</Link>
                </div>
                </Tooltip>
                <Tooltip title="Выбрать город">
                <div className='LinkTo'>
                    <Link to='/cities'>Выбрать город</Link>
                </div>
                </Tooltip>
            </>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        favourites: state.favourites,
    };
};

export default connect(mapStateToProps)(PlacesControlLinks);



