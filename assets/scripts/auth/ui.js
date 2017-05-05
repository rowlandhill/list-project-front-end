'use strict'

const store = require('../store.js')

const resetForms = () => {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
}

const signUpSuccess = (data) => {
  console.log(data)
  // $('#sign-up').addClass('hidden')
  resetForms()
  // $('#sign-up').addClass('hidden')
}

const signUpFailure = (error) => {
  console.log(error)
  resetForms()
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
  // $('#sign-in').addClass('hidden')
  // $('#change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#get-all-games').removeClass('hidden')
  // $('#create-game').removeClass('hidden')
  // if ($('#sign-up').not('hidden')) {
  //   $('#sign-up').addClass('hidden')
  // }
  resetForms()
  // $('#sign-in').addClass('hidden')
  // $('#change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#get-all-recipes').removeClass('hidden')
  // $('#create-game').removeClass('hidden')
  // // $('#get-id').removeClass('hidden')
  // if ($('#sign-up').not('hidden')) {
  //   $('#sign-up').addClass('hidden')
  // }
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
}

const signOutFailure = (error) => {
  console.error(error)
  resetForms()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
