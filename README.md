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