# Getting started

The easiest way to get started with Photon and/or Lift is by installing the Prisma CLI and running the interactive `init` command:

```
npm install -g prisma2
prisma2 init hello-prisma
```

## The `prisma init` flow

### 1. Database selection 

The first step asks you which kind of database you want to use with Photon/Lift. Currently, the following databases are supported:

- **SQLite**
- **MySQL**
- **PostgreSQL**
- MongoDB (coming very soon)

> When choosing **SQLite**, you can either point the Prisma CLI to an existing SQLite database file or let it create a new database file for you. With **all other options**, you'll need to provide the database connection details and credentials in the next step. 

### 2. Database credentials

#### For SQLite

Let the Prisma CLI create a new SQLite database file for you or select an existing one to introspect.

#### For all other options

Please provide the database connection details for your database server. If the Prisma CLI can successfully connect to your database server, it prompts you with the following options:

- Select an existing, non-empty database/schema to introspect
- Select an existing empty database/schema to get started from scratch
- Create empty database/schema to get started from scratch

> For MySQL and MongoDB servers, the you need to select a **database**. For PostreSQL, it's called a **schema**.

### 3. Selecting Prisma tools (Photon/Lift)

At this point, you have three options to use the Prisma tools with your successfully connected database:

- Use Photon and Lift
- [Use only Photon](./photon/use-only-photon.md) (for database access (ORM))
- [Use only Lift](./lift/use-only-lift.md) (for database migrations)

### 4. Language selection (only Photon)

If you previously selected "Photon and Lift" or "only Photon", you're now prompted for the language in which you want to access your database. Currently Photon is available in the following languages:

- **JavaScript**
- **TypeScript**
- **Go**

### 5. Boilerplate selection (only Photon)

Finally, you can decide how your initial project setup should look like:

- **From scratch**: Sets up a greenfield project demonstrating usage of Photon in a simple script
- **GraphQL boilerplate**: Sets up a GraphQL server example based on Photon
- **REST boilerplate**: Sets up a REST API example based on Photon
- **gRPC boilerplate**: Sets up a gRPC server example based on Photon


## Installing the Prisma CLI

### curl

```
TBD
```

### Homebrew

```
TBD
```

### NPM

```
npm install -g prisma2
```

### Yarn

```
yarn global add prisma2
```