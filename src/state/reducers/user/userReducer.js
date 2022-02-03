import {
    FETCH_PROFILE,
    UPDATE_LAST_NAME,
    UPDATE_FIRST_NAME,
    ADD_HOBBY,
    UPDATE_HOBBIES,
    ADD_SKILL,
    UPDATE_SKILLS,
    UPDATE_IDENTITY
} from "../../actions/user/types";

let initialState = null;

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROFILE: {
            console.log("Fetching", action.payload)
            return { ...state, ...action.payload }
        }
        case UPDATE_FIRST_NAME: {
            return { ...state, user: { ...state.user, "first_name": action.payload } }
        }
        case UPDATE_LAST_NAME: {
            return { ...state, user: { ...state.user, "last_name": action.payload } }
        }
        case ADD_HOBBY: {
            return { ...state, user: { ...state.user, "hobbies": [...state.user.hobbies, action.payload] } }
        }
        case UPDATE_HOBBIES: {
            return { ...state, user: { ...state.user, "hobbies": action.payload } }
        }
        case ADD_SKILL: {
            return { ...state, user: { ...state.user, "skills": [...state.user.skills, action.payload] } }
        }
        case UPDATE_SKILLS: {
            return { ...state, user: { ...state.user, "skills": action.payload } }
        }
        case UPDATE_IDENTITY: {
            return { ...state, user: { ...state.user, "identity": { ...state.user.identity, ...action.payload } } }
        }
        default:
            return state
    }
}
export default userReducer  