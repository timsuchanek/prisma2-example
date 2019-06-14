import Photon from './prisma/generated/photon'

const photon = new Photon()

async function main() {
  await photon.connect()

  const result = await photon.blogs.create({
    data: {
      name: 'Photon Blog',
      viewCount: 5,
    },
  })

  console.log(result)
  
  await photon.disconnect()
}

main().catch(e => {
  console.error(e)
  photon.disconnect()
})
