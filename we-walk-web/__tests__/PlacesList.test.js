import React from 'react'
import PlacesList from '../src/components/PlacesList';
import { create } from 'react-test-renderer'

describe('PlacesList component test', () => {
    test('renders filtertoolbar if its not favourites page', () => {

        const component = create(<PlacesList page={false} />)

        let filterDiv = component.root.find(el => el.id === 'filter')

        expect(filterDiv).toBeInTheDocument();

    });

    test('loading image should be in document', () => {
        const component = create(<PlacesList places={{
            data:
                [{
                    title: "Полыковичская криница",
                    description: "Святой источник рядом с городом Полыковичи с давних времен известен своими целебными свойствами. Еще в XVI столетии люди приходили сюда испить чистой родниковой воды в надежде на исцеление от болезней. В XIX веке граф Римский-Корсаков на свои средства возвел рядом каменную церковь в честь святой мученицы Параскевы. Над обустроенным источником построен шатер, увенчанный куполом и крестом.",
                    image: "https://i.ibb.co/djMH82b/polykovichskaya-krinitsa.jpg",
                    city: "mogilev",
                    destination: "religion"
                },
                {
                    title: "Скульптура «Звездочет",
                    description: "Площадь Звёзд Могилёва аналогична «аллеям славы», существующим в разных городах. Здесь увековечены имена выдающихся людей. Скульптурная композиция «Звездочёт» по смыслу очень подходит такому месту. Кроме того, телескоп и расставленные вокруг него 12 стульев по числу знаков зодиака – солнечные часы. Автор столь необычного проекта – белорусский скульптор В. Жбанов. Открытие состоялось в 2003 году.",
                    image: "https://i.ibb.co/ypzFBj5/zvezdochet.jpg",
                    city: "mogilev",
                    destination: "culture"
                },
                {
                    title: "Собор Трёх Святителей",
                    description: "Главный православный храм города строился на протяжении 11 лет и был освящён в 1914 году. Назван в честь Василия Великого, Иоанна Златоуста и Григория Богослова. Внутрь можно зайти с трёх сторон. После падения самодержавия храм работал с перерывами вплоть до 60-х годов. Помещение отдали под клуб, сняли кресты и купола, а также снесли колокольню. Верующим собор вернули 30 лет спустя.",
                    image: "https://i.ibb.co/g91jNqQ/sobor-trekh-svyatiteley.jpg",
                    city: "mogilev",
                    destination: "religion"
                }]
        }} filtered={{ filtered: ['none'] }} />)

        let componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();

        component.props.filtered = { filtered: ['religion'] }

        componentTree = component.toJSON();
        expect(componentTree).toMatchSnapshot();


    });



});