
import { $log, Configuration } from '@tsed/common'
import { PlatformExpress } from '@tsed/platform-express'
import { Server } from './server'

export async function main() {
  const server = await PlatformExpress.bootstrap(Server)
  await server.listen()

  process.on("SIGINT", () => {
    server.stop();
  });
}

main().catch((error: Error) => {
  $log.error(error)
})
