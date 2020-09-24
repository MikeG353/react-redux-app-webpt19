import React, { useEffect } from 'react';
import {connect } from 'react-redux'
import { fetchClassData } from './actions'

import ClassDropdown from './components/ClassDropdown'

import './App.css';
import SpellDropdown from './components/SpellDropdown';
import SpellCard from './components/SpellCard';

// function App(props) {
const App = (props) => {
  useEffect(() => {
    props.fetchClassData();
  }, [])
  return (
    <div className="App">
      <div className="header">
        <h1>Dungeons and Dragons 5e Spell Book</h1>
        {props.is_loading_class_data ? (
          <div><p>fetching classes</p></div>
        ) : props.error ? (
        <div style={{ color:'red'}}>{props.error}</div>
        ) : (
          <>
            <ClassDropdown />
            {props.spellbook.length > 0 ? (
              <>
                <SpellDropdown />
              </>
            ) : (
              <p>Please select a Class</p>
            )}    
          </>
        )}
      </div>
      <div className="body">
                  <SpellCard />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    class_list: state.class_list,
    spellbook : state.spellbook,
    spell_data: state.spell_data,
    is_loading_class_data: state.is_loading_class_data,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchClassData })(App);
