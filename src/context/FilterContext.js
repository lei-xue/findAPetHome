import { createContext, useContext } from 'react'
import { filterReducers } from '../reducers'
import { useReducer } from 'react'

const filterInitialState = {
  productList: [],
  neutered: false,
  sortBy: null,
  species: null,
  age: null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducers, filterInitialState)

  function initialProductList(products) {
    dispatch({
      type: 'PRODUCT_LIST',
      payload: {
        products: products
      }
    })
  }
  // Filter functions - neutered
  function neuteredFilter(products) {
    return state.neutered ? products.filter(product => product.neutered === true) : products
  }

  function sortByPrice(products) {
    if (state.sortBy === 'lowtohigh') {
      return products.sort((a, b) => Number(a.price) - Number(b.price))
    }
    if (state.sortBy === 'hightolow') {
      return products.sort((a, b) => Number(b.price) - Number(a.price))
    }
    return products
  }
  function ageFilter(products) {
    if (state.age === "inOneYear") {
      return products.filter(product => (2024 - Number(product.birthYear)) < 1)
    }
    if (state.age === "oneToThree") {
      return products.filter(product => (2024 - Number(product.birthYear)) <= 3 && (2024 - Number(product.birthYear)) >= 1)
    }
    if (state.age === "OverThree") {
      return products.filter(product => (2024 - Number(product.birthYear)) >= 3)
    }
    return products
  }

  const speciesFilter = (products) => {
    if (state.species === 'dog') {
      return products.filter(product => product.species === 'dog')
    }
    if (state.species === "cat") {
      return products.filter(product => product.species === "cat")
    }
    if (state.species === "rabbit") {
      return products.filter(product => product.species === "rabbit")
    }
    if (state.species === "hamster") {
      return products.filter(product => product.species === "hamster")
    }
    return products
  }

  const filteredProductList = (products) => {
    return (sortByPrice(neuteredFilter(speciesFilter(ageFilter(products)))))
  }

  const value = {
    state,
    dispatch,
    products: filteredProductList(state.productList),
    initialProductList
  }
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;

}
