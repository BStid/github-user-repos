//Action Type
const UPDATE_INPUT = "UPDATE_INPUT";

//InitialState
const initialState = {
  inputValue: "BStid"
};

//action creators
export const updateInput = input => {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      console.log("passing reducer...", action.payload);
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
}
