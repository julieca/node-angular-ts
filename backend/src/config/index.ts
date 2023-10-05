import { resolve } from 'path'
// import * as Services from './services'
import { ProductController } from '../controllers/product'
import { envs } from './env'

const rootDir = resolve(__dirname)

export const config: Partial<TsED.Configuration> = {
  envs,
  rootDir,
  views: { root: `${rootDir}/views`, viewEngine: 'ejs' },
  statics: { '/assets': [{ root: `${rootDir}/assets` }] },
  httpsPort: false,
  ajv: {
    errorFormatter: (error) => `At ${error.modelName}${error.schemaPath}, value '${error.data}' ${error.message}`, verbose: false
  },
  mount: {
    '/product': [ProductController],
  },
  imports: [
    // ...Object.values(Services),
  ],
  mongoose: [
    {
      id: envs.FASHION_CLOUD_DB,
      url: `${envs.MONGO_URL}/${envs.FASHION_CLOUD_DB}`,
      connectionOptions: {}
    }
  ],
  acceptMimes: ['application/json', 'text/javascript', 'application/x-www-form-urlencoded', 'text/html'],
  routers: { mergeParams: false, strict: false, caseSensitive: false },
  converter: { additionalProperties: 'ignore' },
  swagger: [{ path: '/', specVersion: '3.0.1' }]
}
