const initialState = {
  editorState: {},
}

const rootReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "SET_EDITORSTATE":
      return {
        ...state,
        editorState: payload.editorState,
      }
  }
}

export default rootReducer;