# Prisma 2 Demo

This repository contains a first usable demo of Prisma 2.

## Getting Started

#### 1. Install the Prisma 2 CLI

```bash
npm install -g @prisma/prototype
```

You can now use the Prisma 2 CLI using the `prisma2` command.

#### 2. Migrate the database

With Prisma 2, database migrations are performed using the `lift` subcommand of the Prisma CLI, i.e. `prisma lift <command>`.

##### 2.1. Create migration

Run the following command to create a new migration:

```
prisma2 lift create --name 'init'
```

This creates a new directory called `migrations`. This directory stores detailled info about each migration you perform throughout the lifetime of your project.

Every migration is represented via its own directory inside the `migrations` directory. In this case, your first migration is called `TIMESTAMP-init` (e.g. `20190605165416-init`). It contains tree files:

- `datamodel.prisma`: The target datamodel for the migration.
- `steps.json`: A summary of all the required steps to perform the migration.
- `README.md`: A markdown file highlighting important information about the migration (e.g. a diff of the datamodel or the performed SQL statements).

##### 2.2. Execute migration

To actually execute the migration against your database, run:

```
prisma2 lift up
```

This applies the steps specified in `steps.json` and therefore migrates the database schema to match the datamodel. 

#### 3. Generate Photon

Photon is the new name of the Prisma client. You can generate it via the `prisma2 generate` command:

```
prisma2 generate
```

You can now import Photon with `import { Photon } from '@generated/photon'`.

> In contrast to Prisma 1, the generated Photon library will be located inside `node_modules/@generated` instead of a configurable location.

#### 4. Install dependencies

Install Node depencies:

```
npm install
```

> Note that the Photon generation is included in an [`install`](./package.json#L16) script in your [`package.json`](./package.json), which means Photon also gets (re-)generated upon each `npm install`.  

#### 5. Run the script

Run the following command to execute the script:

```
npm start
```

Note that you can also run the script in development mode using `npm run dev`. This way your files are watched and the script is re-executed whenever you save any changes.

## Notes

- This project currently uses SQLite. You can use the [SQLite Browser](https://sqlitebrowser.org/) to view and edit the data inside your SQLite database.
- The database file is stored inside the [`db`](./db) directory. It also contains a `.keep` file that's just there so the empty directory can be checked into git.
- You can turn on the debug mode by setting the `DEBUG` env var to `*`.
