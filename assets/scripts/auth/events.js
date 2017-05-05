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
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  // console.log('event fired')
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onGetAllRecipes = function (event) {
//   console.log(data)
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   api.getAllGames(data)
//     .then(ui.getAllRecipesSuccess)
//     .catch(ui.getAllRecipesFailure)
// }

// const onCreateRecipe = function (event) {
//   // console.log(data)
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   $('#container').removeClass('hidden')
//   api.createGame(data)
//     .then(ui.createRecipeSuccess)
//     .catch(ui.createRecipeFailure)
// }

// const onGetRecipe = function (event) {
//   // console.log(data)
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   api.getId(data.game.id)
//     .then(ui.getRecipeSuccess)
//     .catch(ui.getRecipeFailure)
// }
//
// const onUpdateRecipe = function (event) {
//   // console.log(data)
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   api.updateRecipe(data)
//     .then(ui.recipeStateSuccess)
//     .catch(ui.recipeStateFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  // $('#get-all-recipes').on('submit', onGetAllGames)
  // $('#create-recipe').on('submit', onCreateGame)
}

module.exports = {
  addHandlers
}
