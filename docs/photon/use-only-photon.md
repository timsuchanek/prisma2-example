# Using Photon (without Lift)

You can use Photon as an ORM in your application without using Lift for database migrations. This is useful for existing applications when there already is a working migration system or when you don't have rights to perform database migrations yourself.

When using Photon without Lift, you obtain your datamodel by _introspecting_ your database schema and generating the Prisam datamodel from it. The generated datamodel then serves as foundation for Photon's generated CRUD API. Whenever a schema migration is later performed on the database, you need to re-introspect your database (which updates your datamodel) and re-generate your Photon API.

## Getting started with Photon

### 1. Install the Prisma CLI

```
npm install -g prisma
```

### 2. Set up project using `prisma init`

Run the following command to initialize a new project:

```
prisma init hello-world
```

Then follow the interactive prompt:

1. Select your database type
  - SQLite
  - MySQL
  - PostgreSQL
  - MongoDB (coming soon)
2. Provide your database credentials ([more info](#database-credentials))
3. Select the database (MySQL, MongoDB) or schema (PostgreSQL) to introspect
4. Select **Only Photon**
6. Select your programming language
  - JavaScript
  - TypeScript
  - Go
7. Select a boilerplate to get started
  - Fromo scratch
  - GraphQL
  - REST
  - gRPC

## Database credentials

<Details><Summary>Database credentials for <strong>SQLite</strong></Summary>

When using SQLite, you need to provide the _file path_ to your existing SQLite database file.

</Details>

<Details><Summary>Database credentials for <strong>MySQL</strong></Summary>

When using MySQL, you need to provide the following infomration to connect your existing MySQL database server:

- **Host**: The IP address/domain of your database server, e.g. `localhost`.
- **Post**: The port on which your database server listens, e.g. `5432` (PostgreSQL) or `3306` (MySQL).
- **User**: The database user, e.g. `admin`.
- **Password**: The password for the database user.
- **SSL**: Whether or not your database server uses SSL.

Once provided, the CLI will prompt you to select one of the existing **databases** on your MySQL server for introspection.

</Details>

<Details><Summary>Database credentials for <strong>PostgreSQL</strong></Summary>

When using PostgreSQL, you need to provide the following infomration to connect your existing MySQL database server:

- **Host**: The IP address/domain of your database server, e.g. `localhost`.
- **Post**: The port on which your database server listens, e.g. `5432` (PostgreSQL) or `3306` (MySQL).
- **Database**: The name of the database which contains the schema to introspect. 
- **User**: The database user, e.g. `admin`.
- **Password**: The password for the database user.
- **SSL**: Whether or not your database server uses SSL.

Once provided, the CLI will prompt you to select one of the existing **databases** on your MySQL server for introspection.

</Details>

<Details><Summary>Database credentials for <strong>MongoDB</strong></Summary>

When using MongoDB, you need to provide your [MongoDB connection string](https://docs.mongodb.com/manual/reference/connection-string), e.g. `http://user1:myPassword@localhost:27017/admin`. Note that this must include the database credentials as well as the [`authSource`](https://docs.mongodb.com/manual/reference/connection-string/#authentication-options) database that's storing the credentials of your MongoDB `admin` user (by default it is often called `admin`).

</Details>



