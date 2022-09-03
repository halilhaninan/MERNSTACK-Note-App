const hesaplaReducer = (state = 0, action) => {
  switch (action.type) {
    case "topla":
      return state + 1;
    case "cikar":
      return state - 1;
    default:
      return state;
  }
};

export default hesaplaReducer;
