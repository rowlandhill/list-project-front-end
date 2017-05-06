#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/recipes"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
  --data '{
    "recipes": [
  {
  "id": 1,
  "name": "TEST",
  "description": "THIS IS WHERE THE DESCRIPTION GOES",
  "servings": 1
  }
  ]
},
echo
