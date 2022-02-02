import {
    FETCH_PROFILE,
    UPDATE_LAST_NAME,
    UPDATE_FIRST_NAME,
    ADD_HOBBY,
    UPDATE_HOBBIES,
    ADD_SKILL,
    UPDATE_SKILLS,
    UPDATE_IDENTITY
} from "../types";


export const fetchProfile = (data) => (dispatch) => {
    dispatch({ type: FETCH_PROFILE, payload: data })
}

export const updateFirstName = (firstName) => (dispatch) => {
    dispatch({ type: UPDATE_FIRST_NAME, payload: firstName })
}
export const updateLastName = (lastName) => (dispatch) => {
    dispatch({ type: UPDATE_LAST_NAME, payload: lastName })
}

export const addHobby = (hobby) => (dispatch) => {
    dispatch({ type: ADD_HOBBY, payload: hobby })
}

export const updateHobbies = (hobbies) => (dispatch) => {
    //this will replace the array of hobbies with a new array 
    dispatch({ type: UPDATE_HOBBIES, payload: hobbies })
}

export const addSkill = (skill) => (dispatch) => {
    dispatch({ type: ADD_SKILL, payload: skill })
}

export const updateSkills = (skills) => (dispatch) => {
    //this will replace the array of skills with a new array 
    dispatch({ type: UPDATE_SKILLS, payload: skills })
}
export const updateIdentity = (identity) => (dispatch) => {
    dispatch({ type: UPDATE_IDENTITY, payload: identity })
}
