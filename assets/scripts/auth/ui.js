'use strict'

const store = require('../store.js')

const resetForms = () => {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
}

const signUpSuccess = (data) => {
  console.log(data + 'sign-up success')
  $('#sign-up').addClass('hidden')
  resetForms()
}

const signUpFailure = (error) => {
  console.log(error)
  resetForms()
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
  resetForms()
  $('#sign-in').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#get-all-recipes').removeClass('hidden')
  $('#create-recipe').removeClass('hidden')
  $('#new-recipe').removeClass('hidden')
  if ($('#sign-up').not('hidden')) {
    $('#sign-up').addClass('hidden')
  }
}

const signInFailure = (error) => {
  console.error(error)
  resetForms()
}

const changePasswordSuccess = (response) => {
  // console.log('response is ', response)
  resetForms()
}

const changePasswordFailure = (error) => {
  console.error(error)
  resetForms()
}

const signOutSuccess = (response) => {
  // console.log('response is', response)
  console.log('signedout')
  resetForms()
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#get-all-recipes').addClass('hidden')
  $('#create-recipe').addClass('hidden')
}

const signOutFailure = (error) => {
  console.error(error)
  resetForms()
}

const getAllRecipesSuccess = (data) => {
  console.log(data)
  $('#all-recipes').text(data.recipes)
}

const getAllRecipesFailure = (error) => {
  console.error(error)
}
//
const createRecipeSuccess = (response) => {
  console.log(response)
  // $('#recipe-container').removeClass('hidden')
  store.recipe = response.recipe
  console.log(response.recipe)
}

const createRecipeFailure = (error) => {
  console.error(error)
}

const createIngredientSuccess = (response) => {
  console.log(response)
  // $('#recipe-container').removeClass('hidden')
  store.ingredient = response.ingredient
  console.log(response.ingredient)
}

const createIngredientFailure = (error) => {
  console.error(error)
}
//
// const getRecipeSuccess = (data) => {
//   console.log(data.recipe.id)
// }
//
// const getRecipeFailure = (error) => {
//   console.error(error)
// }
//
const updateRecipeSuccess = (response) => {
  // console.log('response is', response)
}

const updateRecipeFailure = (error) => {
  console.error('uh what' + error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getAllRecipesSuccess,
  getAllRecipesFailure,
  createRecipeSuccess,
  createRecipeFailure,
  updateRecipeSuccess,
  updateRecipeFailure,
  createIngredientSuccess,
  createIngredientFailure
}
