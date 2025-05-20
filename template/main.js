const btn_header = document.querySelector('#btn-header')
const overlay_header = document.querySelector('#overlay-header')
const nav_header = document.querySelector('#nav-header')
nav_header.addEventListener('click', e => e.stopPropagation())
btn_header.addEventListener('click', toggle_nav_header)
overlay_header.addEventListener('click', toggle_nav_header)

function toggle_nav_header (e) {
  e.stopPropagation()
  nav_header.classList.toggle('!w-full')
  if (overlay_header.classList.contains('invisible')) {
    overlay_header.classList.toggle('invisible')
  } else {
    setTimeout(() => {
      overlay_header.classList.toggle('invisible')
    }, 150)  
  }
}