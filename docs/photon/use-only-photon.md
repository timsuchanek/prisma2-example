# Using only Photon (without Lift)

You can use Photon as an ORM in your application without using Lift for database migrations. This is useful for _existing applications_ when there already is a working migration system or when you don't have the rights inside your organization to perform database migrations yourself.

When using Photon without Lift, you obtain your datamodel by _introspecting_ your database schema and generating the Prisam datamodel from it. The generated datamodel then serves as foundation for Photon's generated CRUD API. Whenever a schema migration is performed on the database afterwards, you need to re-introspect your database (which updates your datamodel) and re-generate your Photon API.

**This page is about using Photon with an existing database**. Learn more about getting started from scratch with Photon and Lift [here](./).

## Getting started with Photon

### 1. Install the Prisma CLI

```
npm install -g prisma2
```

### 2. Set up project using `prisma init`

Run the following command to initialize a new project:

```
prisma init hello-world
```

Then follow the interactive prompt:

1. Select your database type
  - **SQLite**
  - **MySQL**
  - **PostgreSQL**
  - MongoDB (coming soon)
2. Provide your database credentials ([more info](#database-credentials))
3. Select the database (MySQL, MongoDB) or schema (PostgreSQL) to introspect
4. Select **Only Photon**
6. Select your programming language
  - **JavaScript**
  - **TypeScript**
  - **Go**
7. Select a boilerplate to get started
  - **From scratch**
  - **GraphQL**
  - **REST**
  - **gRPC**

Once you're done with the interactive prompt, the CLI sets out for 3 major tasks:

1. Introspect your database schema
1. Generate a Prisma datamodel based on the introspection
1. Generate the Photon API in your selected language

Plus, if you've selected a boilerplate to get started, it downloads the boilerplate code and configures it to connect to your database and match the generated datamodel.

### 3. Integrate Photon in your application

To start using Photon in your application, you can import it from `node_modules/@generated` and start calling your database via the [generated Photon API](./api.md).

### 4. Customize your Photon API

One benefit of having the Prisma datamodel as an intermediate representation of your database schema is that lets you to _decouple_ the database schema from your data access API. For example, you can map cryptic table names to friendlier model names to be used in your API.

For example, when the following model was generated for you through the introspection:

```groovy
model _customers {
  id: Int
  number_of_orders: Int
}
```

By default, the generated API is based the model and fields names, e.g.:

```ts
await photon._customers.findMany({
  where: { number_of_orders: 5 }
})
```

You might prefer using camel casing rather than the snake case convention used in the database. You can therefore customize the mapping of a table/field name to a specific model/field name in the datamodel using the `map` attribute:

```groovy
model Customer @map(name: "_customers") {
  id: Int
  orderCount: Int @map(name: "number_of_orders")
}
```

After running another `prisma2 generate`, your Photon API now looks as follows:

```ts
await photon.customers.findMany({
  where: { orderCount: 5 }
})
```

### 5. Evolve your application

Whenever the database schema changes throughout the lifetime of your application, you need to re-generate your Photon API to ensure it still matches the underlying database structures. The workflow for that typically involves two steps:

1. Re-introspecting your database schema to update the datamodel
1. Re-generate your Photon API

In CLI commands, this looks as follows:

```
prisma2 introspect
prisma2 generate
```

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

Once provided, the CLI will prompt you to select one of the existing **schemas** on your MySQL server for introspection.

</Details>

<Details><Summary>Database credentials for <strong>MongoDB</strong></Summary>

When using MongoDB, you need to provide your [MongoDB connection string](https://docs.mongodb.com/manual/reference/connection-string), e.g. `http://user1:myPassword@localhost:27017/admin`. Note that this must include the database credentials as well as the [`authSource`](https://docs.mongodb.com/manual/reference/connection-string/#authentication-options) database that's storing the credentials of your MongoDB `admin` user (by default it is often called `admin`).

</Details>



