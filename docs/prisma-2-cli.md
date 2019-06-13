# Prisma 2 CLI

## General

### `prisma2 init`

Sets up a new Prisma project via an interactive wizard.

### `prisma2 dev`

Starts the Prisma development mode.

### `prisma2 generate`

Invokes the generators specified in the Prisma project definition.

### `prisma2 introspect`

Introspects the database and generates a Prisma schema from it.

## Lift

### `prisma2 lift save`

Creates a new migration folder based on current datamodel changes. 

### `prisma2 lift up`

Apply any migrations that have not been applied yet.

### `prisma2 lift down`

Undo migrations.

## Upgrade from Prisma 1 to Prisma 2

### `prisma2 convert`

Convert the Prisma 1 service configuration to a Prisma 2 project definition.