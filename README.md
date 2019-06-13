# Prisma 2 Demo

This repository contains a first usable demo of Prisma 2. If you're running into any issues with the demo, please [open an issue in this repo](https://github.com/prisma/next/issues/new).

## Getting started

Follow the steps below to get started with a premade example that uses **Photon JS and Lift with SQLite** (recommended) or choose one of the following paths:

- [Connect your own MySQL or PostreSQL database](./docs/tutorial.md) (requires DB credentials)
- [Use only Lift](./docs/lift/use-only-lift.md) (for database migrations)
- [Use only Photon](./docs/photon/use-only-photon.md) (for type-safe database access (ORM))

#### 1. Clone the repo

Clone this repository:

```
git clone git@github.com:prisma/next.git
cd next
```

#### 2. Install the Prisma 2 CLI

```bash
npm install -g prisma2
```

You can now use the Prisma 2 CLI using the `prisma2` command.

#### 3. Migrate the database

With Prisma 2, database migrations are performed using the `lift` subcommand of the Prisma CLI, i.e. `prisma2 lift <command>`.

##### 3.1. Create migration

Run the following command to save a new migration:

```
prisma2 lift save --name 'init'
```

This creates a new directory called `migrations`. This directory stores detailed info about each migration you perform throughout the lifetime of your project.

Every migration is represented via its own directory inside the `migrations` directory. In this case, your first migration is called `TIMESTAMP-init` (e.g. `20190605165416-init`). It contains tree files:

- `datamodel.prisma`: The target datamodel for the migration.
- `steps.json`: A summary of all the required steps to perform the migration.
- `README.md`: A markdown file highlighting important information about the migration (e.g. a diff of the datamodel or the performed SQL statements).

##### 3.2. Execute migration

To actually execute the migration against your database, run:

```
prisma2 lift up
```

This applies the steps specified in `steps.json` and therefore migrates the database schema to match the datamodel.

#### 4. Generate Photon

Photon is the new name of the Prisma client. You can generate it via the `prisma2 generate` command:

```
prisma2 generate
```

You can now import Photon with `import { Photon } from '@generated/photon'`.

> In contrast to Prisma 1, the generated Photon library will be located inside `node_modules/@generated` instead of a configurable location.

#### 5. Install dependencies

Install Node depencies:

```
npm install
```

> Note that the Photon generation is included in an [`install`](./package.json#L16) script in your [`package.json`](./package.json), which means Photon also gets (re-)generated upon each `npm install`.

#### 6. Run the script

Run the following command to execute the script:

```
npm start
```

Note that you can also run the script in development mode using `npm run dev`. This way your files are watched and the script is re-executed whenever you save any changes.

## Notes

- This project currently uses SQLite. You can use the [SQLite Browser](https://sqlitebrowser.org/) to view and edit the data inside your SQLite database.
- The database file is stored inside the [`db`](./db) directory. It also contains a `.keep` file that's just there so the empty directory can be checked into git.
- You can turn on the debug mode by setting the `DEBUG` env var to `*`.
