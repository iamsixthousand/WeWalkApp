import React from 'react';

class CityElement extends React.PureComponent {

    render(){
        return (
        <div className='CityElement' style={{ backgroundImage: `url(${this.props.image})` }}>
           <div className='CityName'>{this.props.cityname}</div>
        </div>
        )
    }
}
export default CityElement;