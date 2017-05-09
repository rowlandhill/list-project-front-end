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

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const newRecipe = $(event.target).attr('data-id')
  console.log(newRecipe)
  api.updateRecipe(data, newRecipe)
    .then(updateRecipeSuccess)
    .catch(updateRecipeFailure)
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
  const removeRecipe = $(event.target).attr('data-id')
  store.recipeLists = store.recipeLists.filter((recipe) => {
    return String(recipe.id) !== String(removeRecipe)
  })
  refreshRecipesList()
  api.deleteRecipe(removeRecipe)
    .then(deleteRecipeSuccess)
    .catch(deleteRecipeFailure)
}

const getAllRecipesSuccess = (data) => {
  console.log(data)
  store.recipeLists = data.recipes
  refreshRecipesList()
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
}

const createRecipeSuccess = (response) => {
  console.log('create recipe success response is', response)
  // $('#recipe-container').removeClass('hidden')
  store.recipe = response.recipe
  console.log('response.recipe is ', response.recipe)
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

const getRecipeSuccess = (data) => {
  console.log(data.recipe.id)
  console.log(data.recipe)
  const showOneRecipeHtml = showOneRecipeTemplate({ recipe: data.recipe })
  $('.one-recipe-content').html(showOneRecipeHtml)
}

const getRecipeFailure = (error) => {
  console.error(error)
}

const updateRecipeSuccess = (response) => {
  console.log('response is', response)
}

const updateRecipeFailure = (data) => {
  console.error('uh what' + data)
}

const deleteRecipeSuccess = (data) => {
  console.log('response is', data)
}

const deleteRecipeFailure = (data) => {
  console.error('this did not work' + data)
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
  getRecipeFailure
}
