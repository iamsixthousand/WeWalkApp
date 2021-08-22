import React from 'react'
import Favourites from '../src/components/Favourites.jsx';
import {create} from 'react-test-renderer'

describe('Favourites component test', () => {
    test('if component has no fetch data', () => {

        const component = create(<Favourites status={2} />)
        
        let errDiv = component.root.find(el => el.id==='errorDiv')

        expect(errDiv.innerText).toBe('Ошибка загрузки данных!')
        
    });

    test('loading image should be in document', () => {
        const component = create(<Favourites status={1} />)

        let loadingImage = component.root.find(el => el.id==='loadingImg')

        expect(loadingImage).toBeInTheDocument()
    });

    test('data loaded, view div in document?', () => {
        const component = create(<Favourites status={3} />)

        let renderDiv = component.root.find(el => el.id==='renderDiv')

        expect(renderDiv).toBeInTheDocument()
    });
    
    
});

