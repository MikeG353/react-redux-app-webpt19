import axios from 'axios'

export const FETCH_CLASS_DATA_START = 'FETCH_CLASS_DATA_START'
export const FETCH_CLASS_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_CLASS_DATA_FAIL = 'FETCH_DATA_FAIL'
export const FETCH_SPELL_DATA_START= 'FETCH_SPELL_DATA_START'
export const FETCH_SPELL_DATA_SUCCESS = 'FETCH_SPELL_DATA_SUCCESS'
export const FETCH_SPELL_DATA_FAIL = 'FETCH_SPELL_DATA_FAIL'

const baseUrl = "https://www.dnd5eapi.co/api"

export const fetchClassData = () => (dispatch) => {
    dispatch({ type: FETCH_CLASS_DATA_START })

    setTimeout(() => {
        axios
            .get(`${baseUrl}/classes/`)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: FETCH_CLASS_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err.message)
                dispatch({
                    type: FETCH_CLASS_DATA_FAIL,
                    payload: `error receiving spellbook data from api: ${err.message}`
                })
            })
    }, 1000)
}

export const fetchSpellData = (selectedClass) => (dispatch) => {
    dispatch({ type: FETCH_SPELL_DATA_START })
        console.log('spelldata called')
        setTimeout(() => {
        axios
            .get(`${baseUrl}/classes/${selectedClass}/spells`)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: FETCH_SPELL_DATA_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err.message)
                dispatch({
                    type: FETCH_SPELL_DATA_FAIL,
                    payload: `error receiving spellbook data from api: ${err.message}`
                })
            })
    }, 1000)
}