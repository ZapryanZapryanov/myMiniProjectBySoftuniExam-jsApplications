import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { loginView } from './views/login.js'






let main = document.querySelector('main')



/**export async function userLogOrNo(){
    let element = document.querySelector('#guest')
    let users = document.querySelector('#user')
    
   
     if (sessionStorage.length == 0) {        
         element.style.display = 'inline'
         users.style.display = 'none'       
     }else{
         element.style.display = 'none'
         users.style.display = 'inline'
         /**let userData = await getUserData()
         document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
         /** */
    
let owner = document.querySelectorAll('#user a')[2];
owner.addEventListener('click', currLogout)
 function currLogout(){
    let element = document.querySelector('#guest')
    let users = document.querySelector('#user')
    
   
     if (sessionStorage.length == 0) {        
         element.style.display = 'inline'
         users.style.display = 'none'       
     }else{
         element.style.display = 'none'
         users.style.display = 'inline'
         /**let userData = await getUserData()
         document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
         page.redirect('/dashboard')
         
         page.redirect('/dashboard')
         /** */
     }
    
 }
 currLogout();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main)
    

    next()
}

userLogOrNo()
page(decorateContext)
page('/login', loginView)


page.start()