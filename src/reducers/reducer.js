export const initialState = {

        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };


  const reducer = (state =initialState, action) => {
    switch (action.type) {
    //   case "ADD_TODO":
       case "ADD_ADDEDFEATURE":
        console.log(action);
        return state.concat(action.payload);
        default:
            return state
    }
}



    // return {
    //     ...state,
    //     title: action.payload,
    //     editing: false
    //   };
  
//       case "MARK_TODO":
//         return state.map((todo) =>
//           todo.id === action.payload ? { ...todo, completed: true } : todo
//         );
  
//       case "CLEAR_TODO":
//         return state.filter((todo) => !todo.completed);
//       default:
//         return state;
//     }
//   };
  
  export default reducer;