import { login } from "../api/api.js"
import {html, render} from '../../node_modules/lit-html/lit-html.js'


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>`

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit))
    
 async function onSubmit(e){
   e.preventDefault()
   console.log('hello')
   let formData = new FormData(e.currentTarget)

   let user = formData.get('email').trim()
   let password = formData.get('password').trim()
   
   if (user == '' || password == '') {
    return alert('all field are required!')
   }
   if (user == 'admin' && password == 'Manastir1600-') {
    await login(user, password)
    ctx.currLogout()
    ctx.page.redirect('/dashboard')
   }else{
    return alert('Try again wrong username or password !')
   }
  
  }

  
}