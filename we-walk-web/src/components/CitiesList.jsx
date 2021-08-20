import React from 'react';
import CityElement from './elements/CityElement.jsx'
import { Link } from 'react-router-dom'
import './cssfiles/CityElement.css'
import './cssfiles/CitiesList.css'
import minskimg from '../cityimages/minsk.jpg'
import brestimg from '../cityimages/brest.jpg'
import gomelimg from '../cityimages/gomel.jpg'
import mogilevimg from '../cityimages/mogilev.jpg'
import grodnoimg from '../cityimages/grodno.jpg'
import vitebskimg from '../cityimages/vitebsk.jpg'
import { connect } from 'react-redux';
//import { filterSetAC, filterResetAC, filterDeleteAC } from '../redux/filterAC'

class CitiesList extends React.PureComponent {


    render() {

        const cityElements = [
            { cityname: 'МИНСК', image: minskimg, url: 'minsk' },
            { cityname: 'БРЕСТ', image: brestimg, url: 'brest' },
            { cityname: 'ГОМЕЛЬ', image: gomelimg, url: 'gomel' },
            { cityname: 'МОГИЛЕВ', image: mogilevimg, url: 'mogilev' },
            { cityname: 'ГРОДНО', image: grodnoimg, url: 'grodno' },
            { cityname: 'ВИТЕБСК', image: vitebskimg, url: 'vitebsk' }].map((item) => {
                return (
                    <Link  className='CityElementLink' to={'/places/'+item.url} key={item.cityname+'key'}>
                        <CityElement image={item.image} cityname={item.cityname} key={item.cityname} link={item.url} />
                    </Link>
                )
            });
        return (
            < >
                {/*<div className='CitiesList'>
                    <Link className='CityElementLink' to='/cities/1'><CityElement className='CityElement'></CityElement></Link>
                    <Link className='CityElementLink' to='/cities/2'><CityElement className='CityElement'></CityElement></Link>
                    <Link className='CityElementLink' to='/cities/3'><CityElement className='CityElement'></CityElement></Link>
                    <Link className='CityElementLink' to='/cities/4'><CityElement className='CityElement'></CityElement></Link>
                    <Link className='CityElementLink' to='/cities/5'><CityElement className='CityElement'></CityElement></Link>
                    <Link className='CityElementLink' to='/cities/6'><CityElement className='CityElement'></CityElement></Link>
        </div>*/}
                <div className="BeforeCitiesListText">ВЫБЕРИТЕ ГОРОД</div>
                <div className='CitiesList'>

                    {cityElements}
                </div>
            </>
        )
    }
}
const mapStateToProps = function (state) {
    return {
        filtered: state.filtered,
    };
};

export default connect(mapStateToProps)(CitiesList);