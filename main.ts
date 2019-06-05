import { Photon } from '@generated/photon'

const photon = new Photon()

async function main() {
  await photon.connect()

  const result = await photon.blogs.create(
    {
      data: {
        name: 'Photon Blog',
        // viewCount: 5,
      },
    } as any /* to enable TypeScript, remove this any */,
  )

  console.log(result)
  photon.close()
}

main().catch(e => {
  console.error(e)
  photon.close()
})
