import React from 'react';
import './cssfiles/ForPages.css';
import './cssfiles/MainPage.css';
import storkWithRoadRight from '../img/storkWithRoadRight.png'
import {Link} from 'react-router-dom'

class MainPage extends React.PureComponent {


    render() {

        const storkImg1 = <img src={storkWithRoadRight} alt={'storkWithRoadRight'} className='ImageStrokeTop'></img>
        const goButton1 = <Link to='/cities'><button className='GoButton'>Пойти гулять</button></Link> //ВОПРОСЫ /ОТДЕЛЬНЫЙ КОМПОНЕНТ
        
        return (
            <div className='PageContainer'>
                <div className='MainPageNet'>
                    <div className="Phrase">Гуляй по новым местам вместе с нами</div>
                    <div className="ImageStrokeTop">{storkImg1}</div>
                    {goButton1}
                </div>
            </div>
        )
    }
}
export default MainPage;