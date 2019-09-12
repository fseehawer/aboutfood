export const CHANGE_TAG = 'CHANGE_TAG';

export const changeTag = (tag) => {
    return {
      type: CHANGE_TAG,
      tag
    };
};