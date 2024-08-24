

export const filterReducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'PRODUCT_LIST':
      return { productList: payload.products }
    case 'SORT_BY':
      return { ...state, sortBy: payload.sortBy }
    case 'SPECIES':
      return { ...state, species: payload.species }
    case 'AGE':
      return { ...state, age: payload.age }
    case 'NEUTERED':
      return { ...state, neutered: payload.neutered }
    case 'RESET':
      return {
        ...state,
        neutered: false,
        sortBy: null,
        species: null,
        age: null
      }
    default:
      throw new Error('No Case Matched');
  }
  ;
}
