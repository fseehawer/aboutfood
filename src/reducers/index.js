import { CHANGE_CATEGORY } from "../actions";

const initialState = {
    categories: [],
};

const categoryReducer = (state = initialState, action) => {
    if(action.type === CHANGE_CATEGORY) {
        if(state.categories.includes(action.category)) {
            return {
                categories: state.categories.filter(c => action.category !== c)
            };
        }

        return {
            categories: [...state.categories, action.category]
        }
    }

    return state;
};

export default categoryReducer;