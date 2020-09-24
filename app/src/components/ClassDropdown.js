import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from 'react-redux'
import { fetchSpellData } from '../actions'

const ClassDropdown = (props) => {
    const options = []
    let selectedOption = ''
    // for loop to iterate over returned array and grab class
    for (var i = 0; i < props.class_list.length; i++) {
        options.push({text: props.class_list[i].name, value: props.class_list[i].name})
    }
    
    const onSelect = (e) => {
        selectedOption = e.value
        props.fetchSpellData(selectedOption.toLowerCase())     
    }

    return (

        <div>
            <Dropdown 
            options={options}
            value={selectedOption}
            onChange={onSelect}
            placeholder="Select a Class" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        class_list: state.class_list,
        spellbook: state.spellbook
    }
}
export default connect(mapStateToProps, { fetchSpellData })(ClassDropdown)