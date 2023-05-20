import {html, render} from '../../node_modules/lit-html/lit-html.js'



const galleryTemplate = (content) => html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
    ${content.length == 0 ? html `<p class="no-books">No books in database!</p>` : 
    content.map(currTemp)}
    </section> `
    

const currTemp = (currContent) => html`
<ul class="my-books-list">
                <li class="otherBooks">
                    <h3>${currContent.Name}</h3>
                    <p>Mail: ${currContent.Mail}</p>
                    <p<a href="${currContent.Image}"><img src="image destination"></a></p>
                </li>
                </ul>
`



export async function galleryView(ctx) {
  let response = await fetch("http://194.141.118.43:3030/gallery", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",      
      },
  });
  let jsonData = await response.json();
  console.log(jsonData)
  ctx.render(galleryTemplate(jsonData))

}