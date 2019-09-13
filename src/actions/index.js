export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const changeCategory = (category) => {
    return {
      type: CHANGE_CATEGORY,
      category
    };
};