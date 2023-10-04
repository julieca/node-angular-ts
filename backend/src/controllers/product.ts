import { Controller } from '@tsed/di'
import { MongooseService } from '@tsed/mongoose'
import { Get } from '@tsed/schema'
// import { envs } from 'src/config/env'

@Controller('/')
export class ProductController {
  // private db
  constructor(mongooseService: MongooseService) {
    // this.db = mongooseService.get(envs.FASHION_CLOUD_DB)
  }

  @Get('/list') async list() {
    return { status: 200 }
  }
}