'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showRecipesTemplate = require('../templates/get-all-recipes.handlebars')
const showOneRecipeTemplate = require('../templates/get-one-recipe.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const resetForms = () => {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('createRecipe').reset()
  document.getElementById('getOneRecipe').reset()
}

const signInHideModals = () => {
  $('#sign-in-modal-button').modal('hide')
  $('#sign-in-modal').modal('hide')
  $('#sign-in-modal-button').addClass('hidden')
  $('#sign-in-modal').addClass('hidden')
  // $('#sign-up-modal-button').modal('hide')
  // $('#sign-up-modal').modal('hide')
  $('#sign-up-modal-button').addClass('hidden')
  $('#sign-up-modal').addClass('hidden')
}

const signInShowModals = () => {
  $('#new-recipe-modal-button').removeClass('hidden')
  $('#new-recipe-modal-button').removeClass('hidden')
  $('#newrecipemodal').removeClass('hidden')
  $('#all-recipes-modal-button').removeClass('hidden')
  $('#allrecipesmodal').removeClass('hidden')
  $('#get-one-recipe-modal-button').removeClass('hidden')
  $('#getonerecipemodal').removeClass('hidden')
}

const signOutHideModals = () => {
  $('#new-recipe-modal-button').addClass('hidden')
  $('#new-recipe-modal-button').addClass('hidden')
  $('#newrecipemodal').addClass('hidden')
  $('#all-recipes-modal-button').addClass('hidden')
  $('#allrecipesmodal').addClass('hidden')
  $('#get-one-recipe-modal-button').addClass('hidden')
  $('#getonerecipemodal').addClass('hidden')
}

const signUpSuccess = (data) => {
  // console.log(data + 'sign-up success')
  $('#sign-up-modal-button').modal('hide')
  $('#sign-up-modal').modal('hide')
  $('#sign-up-modal-button').addClass('hidden')
  $('#sign-up-modal').addClass('hidden')
  resetForms()
}

const signUpFailure = (error) => {
  console.log(error)
  $('#sign-up-modal-alert').text('username taken or passwords don\'t match. try again!')
  resetForms()
}

const signInSuccess = (data) => {
  // console.log('sign in success')
  store.user = data.user
  resetForms()
  signInHideModals()
  signInShowModals()
  // $('#sign-in').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#get-all-recipes').removeClass('hidden')
  $('#create-recipe').removeClass('hidden')
  $('#new-recipe').removeClass('hidden')
  $('.content').show()
  $('#change-password-alert').text('you\'ve signed in!')
}

const signInFailure = (error) => {
  $('#sign-in-modal-alert').text('you don\'t have an account or your typed your password wrong, you silly goose')
  console.error(error)
  resetForms()
}

const changePasswordSuccess = (response) => {
  // console.log('response is ', response)
  resetForms()
  $('#change-password-alert').removeClass('hidden')
  $('#change-password-alert').text('change password success!')
}

const changePasswordFailure = (error) => {
  console.error(error)
  resetForms()
  $('#change-password-alert').removeClass('hidden')
  $('#change-password-alert').text('change password FAIL!')
}

const signOutSuccess = (response) => {
  // console.log('response is', response)
  // console.log('signedout')
  resetForms()
  signOutHideModals()
  $('#sign-up-modal-button').removeClass('hidden')
  $('#sign-up-modal').removeClass('hidden')
  $('#sign-in-modal-button').removeClass('hidden')
  $('#sign-in-modal').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#get-all-recipes').addClass('hidden')
  $('#create-recipe').addClass('hidden')
  $('.content').empty()
  $('.content').hide()
  $('#change-password-alert').addClass('hidden')
}

const signOutFailure = (error) => {
  console.error(error)
  resetForms()
}

// Ensures that something is passed through as an update
const noEmptyUpdates = (input) => {
  if (/[a-z]/.test(input.toLowerCase()) === false) { return false }
  return true
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  resetForms()
  $('#change-password-alert').addClass('hidden')
  const data = getFormFields(event.target)
  // console.log(data)
  const newRecipe = $(event.target).attr('data-id')
  // console.log('event.target is ' + data)
  // console.log(newRecipe)
  $('.update').trigger('reset')
  refreshRecipesList()
  if (noEmptyUpdates(data.recipe.name) === true) {
    api.updateRecipe(data, newRecipe)
    .then(updateRecipeSuccess)
    .then(() => {
      api.getAllRecipes()
        .then(getAllRecipesSuccess)
        .catch(getAllRecipesFailure)
    })
  } else {
    updateRecipeFailure
    $('#edit-delete-alert').text('you must type in the recipe name before you can update')
  }
}

const refreshRecipesList = (data) => {
  const showRecipesHtml = showRecipesTemplate({ recipes: store.recipeLists })
  $('.content').empty()
  $('.content').append(showRecipesHtml)
  $('.update').on('submit', onUpdateRecipe)
  $('.destroy').on('click', onDeleteRecipe)
}

const onDeleteRecipe = (event) => {
  event.preventDefault()
  // store.recipeLists = data.recipes
  $('#change-password-alert').addClass('hidden')
  const removeRecipe = $(event.target).attr('data-id')
  store.recipeLists = store.recipeLists.filter((recipe) => {
    return String(recipe.id) !== String(removeRecipe)
  })
  refreshRecipesList()
  api.deleteRecipe(removeRecipe)
    .then(deleteRecipeSuccess)
    .catch(deleteRecipeFailure)
    .then(() => {
      api.getAllRecipes()
        .then(getAllRecipesSuccess)
        .catch(getAllRecipesFailure)
    })
      // .catch(updateRecipeFailure)
}

const getAllRecipesSuccess = (data) => {
  // console.log(data)
  // console.log('getAllRecipesSuccess fired')
  $('#change-password-alert').addClass('hidden')
  store.recipeLists = data.recipes
  refreshRecipesList()
  resetForms()

  // $('#all-recipes').text(data.recipes)
  // $('.update').on('submit', events.onUpdateRecipe)
  // $('.update').on('click', function (event) {
  //   $(this).closest('div').find('.show-update-fields').hide()
  //   event.preventDefault
  // })
}

const getAllRecipesFailure = (error) => {
  console.error(error)
}

const clearRecipes = () => {
  $('.content').empty()
  $('#edit-delete-alert').text('click below to see all your recipes! you can update or delete them here as well')
  $('#change-password-alert').addClass('hidden')
}

const clearOneRecipe = () => {
  $('.one-recipe-content').empty()
  $('#getOneRecipe').trigger('reset')
  $('#change-password-alert').addClass('hidden')
}

const createRecipeSuccess = (response) => {
  // console.log('create recipe success response is', response)
  // $('#recipe-container').removeClass('hidden')
  store.recipe = response.recipe
  $('#change-password-alert').addClass('hidden')
  // console.log('response.recipe is ', response.recipe)
  refreshRecipesList()
  document.getElementById('createRecipe').reset()
  $('#create-recipe-alert').text('your new recipe ID is ' + store.recipe.id)
}

const createRecipeFailure = (error) => {
  console.error(error)
  // console.log('recipe create failed')
  $('#create-recipe-alert').text('recipe not created. you may not have filled out a field')
  $('#change-password-alert').addClass('hidden')
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

const getRecipeSuccess = (data) => {
  // console.log(data.recipe.id)
  // console.log(data.recipe)
  const showOneRecipeHtml = showOneRecipeTemplate({ recipe: data.recipe })
  $('.one-recipe-content').html(showOneRecipeHtml)
  $('#change-password-alert').addClass('hidden')
}

const getRecipeFailure = (error) => {
  console.error(error)
  // console.log('get recipe failed')
  $('#get-one-recipe-alert').text('that recipe does not exist')
}

const updateRecipeSuccess = (response) => {
  // console.log('updateRecipeSuccess response is', response)
  $('.update').trigger('reset')
  // refreshRecipesList()
  // api.getAllRecipes
  $('#edit-delete-alert').text('update success!')
}

const updateRecipeFailure = (data) => {
  // console.error('uh what' + data)
}

const deleteRecipeSuccess = (data) => {
  // console.log('response is', data)
  resetForms()
  $('#edit-delete-alert').text('delete success!')
  $('#change-password-alert').addClass('hidden')
}

const deleteRecipeFailure = (data) => {
  // console.error('this did not work' + data)
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
  createIngredientFailure,
  clearRecipes,
  getRecipeSuccess,
  getRecipeFailure,
  clearOneRecipe
}
