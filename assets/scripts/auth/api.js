'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  // console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  // console.log('sign out fired', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllRecipes = () => {
  // console.log('get index', data)
  return $.ajax({
    url: config.apiOrigin + '/recipes/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createRecipe = (data) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/recipes/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// const getRecipe = (id) => {
//   event.preventDefault()
//   return $.ajax({
//     url: config.apiOrigin + '/recipes/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
//
// const updateRecipe = (data) => {
//   // console.log(data + 'PATCH TEST DATA')
//   event.preventDefault()
//   return $.ajax({
//     url: config.apiOrigin + '/recipes/' + store.recipe.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getAllRecipes,
  createRecipe
}
