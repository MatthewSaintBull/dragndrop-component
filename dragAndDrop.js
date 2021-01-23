const template = document.createElement("template")
template.innerHTML = `

<link rel="stylesheet" href="./css/style.css">
<div class="dnd-container" id='uploadZone'>
    <input type="file" class="file-uploader">
    <div class="upload">
      <div class="uploadImage">
        <img src="./assets/upload.svg" width="64px">
      </div>
      <div class="uploadLabel">
        <h3 id="uploadLabel">Upload your file here</h3>
      </div>
    </div>
  </div>

`;



class DragAndDrop extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    
  }
  connectedCallback(){
    var upload = this.shadowRoot.getElementById("uploadZone")
    upload.ondrop = function (e) {
      e.preventDefault()
      console.log(e.dataTransfer.files[0])
      this.reader = new FileReader()

      this.reader.readAsDataURL(e.dataTransfer.files[0])
      this.reader.onload = function (event) {
        console.log(event.target.result) 
        //api call with file for uploading.
        //if there is no api, just put in a localstorage!
      }
    }
  }
    
}

window.customElements.define("drag-n-drop", DragAndDrop)
