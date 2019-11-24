import 'reflect-metadata'
import Koa from 'koa'
import api from './route/api'
import { createConnection } from 'typeorm'
import mount from 'koa-mount'
import to from './route/to'

const koa = new Koa()

createConnection()
  .then(() => {
    koa.use(mount('/to', to.routes()))
    koa.use(mount('/api', api.routes()))
    koa.listen(3000)
  })
  .catch((err) => console.error(err))
