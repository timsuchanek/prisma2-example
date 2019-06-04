import { Photon } from '@generated/photon'

async function main() {
  const photon = new Photon({
    // debug: true,
  })
  await photon.connect()

  const result = await photon.authors.create({
    data: {
      name: 'Test',
    },
  })

  console.log(result)
}

main().catch(console.error)
