import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logout } from './api/api.js'
import { getUserData } from './util.js'
import { addView } from './views/add.js'
import { dashboardView } from './views/dashboard.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { homeView } from './views/home.js'
import { loginView } from './views/login.js'
import { booksView } from './views/myBooks.js'
import { registerView } from './views/register.js'





let main = document.querySelector('main')



export async function userLogOrNo(){
    let element = document.querySelector('#guest')
    let users = document.querySelector('#user')
    
   
     if (sessionStorage.length == 0) {        
         element.style.display = 'inline'
         users.style.display = 'none'       
     }else{
         element.style.display = 'none'
         users.style.display = 'inline'
         let userData = await getUserData()
         document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
     }
 }

let owner = document.querySelectorAll('#user a')[2];
console.log(owner.textContent)
owner.addEventListener('click', currLogout)
 function currLogout(){
    logout()
    userLogOrNo()
    page.redirect('/dashboard')
 }

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main)
    ctx.userLogOrNo = userLogOrNo

    next()
}

userLogOrNo()
page(decorateContext)
page('/login', loginView)
page('/register', registerView)
page('/dashboard', dashboardView)
page('/books', booksView)
page('/add', addView)
page('/data/books/:id', detailsView)
page('/data/books/edit/:id', editView)

page.start()