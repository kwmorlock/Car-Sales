export const initialState = {

  };

  const reducer = (state =initialState, action) => {
    switch (action.type) {
    //   case "ADD_TODO":
       case "ADD_ADDEDFEATURE":
        console.log(action);
        return state.concat(action.payload);
    // return {
    //     ...state,
    //     title: action.payload,
    //     editing: false
    //   };
  
      case "MARK_TODO":
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        );
  
      case "CLEAR_TODO":
        return state.filter((todo) => !todo.completed);
      default:
        return state;
    }
  };
  
  export default reducer;