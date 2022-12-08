import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { get } from '../api/api.js'

const dashboardTemplate = (content) => html`
<section id="dashboard-page" class="dashboard">
<h1>Dashboard</h1>
    ${content.length == 0 ? html `<p class="no-books">No books in database!</p>` : 
    content.map(currTemp)}
    </section> `


    

    

const currTemp = (currContent) => html`
<ul class="other-books-list">
                <li class="otherBooks">
                    <h3>${currContent.title}</h3>
                    <p>Type: ${currContent.type}</p>
                    <p class="img"><img src="${currContent.imageUrl}"></p>
                    <a class="button" href="/data/books/${currContent._id}">Details</a>
                </li>
                </ul>
`

export async function dashboardView(ctx) {
  let result = await get('/data/books?sortBy=_createdOn%20desc')
  ctx.render(dashboardTemplate(result))
}
