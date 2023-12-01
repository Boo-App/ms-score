# Micro-service score

## Install dependencies

yarn

## You might need

Node 14+ : `nvm use 14`

Error : `[nodemon] failed to start process, "ts-node" exec not found`

Solution : Install ts-node `npm install -g ts-node`

## Run local

yarn dev

Add .env :

PORT=3000
MONGO_USERNAME=admin-booApp
MONGO_PASS=boo-app-password-atlas
MONGO_DB=users

## Endpoints

Add Score
`POST /addScore`

Body :

{
value: "",
nbQuestion: "",
category: "",
level: ""
}
Headers :

{
email: "",
id: "",
Authorization : Bearer _token_
}
Scores
GET /scores

Header :

{
email: "",
id: "",
Authorization : Bearer _token_
}
