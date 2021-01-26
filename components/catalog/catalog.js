export function AddCatalog() {
    const catalog = document.createElement('section')
    catalog.classList.add('catalog-container')
    const data = ['item1', 'item2']
    data.map(item => {
        catalog.insertAdjacentHTML('beforeend', `<div> ${item} </div>`)
    })
    document.body.appendChild(catalog)
}