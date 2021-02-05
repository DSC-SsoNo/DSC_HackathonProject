import produce from '../utils/produce';

export const initialState = {
  editorState: {}
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case "SET_EDITORSTATE":
      draft.editorState = action.payload.editorState;
      break;
    default:
      break;
  }
});

export default reducer;