import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../cssfiles/PlaceElement.css'
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { favouriteSetAC, favouriteDeleteAC } from '../../redux/favouritesAC'


const theme = createTheme({
    palette: {
        secondary: {
            main: '#000000'
        },
        primary: {
            main: '#97CBD1'
        }
    },
    typography: {
        // Use the system font instead of the default Roboto font.
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    elements: {
        width: '80%',
        margin: '10px 10% 0 10%',

    },
    accord: {
        alignItems: 'center',
    }
}));



function PlaceElement(props) {
    const classes = useStyles();
    //const newPlaceHandlerRef = React.createRef();

    const [isFavourited, setFavourite] = useState(false);




    //const [favS, editFavs] = useState([]);

    function hidePlace(EO) {
        
        //const placeHandler = newPlaceHandlerRef.current;
        //placeHandler.classList.toggle('elemDeleted')
        props.dispatch(favouriteDeleteAC(props.place.image))
        setFavourite(false);
        console.log(props.place.image)
        EO.stopPropagation();
    }

    function favouritePlace(EO) {
        
        props.dispatch(favouriteSetAC(props.place.image))
        setFavourite(true);
        console.log(props.place.image)
        EO.stopPropagation();
    }




    return (
        <div /*ref={newPlaceHandlerRef}*/ className='PlaceHandler'>
            <div className={classes.elements}>
                <ThemeProvider theme={theme}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{props.place.title}</Typography>
                            <div className='Icons'>
                                {props.page === 'PlacesListPage' && <Tooltip title={!isFavourited ? "Добавить в избранное" : 'Убрать из избранного'}>
                                    <FavoriteIcon data-imgcode={props.place.image} onClick={isFavourited ? hidePlace : favouritePlace}
                                        className={isFavourited ? 'Favourited' : 'FavouriteIcon'} />
                                </Tooltip>}
                                {props.page === 'FavouritesPage' && <div className='HideIconContainer'>
                                    <Tooltip title="Убрать из избранного">
                                        <CloseIcon data-imgcode={props.place.image} onClick={hidePlace} className='HideIcon' />
                                    </Tooltip>
                                </div>}
                            </div>
                        </AccordionSummary>
                        <AccordionDetails style={{ borderColor: '#97CBD1' }}>
                            <img className='PlaceImg' src={props.place.image} alt={props.place.title} />
                            <div className='PlaceDescription'>
                                {props.place.description}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </ThemeProvider>
            </div>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        favourites: state.favourites,
    };
};

export default connect(mapStateToProps)(PlaceElement);