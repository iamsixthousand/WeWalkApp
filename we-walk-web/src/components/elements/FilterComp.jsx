import React from 'react';
import '../cssfiles/PlacesList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterSetAC, filterResetAC, filterDeleteAC } from '../../redux/filterAC'

class FilterComp extends React.PureComponent {



    static propTypes = { // передано из родительского компонента
        filtered: PropTypes.object.isRequired,// передано из Redux
        disableButton: PropTypes.bool.isRequired,
    };

    state = {
        checked: [],
    }


    checkedTest = (ch = this.props.filtered.filtered) => { //????????????????????????????????????????????????

        let inputs = document.getElementsByTagName('input')
        for (let i in inputs) {
            if (inputs[i].type === 'checkbox') {
                console.log(inputs[i])
                console.log(inputs[i].checked)
                console.log(ch)
                console.log(ch.includes(inputs[i].dataset.destination))
                if (ch.includes(inputs[i].dataset.destination)) {
                    inputs[i].checked = true;
                    console.log(inputs[i].checked);
                }
                else inputs[i].checked = false
            }
        }

    };
    componentDidMount = () => this.checkedTest();


    addFilter = (filter) => {
        this.props.dispatch(filterSetAC(filter)) //добавление фильтра по чекбоксу
    }

    deleteFilter = (filter) => {
        this.props.dispatch(filterDeleteAC(filter)) ///функция удаления фильтра по чекбоксу                   
    }

    setNoFilter = (EO) => {
        this.props.dispatch(filterResetAC(EO.target.dataset.destination)) //кнопка сброса
        let inputs = document.getElementsByTagName('input')
        for (let i in inputs)
            if (inputs[i].type === "checkbox") inputs[i].checked = false;
    }

    addOrDelete = (EO) => { //выбираем удалить фильтр из массива или добавить в зависимости от состояния чекбокса
        if (EO.target.checked === false) {
            this.deleteFilter(EO.target.dataset.destination);
        }
        else {
            this.addFilter(EO.target.dataset.destination);
            console.log(this.state.checked)
        }
    }

    render() {
        return (
            <div className='Filter'>
                <label className="FilterTitle">Фильтр:
                    <input type="button" value='сброс' data-destination='none' disabled={this.props.disableButton} onClick={this.setNoFilter} />
                </label>
                <div className='FilterRadio'>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='foodanddrink' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Еда и напитки</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='culture' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Культура</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='nature' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Парки и природа</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='party' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Ночные клубы и бары</label>
                    </div>
                </div>
                <div className='FilterRadio2'>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='entertainment' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Развлечения</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='religion' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Религия</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='shopping' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Шоппинг</label>
                    </div>
                    <div className='RadioContainer'>
                        <input type="checkbox" data-destination='other' onChange={this.addOrDelete} className='FilterCheckbox' />
                        <label>Другое</label>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        filtered: state.filtered,
    };
};

export default connect(mapStateToProps)(FilterComp);