const initialState = {
  name: "일기장",
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      }
  }
}

export default rootReducer;