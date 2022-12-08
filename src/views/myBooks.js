import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { del, get } from '../api/api.js'
import { getUserData } from '../util.js'


const booksTemplate = (content) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
    ${content.length == 0 ? html `<p class="no-books">No books in database!</p>` : 
    content.map(currTemp)}
    </section> `


    

    

const currTemp = (currContent) => html`
<ul class="my-books-list">
                <li class="otherBooks">
                    <h3>${currContent.title}</h3>
                    <p>Type: ${currContent.type}</p>
                    <p class="img"><img src="${currContent.imageUrl}"></p>
                    <a class="button" href="/data/books/${currContent._id}">Details</a>
                </li>
                </ul>
`



export async function booksView(ctx) {
  
  let userData = await getUserData()
  let result = await get(`/data/books?where=_ownerId%3D%22${userData.id}%22&sortBy=_createdOn%20desc`)

  ctx.render(booksTemplate(result))


}
