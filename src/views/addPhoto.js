import {html, render} from '../../node_modules/lit-html/lit-html.js'


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
                        <label for="description">Email</label>
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
   
   
   
   let obj  = {
    title,
    description,
    imageUrl,
  
   }
   if (title == '' || description == '' || imageUrl == '') {
    return alert('all field are required!')
    }


  fetch('http://194.141.118.43:3030/gallery', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors here
  });
 
   
  }

  
}