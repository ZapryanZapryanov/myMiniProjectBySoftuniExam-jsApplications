import {html, render} from '../../node_modules/lit-html/lit-html.js'

const dashboardTeamplate = () => html`
<section id="home">
<h1>Welcome to Sole Mates</h1>
<a href="https://images.unsplash.com/photo-1519573670974-766525b63443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b2dyYXBoeXxlbnwwfHwwfHw%3D&w=1000&q=80"><img src="image destination"></a>
<h2>Browse through the shoe collectibles of our users</h2>
<h3>Add or manage your items</h3>
</section>`

export function dashboardView(ctx) {
    ctx.render(dashboardTeamplate())
}