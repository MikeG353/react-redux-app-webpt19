import {
    FETCH_CLASS_DATA_START,
    FETCH_CLASS_DATA_SUCCESS,
    FETCH_CLASS_DATA_FAIL,
    FETCH_SPELLBOOK_DATA_START,
    FETCH_SPELLBOOK_DATA_SUCCESS,
    FETCH_SPELL_DATA_START,
    FETCH_SPELL_DATA_SUCCESS,
} from '../actions'

const initialState = {
    class_list: [],
    spellbook: [],
    spell_data: [],
    is_loading_class_data : false,
    is_loading_spellbook_data: false,
    is_loading_spell_data: false,
    error: ""    
}

export const spellbookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLASS_DATA_START:
            return {
                ...state,
                is_loading_class_data: true
            }
        case FETCH_SPELLBOOK_DATA_START:
            return {
                ...state,
                is_loading_spellbook_data: true
            }
        case FETCH_SPELL_DATA_START:
            return {
                ...state,
                is_loading_spell_data: true
            }
        case FETCH_CLASS_DATA_SUCCESS:
            return {
                ...state,
                is_loading_class_data: false,
                class_list: action.payload.results,
                error: ''
            }
        case FETCH_CLASS_DATA_FAIL:
            return {
                ...state,
                is_loading_class_data: false,
                error: action.payload
            }
        case FETCH_SPELLBOOK_DATA_SUCCESS:
            return {
                ...state,
                spellbook: action.payload.results,
                is_loading_spellbook_data: false,
                error: ''
            }
        case FETCH_SPELL_DATA_SUCCESS:
            return {
                ...state,
                spell_data: action.payload,
                is_loading_spell_data: false,
                error: ''
            }
        default:
            return state
    }
}