//Add some ACTIONTYPE
const UPDATE_INPUT = "UPDATE_INPUT";

//Create InitialState
const initialState = {
  inputValue: ""
};

//add some ACTION CREATORS
export function updateInput(input) {
  return {
    type: UPDATE_INPUT,
    payload: input
  };
}

//add some SWITCH CASES in the REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}
