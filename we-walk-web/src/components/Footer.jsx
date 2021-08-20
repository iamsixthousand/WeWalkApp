import React from 'react';
import './cssfiles/Footer.css';
import PagesLinksFoot from './PagesLinksFoot';


class Footer extends React.PureComponent {
    render() {
        return (
            <div className='FooterContainer'>
                <div className='FooterBar'>
                    <div className='LogoFooter'>
                        We Walk
                    </div>
                    
                    <div className='LinksFooter'>
                    <PagesLinksFoot />
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Footer;