import axios from 'axios'

export const FETCH_CLASS_DATA_START = 'FETCH_CLASS_DATA_START'
export const FETCH_CLASS_DATA_SUCCESS = 'FETCH_CLASS_DATA_SUCCESS'
export const FETCH_CLASS_DATA_FAIL = 'FETCH_CLASS_DATA_FAIL'
export const FETCH_SPELLBOOK_DATA_START= 'FETCH_SPELLBOOK_DATA_START'
export const FETCH_SPELLBOOK_DATA_SUCCESS = 'FETCH_SPELLBOOK_DATA_SUCCESS'
export const FETCH_SPELLBOOK_DATA_FAIL = 'FETCH_SPELLBOOK_DATA_FAIL'
export const FETCH_SPELL_DATA_START = 'FETCH_SPELL_DATA_START'
export const FETCH_SPELL_DATA_SUCCESS = 'FETCH_SPELL_DATA_SUCCESS'
export const FETCH_SPELL_DATA_FAIL = 'FETCH_SPELL_DATA_FAIL'

const baseUrl = "https://www.dnd5eapi.co"

export const fetchClassData = () => (dispatch) => {
    dispatch({ type: FETCH_CLASS_DATA_START })

    setTimeout(() => {
        axios
            .get(`${baseUrl}/api/classes/`)
            .then((res) => {
                dispatch({
                    type: FETCH_CLASS_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_CLASS_DATA_FAIL,
                    payload: `error receiving spellbook data from api: ${err.message}`
                })
            })
    }, 1000)
}

export const fetchSpellListData = (selectedClass) => (dispatch) => {
    dispatch({ type: FETCH_SPELLBOOK_DATA_START })        
        axios
            .get(`${baseUrl}/api/classes/${selectedClass}/spells`)
            .then((res) => {
                dispatch({
                    type: FETCH_SPELLBOOK_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_SPELLBOOK_DATA_FAIL,
                    payload: `error receiving spellbook data from api: ${err.message}`
                })
            })
    
}

export const fetchSpellData = (selectedSpell) => (dispatch) => {
    dispatch({ type: FETCH_SPELL_DATA_START })
        setTimeout(() => {
        axios
            .get(`${baseUrl}${selectedSpell}`)
            .then((res) => {
                dispatch({
                    type: FETCH_SPELL_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_SPELL_DATA_FAIL,
                    payload: `error receiving spellbook data from api: ${err.message}`
                })
            })
    }, 1000)
}