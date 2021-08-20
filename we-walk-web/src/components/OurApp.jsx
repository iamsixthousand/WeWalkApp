import React from 'react';
import './cssfiles/OurApp.css';
import './cssfiles/KeyFeatures.css';
import ourApplication1 from '../img/wewalkapp1.png'
import ourApplication2 from '../img/wewalkapp2.png'


class OurApp extends React.PureComponent {

    render() {

        const ourApp1 = <img src={ourApplication1} alt={'ourApp1'} style={{paddingTop: '0px', height: '100%'}}></img>
        const ourApp2 = <img src={ourApplication2} alt={'ourApp2'} style={{paddingTop: '0px', height: '100%'}}></img>

        return (
            <div style={{ paddingTop: '200px', width: '100%', display: 'flex'}} className='KFDIV2'>
                <div>
                {ourApp1}
                </div>
                <div>
                {ourApp2}
                </div>
            </div>
        )

    }
}
export default OurApp;