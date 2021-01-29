import {AddCatalog} from '../../components/catalog/catalog.js'


const linkData = [{name: 'home', component: AddCatalog}]

const nav = document.createElement('nav')

linkData.map(linkName => {
    const link = document.createElement('li')
    link.innerHTML = linkName.name
    link.addEventListener('click', () => {
        location.hash = linkName
        linkName.component()
    })
    nav.appendChild(link)
})

document.body.appendChild(nav)