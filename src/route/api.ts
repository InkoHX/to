import Route from '@koa/router'
import URL from '../entity/URL'
import { isValidURL } from '../util/utils'

const route = new Route()

route.get('/create', async ctx => {
  const url = ctx.query.url
  if (typeof url !== 'string') ctx.throw(400, 'url is required.')
  if (!isValidURL(url)) ctx.throw(400, 'It is not a valid URL.')
  const to = new URL()
  to.url = url
  await to.save()
    .then(value => {
      ctx.status = 200
      ctx.body = {
        urlId: value.id,
        url: `${ctx.origin}/to/${value.id}`
      }
    })
    .catch(err => ctx.throw(500, err))
})

export default route
