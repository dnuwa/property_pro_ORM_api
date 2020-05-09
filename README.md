# property_pro_ORM_api
Property Pro Lite is a platform where people can create and/or search properties for sale or rent.

[![GitHub license](https://img.shields.io/github/license/dnuwa/property_pro_ORM_api)](https://github.com/dnuwa/property_pro_ORM_api/blob/develop/LICENSE)               [![GitHub stars](https://img.shields.io/github/stars/dnuwa/property_pro_ORM_api)](https://github.com/dnuwa/property_pro_ORM_api/stargazers)             [![GitHub forks](https://img.shields.io/github/forks/dnuwa/property_pro_ORM_api)](https://github.com/dnuwa/property_pro_ORM_api/network)                [![GitHub issues](https://img.shields.io/github/issues/dnuwa/property_pro_ORM_api)](https://github.com/dnuwa/property_pro_ORM_api/issues)           [![Build Status](https://dev.azure.com/danielnuwa/danielnuwa/_apis/build/status/dnuwa.property_pro_ORM_api?branchName=develop)](https://dev.azure.com/danielnuwa/danielnuwa/_build/latest?definitionId=1&branchName=develop)
#### 

First time clone 

Create a `.env` file and add the content below

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



#### Generating migration files

`node_modules/.bin/sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

or

`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

#### Runing migrations
`node_modules/.bin/sequelize-cli db:migrate`

or

`npx sequelize-cli db:migrate`

adding new fields to a table
````
npx sequelize-cli migration:create --name modify_users_add_new_fields
````