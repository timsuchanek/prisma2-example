import { Photon } from '@generated/photon'

const photon = new Photon()

async function main() {
  await photon.connect()

  const result = await photon.users.findOne({
    where: { id: 1 }
  })

  console.log(result)
  photon.close()
}

main().catch(e => {
  console.error(e)
  photon.close()
})
