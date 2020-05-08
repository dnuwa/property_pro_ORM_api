# property_pro_ORM_api
Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

#### 

first time clone 

create a `.env` file and add the content below

````
PORT=8000
DEV_DB_NAME='property_pro'
DEV_DB_USER='postgres'
DEV_DB_PASS=1234567890
DEV_DB_HOST='127.0.0.1'
SECRET=supersecret
````
create a database and run the command below

````
npx sequelize-cli db:migrate
````

undo a migration



#### generating migration files

`node_modules/.bin/sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

or

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

#### runing migrations
`node_modules/.bin/sequelize-cli db:migrate`

or

`npx sequelize-cli db:migrate`

adding new fields to a table
````
npx sequelize-cli migration:create --name modify_users_add_new_fields
````