import React, { useEffect } from 'react';
import {connect } from 'react-redux'
import { fetchClassData } from './actions'

import ClassDropdown from './components/ClassDropdown'

import './App.css';

// function App(props) {
const App = (props) => {
  useEffect(() => {
    props.fetchClassData();
  }, [])
  console.log("class_list",props.class_list, "spellbook", props.spellbook)
  return (
    <div className="App">
      <div className="header">
        <h1>Dungeons and Dragons 5e Spell Book</h1>
        {props.is_loading_class_data ? (
          <div><p>fetching classes</p></div>
        ) : props.error ? (
        <div style={{ color:'red'}}>{props.error}</div>
        ) : (
        <ClassDropdown />
        )}
      </div>
      <div>

      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    class_list: state.class_list,
    spellbook : state.spellbook,
    is_loading_data: state.is_loading_data,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchClassData })(App);
