import "./style.scss"

function createElement() {
  const loadingEl = document.createElement('div')
  loadingEl.className = 'vp-loading'
  loadingEl.innerHTML = `\
<div class="wrapper">
  <div id="preloader"></div>
</div>
`
  return loadingEl
}

let el: HTMLElement

export function show() {
  if (!el) el = createElement()
  el.style.opacity = '0'
  document.body.appendChild(el)
  setTimeout(() => el.style.opacity = '1')
}

export function hide() {
  if (!el) return
  el.style.opacity = '0'
  setTimeout(() => el.remove(), 500)
}