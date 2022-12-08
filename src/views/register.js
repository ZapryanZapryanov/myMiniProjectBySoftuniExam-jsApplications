import { login, register } from "../api/api.js"
import {html, render} from '../../node_modules/lit-html/lit-html.js'


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
            <form @submit=${onSubmit} id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit))
    
 async function onSubmit(e){
   e.preventDefault()
   console.log('hello')
   let formData = new FormData(e.currentTarget)

   let email = formData.get('email').trim()
   let password = formData.get('password').trim()
   let rePassword = formData.get('confirm-pass').trim()
   
   if (email == '' || password == '' || password != rePassword) {
    return alert('all field are required!')
   }
   await register(email, password)
    ctx.userLogOrNo()
    ctx.page.redirect('/dashboard')
   
  }

  
}