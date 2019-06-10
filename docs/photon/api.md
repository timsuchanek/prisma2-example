# Generated Photon API (JavaScript/TypeScript)

Photon is a type-safe database client auto-generated based on the Prisma datamodel (which is a representation of your database schema). This page explains the generated API operations you have available when using Photon.

## Overview

Using Photon typically follows this high-level workflow:

1. Update your Prisma datamodel (e.g. by manually adding a new model or by (re)introspecting your database)
2. Generate your Photon database client based on the changes in the datamodel

Your `Photon` instance can then be imported from `node_modules/@generated`. 

Assume you have the following simple datamodel:

```groovy
model User {
  id: Int @id
  name: String
  role: Role
  posts: Post[]
}

model Post {
  id: Int @id
  title: String
  author: User
}

enum Role {
  USER
  ADMIN
}
```

### CRUD

Your generated Photon API will expose the following CRUD operations for the `User` and `Post` models:

- `findOne`
- `findMany`
- `create`
- `update`
- `updateMany`
- `upsert`
- `delete`
- `deleteMany`

You can access each function via the respective model property on your generated `Photon` instance:

```ts
import { Photon } from '@generated/photon'

const photon = new Photon()

async function main() {
  await photon.connect()
  const result = await photon.users.findOne({
    where: { id: 1 }
  })
  // result = { id: 1, name: "Alice", role: "USER" }
  photon.close()
}
```

### Field selection

#### Selection set

To understand which fields are being returned by a certain API call, you need to be aware of its **selection set**. 

The selection set defines the **set of fields on a model instance that is returned in a Photon API call**. 

For example, in the `findOne` API call from above, the selection set includes the `id`, `name` and `role` fields of the model `User`. In that example, the selection set has not been manipulated and the API call therefore returns the _default selection set_ which includes all _scalar_ fields of an object.

#### The default selection set

If the selection set is not manipulated (via `select` or `include`), a Photon API call returns the **default selection set** for a model. It includes all the _scalar_ fields of the model.

Considering the sample datamodel from above:

- The default selection set for the `User` model includes `id`, `name`, `role`. It does **not** include `posts` because that's a _relation_ and not a scalar field.
- The default selection set for the `Post` model includes `id`, `title`. It does **not** include `author` because that's a _relation_ and not a scalar field.

#### Manipulating the selection set

There are two ways how the _default selection set_ can be manipulated to specify which fields should be returned by a Photon API call:

- **Select exclusively** (via `select`): When using `select`, the selection set only contains the fields that are explicitly provided as arguments to `select`.
- **Include additionally** (via `include`): When using `include`, the default selection set gets extended with additional fields that are provided as arguments to `include`.

##### Select exclusively via `select`

In this example, we're using `select` to exclusivly select the `name` field of the returned `User` object:

```ts
const result = await photon.users.findOne({
  where: { id: 1 },
  select: { name: true }
})
// result = { name: "Alice" }
```

##### Include additionally via `include`

Sometimes you want to directly include a relation when retrieving data from a database. To eagerly load and include the relations of a model in an API call right away, you can use `include`: 

```ts
const result = await photon.users.findOne({
  where: { id: 1 },
  include: { posts: true }
})
// result = { 
//   id: 1, 
//   name: "Alice", 
//   role: "USER",
//   posts: [
//     { id: 1, title: "Hello World"},
//   ]
// }
```

#### Lazy loading

Coming soon.

## API reference



## Read

## Create

## Update

## Delete
