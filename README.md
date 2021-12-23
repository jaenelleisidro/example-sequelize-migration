# example-sequelize-migration
this code is based on this tutorial https://sequelize.org/master/manual/migrations.html
check it to learn more


run 
npm install
npm install --save-dev sequelize-cli


for creating a new table use this

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string


you will need to run the migration by
npx sequelize-cli db:migrate

in order for your new table to appear



in order to revert the latest migration run this 
npx sequelize-cli db:migrate:undo

to return to current just run the migrate command again
npx sequelize-cli db:migrate


to revert to a specific migration, run this
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX.js


for creating initial data for our table you can use seeds

npx sequelize-cli seed:generate --name demo-user
modify the generated js seeds according to your liking at seeds folder then run
npx sequelize-cli db:seed:all

to undo seeds
npx sequelize-cli db:seed:undo

undo specific seeds
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

to redo, just run this again
npx sequelize-cli db:seed:all


note that seeds are not tracked so running them twice will result to duplicate data



to create a custom migration, we generate a skeleton
run this 
npx sequelize-cli migration:generate --name migration-skeleton

