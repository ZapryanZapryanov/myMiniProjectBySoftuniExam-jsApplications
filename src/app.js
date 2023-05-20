import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { loginView } from './views/login.js'
import { dashboardView } from './views/dashboard.js'
import { galleryView } from './views/gallery.js'
import { addView } from './views/addPhoto.js'



let main = document.querySelector('main')

export async function userLogOrNo(){
    let element = document.querySelector('#guest')
    let users = document.querySelector('#user')
    
   
     if (!(sessionStorage.hasOwnProperty('admin'))) {        
         element.style.display = 'inline'
         users.style.display = 'none'       
     }else{
         element.style.display = 'none'
         users.style.display = 'inline'
         
     }
 }

let owner = document.querySelectorAll('#user a')[2];

owner.addEventListener('click', currLogout)

 function currLogout(){
    sessionStorage.clear();
     userLogOrNo() 
 }

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main)
    ctx.userLogOrNo = userLogOrNo

    next()
}

userLogOrNo()
page(decorateContext)
page('/login', loginView)
page('/dashboard', dashboardView)
page('/gallery', galleryView)
page('/add', addView)


page.start()
