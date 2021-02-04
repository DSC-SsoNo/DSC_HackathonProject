export const setEditor = ({ editorState }) => {
  return {
    type: "SET_EDITORSTATE",
    payload: { editorState }
  }
}