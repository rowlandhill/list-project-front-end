'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  // console.log('event fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // console.log('event fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  // console.log('pass change')
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // console.log('event fired')
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetAllRecipes = function (event) {
  console.log(data)
  const data = getFormFields(this)
  event.preventDefault()
  api.getAllRecipes(data)
    .then(ui.getAllRecipesSuccess)
    .catch(ui.getAllRecipesFailure)
}

const onClearRecipes = (event) => {
  event.preventDefault()
  ui.clearRecipes()
}

const onCreateRecipe = function (event) {
  console.log('create recipe data is', data)
  event.preventDefault()
  const data = getFormFields(this)
  // $('#recipe-container').removeClass('hidden')
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

const onCreateIngredient = function (event) {
  console.log('create ingredient data is', data)
  event.preventDefault()
  const data = getFormFields(this)
  // $('#recipe-container').removeClass('hidden')
  api.createIngredient(data)
    .then(ui.createIngredientSuccess)
    .catch(ui.createIngredientFailure)
}

const onGetRecipe = function (event) {
  // console.log(data)
  const data = getFormFields(this)
  event.preventDefault()
  api.getRecipe(data.recipe.id)
    .then(ui.getRecipeSuccess)
    .catch(ui.getRecipeFailure)
}

// const onUpdateRecipe = (event) => {
//   event.preventDefault()
//   console.log('data-id')
//   debugger
//   const data = getFormFields(event.target)
//   const newRecipe = $(event.target).attr('data-id')
//   api.updateRecipe(data, newRecipe)
//     .then(ui.updateRecipeSuccess)
//     .catch(ui.updateRecipeFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#getRecipesButton').on('click', onGetAllRecipes)
  $('#clearRecipesButton').on('click', onClearRecipes)
  $('#createRecipe').on('submit', onCreateRecipe)
  $('#createIngredient').on('submit', onCreateIngredient)
  // $('#description-button').on('submit', onUpdateRecipe)
  $('#getOneRecipe').on('submit', onGetRecipe)
}

module.exports = {
  addHandlers,
  onCreateIngredient
}
