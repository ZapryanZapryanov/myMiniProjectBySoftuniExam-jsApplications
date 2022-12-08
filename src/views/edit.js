import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { get, post, put } from '../api/api.js'

const editTemplate = (onSubmit, content) => html`
<section id="edit-page" class="edit">
<form @submit=${onSubmit} id="edit-form" action="#" method="">
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" value="A Court of Thorns and Roses" .value=${content.title}>
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description"
  
              id="description">${content.description}</textarea>
              
            </span>
            
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" value="/images/book1.png" .value=${content.imageUrl}>
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" value="Fiction">
                    <option value="${content.type}" selected>${content.type}</option>
                    
                    
                </select>
                
            </span>
            
        </p>
        <input class="button submit" type="submit" value="Save">
    </fieldset>
</form>
</section>`


    
  export async function editView(ctx) {
    let content = await get(`/data/books/${ctx.params.id}`)
    ctx.render(editTemplate(onSubmit, content))
    
 async function onSubmit(e){
   e.preventDefault()
  console.log('hey')
   let formData = new FormData(e.currentTarget)

   let title = formData.get('title').trim()
   let description = formData.get('description').trim()
   let imageUrl = formData.get('imageUrl').trim()
   let type = formData.get('type').trim()

   
   let obj  = {
    title,
    description,
    imageUrl,
    type,

   }
   if (title == '' || description == '' || imageUrl == '' || type == '') {
   return alert('all field are required!')
   }
   await put(`/data/books/${ctx.params.id}`, obj)
    ctx.page.redirect(`/data/books/${ctx.params.id}`)
  }

  
}
    