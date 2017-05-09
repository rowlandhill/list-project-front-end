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
  $('#headline').removeClass('hidden')
  $('#sign-out-message').addClass('hidden')
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
  $('#headline').addClass('hidden')
  $('#sign-out-message').removeClass('hidden')
  $('#sign-out-message').text('Thank you for using Mangia Time!')
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

const onClearOneRecipe = (event) => {
  event.preventDefault()
  ui.clearOneRecipe()
  $('#get-one-recipe-alert').text('type in the id of the recipe you\'d like to see')
}

const closeSignUpWindow = (event) => {
  event.preventDefault()
  $('#sign-up-modal-alert').text('sign up!')
}

const closeSignInWindow = (event) => {
  event.preventDefault()
  $('#sign-in-modal-alert').text('almost there, sign in below')
}

const onCreateRecipe = function (event) {
  // console.log('create recipe data is', data)
  event.preventDefault()
  const data = getFormFields(this)
  // $('#recipe-container').removeClass('hidden')
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

const onCreateIngredient = function (event) {
  // console.log('create ingredient data is', data)
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

const onExitCreateRecipeForm = function (event) {
  event.preventDefault()
  document.getElementById('createRecipe').reset()
  $('#create-recipe-alert').text('type in the name, description, ingredients and servings, then click \'add\' to add it to your collection!')
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
  $('#getRecipesCloseX').on('click', onClearRecipes)
  $('#clear-one-recipe').on('click', onClearOneRecipe)
  $('#clear-one-recipe-X').on('click', onClearOneRecipe)
  $('#exit-one-recipe').on('click', onClearOneRecipe)
  $('#createRecipe').on('submit', onCreateRecipe)
  $('#createIngredient').on('submit', onCreateIngredient)
  // $('#description-button').on('submit', onUpdateRecipe)
  $('#getOneRecipe').on('submit', onGetRecipe)
  $('#exit-create-recipe').on('click', onExitCreateRecipeForm)
  $('#sign-up-close-X').on('click', closeSignUpWindow)
  $('#sign-up-close-button').on('click', closeSignUpWindow)
  $('#sign-in-close-X').on('click', closeSignInWindow)
  $('#sign-in-close-button').on('click', closeSignInWindow)
}

module.exports = {
  addHandlers,
  onCreateIngredient
}
