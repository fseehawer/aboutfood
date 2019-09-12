import { CHANGE_TAG } from "../actions";

const initialState = {
    tags: [],
};

const tagsReducer = (state = initialState, action) => {
    if(action.type === CHANGE_TAG) {
        if(state.tags.includes(action.tag)) {
            return {
                tags: state.tags.filter(t => action.tag !== t)
            };
        }

        return {
            tags: [...state.tags, action.tag]
        }
    }

    return state;
};

export default tagsReducer;