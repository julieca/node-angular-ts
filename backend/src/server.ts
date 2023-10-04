import '@tsed/ajv'
import { BeforeInit, BeforeRoutesInit, Configuration, Inject, PlatformAcceptMimesMiddleware, PlatformApplication } from '@tsed/common'
import '@tsed/platform-express'
import '@tsed/swagger'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as methodOverride from 'method-override'
import { config } from './config'

@Configuration(config)
export class Server implements BeforeInit, BeforeRoutesInit {
  @Inject() app!: PlatformApplication

  public async $beforeInit() {
    this.app.use(cookieParser())
  }

  public async $beforeRoutesInit() {
    this.app.use(PlatformAcceptMimesMiddleware)
    this.app.use(methodOverride())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
}
