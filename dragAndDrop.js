const template = document.createElement('template')
template.innerHTML = `

<link rel="stylesheet" href="./css/style.css">
  <div class="dnd-container">
    <div>
      <img src="./assets/upload.svg" alt="" srcset="" width="30px">
    </div>
  </div>

`

class DragAndDrop extends HTMLElement {
  constructor(){
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('drag-n-drop', DragAndDrop)