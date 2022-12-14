import {html, render} from '../../node_modules/lit-html/lit-html.js'
import { get, post } from '../api/api.js'

const addTemplate = (onSubmit) => html`
<section id="create-page" class="create">
            <form @submit=${onSubmit} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>`


    
  export function addView(ctx) {
    ctx.render(addTemplate(onSubmit))
    
 async function onSubmit(e){
   e.preventDefault()

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
   let result = await post('/data/books', obj)
    ctx.page.redirect('/dashboard')
  }

  
}
    