import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { del, get, post } from '../api/api.js'
import { getUserData } from '../util.js'

const detailsTemplate = (content, user, onDelete, onLike, curr) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${content.title}</h3>
    <p class="type">Type: ${content.type}</p>
    <p class="img"><img src="${content.imageUrl}"></p>
    <div class="actions">
  ${user ? html`
<a class="button" href="/data/books/edit/${content._id}">Edit</a>
<a class="button" @click=${onDelete}>Delete</a>` : html`<a class="button" @onLike=${onLike}>Like</a>`}
<div class="likes">
           <img class="hearts" src="/images/heart.png">
           <span id="total-likes">Likes: ${curr}</span>
      </div>
  </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${content.description}</p>
</div>
</section>`



export async function detailsView(ctx) {
  let result = await get(`/data/books/${ctx.params.id}`)
  let curr = await get(`/data/likes?where=bookId%3D%22${ctx.params.id}%22&distinct=_ownerId&count`)
  console.log(curr)
  let userData = getUserData()
  let isOwner = userData?.id == result._ownerId
  ctx.render(detailsTemplate(result, isOwner, onDelete, onLike, curr))

  async function onDelete(e) {
    let choice = confirm('are you sure ?')
    if (choice) {
      await del(`/data/books/${ctx.params.id}`)
      ctx.page.redirect('/dashboard')
    }

  }

  async function onLike(){
    console.log('hello')
    let obj = {
      bookId: ctx.params.id
    }
    await post('/data/likes', obj)
  }
}
