const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="./css/style.css">
<div class="dnd-container">
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
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("drag-n-drop", DragAndDrop);
