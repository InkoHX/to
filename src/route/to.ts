import Route from '@koa/router'
import URL from '../entity/URL'

const route = new Route()

route.get('/:number', async ctx => {
  await URL.findOne(ctx.params.number)
    .then(value => {
      if (typeof value === 'undefined') ctx.throw(404)
      else {
        ctx.redirect(value.url)
      }
    })
    .catch(err => ctx.throw(500, err))
})

export default route
