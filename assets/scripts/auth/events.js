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

const onCreateRecipe = function (event) {
  console.log(data)
  event.preventDefault()
  const data = getFormFields(this)
  // $('#recipe-container').removeClass('hidden')
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

const onCreateIngredient = function (event) {
  console.log(data)
  event.preventDefault()
  const data = getFormFields(this)
  // $('#recipe-container').removeClass('hidden')
  api.createIngredient(data)
    .then(ui.createIngredientSuccess)
    .catch(ui.createIngredientFailure)
}

// const onGetRecipe = function (event) {
//   // console.log(data)
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.getId(data.game.id)
//     .then(ui.getRecipeSuccess)
//     .catch(ui.getRecipeFailure)
// }
//
const onUpdateRecipe = function (event) {
  // console.log(data)
  const data = getFormFields(this)
  event.preventDefault()
  api.updateRecipe(data)
    .then(ui.recipeStateSuccess)
    .catch(ui.recipeStateFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#get-all-recipes').on('submit', onGetAllRecipes)
  $('#createRecipe').on('submit', onCreateRecipe, onCreateIngredient)
  $('#updateRecipe').on('submit', onUpdateRecipe)
  $('#description-button').on('submit', onUpdateRecipe)
}

module.exports = {
  addHandlers
}
