export const todoReducer = (state =[], action) => {
 switch (action.type) {
    // case 'add':
    //   return [
    //     ...state,
    //     {
    //       id: new Date().getTime(),
    //       desc: action.payload,
    //       done: false,
    //     }
    //   ]

    default:
      return state;
  }
}