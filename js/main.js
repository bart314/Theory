document.querySelectorAll('div.multiple div.option').forEach(el => el.addEventListener('click', evt => {
    const p = evt.currentTarget.parentNode.parentNode
    const lang = evt.target.innerHTML
    const quote = p.querySelector(`div.${lang}`)

    evt.currentTarget.parentNode.querySelectorAll('div.option').forEach(el => {
        el.classList.remove('active')
    })
    evt.currentTarget.classList.add('active')
    evt.currentTarget.parentNode.parentNode.querySelectorAll('div.quote').forEach( el => {
        el.classList.remove('current')
        el.classList.add('hidden')
    })
    quote.classList.remove('hidden')
    quote.classList.add('current')
}))
  