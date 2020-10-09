import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { connect } from 'react-redux'
import { fetchSpellData } from '../actions'

const SpellDropdown = (props) => {
    const options = []
    let selectedOption = ''
    // for loop to iterate over returned array and grab class
    for (var i = 0; i < props.spellbook.length; i++) {
        options.push({label: props.spellbook[i].name, value: props.spellbook[i].url})
    }
    
    const onSelect = (e) => {
        selectedOption = e.value
        props.fetchSpellData(selectedOption)     
    }

    return (

        <div>
            <Dropdown 
            options={options}
            value={selectedOption}
            onChange={onSelect}
            placeholder="Select a Spell" />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        class_list: state.class_list,
        spellbook: state.spellbook
    }
}
export default connect(mapStateToProps, { fetchSpellData })(SpellDropdown)