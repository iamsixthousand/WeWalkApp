import React from 'react';
import './cssfiles/KeyFeatures.css';
import keyfeaturesImg1 from '../img/keyfeatures1.png'
import keyfeaturesImg2 from '../img/keyfeatures2.png'

class KeyFeatures extends React.PureComponent {



    render() {

        const keyfeaturesImage1 = <img src={keyfeaturesImg1} alt={'keyfeaturesImg1'} style={{paddingTop: '0px', height: '90%'}}></img>
        const keyfeaturesImage2 = <img src={keyfeaturesImg2} alt={'keyfeaturesImg2'} style={{paddingTop: '0px', height: '100%'}}></img>

        return (
            <div style={{ paddingTop: '100px', width: '100%', display: 'flex'}} className='KFDIV'>
                <div>
                {keyfeaturesImage1}
                </div>
                <div>
                {keyfeaturesImage2}
                </div>
            </div>
        )

    }
}
export default KeyFeatures;