# Glossary

### Composite model

A composite model is a model that doesn't directly map to a structure (e.g. a _table_ or a _collection_) in the underlying data source. Instead, it's composed out of multiple parts from the underlying database.

### Data source



### Data source connector

### Prisma Definition Language (PDL)

### Embed

### Generator

A generator determines what kind of code should be generated from the [model schema](#model-schema). For example, you can specify the _Photon JS generator_ to generate Photon JS as a type-safe database client based on the model schema.

You can include various generators in your [project definition](#project-definition). When running `prisma2 generate`, the Prisma CLI reads the specified generators from the project definition and invokes each of them.

### Index

### Lift

A declarative database migration system.

### Migration

### Migration engine

### Model

Models represent the entities of your application domain. Non-[composite](#composite-model) models also directly map to structures in the underlying data source, e.g. a _table_ for a relational database or a _collection_ for a document database.

### Model schema

Defines the strucure of your application data.

### Nested write

Photon lets you perform nested inserts and updates for related models. A nested write is always performed as an atomic transaction. 

### Photon

An auto-generated type-safe database client. Some people call it an ORM. 

### Project definition

The Prisma project definition specifies the main parts of your Prisma project:

- [**Connectors**](#data-source-connector): Specify which data sources Prisma should connect to (e.g. a PostgreSQL database)
- [**Prisma model schema**](#prisma-model-schema): Specifies the shape of the data per data source
- [**Generators**](#generator): Specifies what application code should be generated (e.g. Photon JS)

### Query engine

### Record

### Transaction