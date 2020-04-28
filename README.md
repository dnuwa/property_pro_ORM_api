# property_pro_ORM_api
Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

#### 

first time clone 

create a `.env` file and add the content below

````
DATABASE_URL='postgres://postgres:1234567890@127.0.0.1:5432/property_pro'
SECRET = 'secret'
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
