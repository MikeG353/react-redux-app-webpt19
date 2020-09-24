import React from "react"
import { connect } from 'react-redux'

function SpellCard(props) {
    console.log(props.spell_data)
    return (
        <div className="spell-card">
            <p>{props.spell_data.name}, {props.spell_data.casting_time}</p>
            <p>{props.spell_data.desc}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        spell_data: state.spell_data
    }
}

export default connect(mapStateToProps, {})(SpellCard);