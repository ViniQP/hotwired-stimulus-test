import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    
  }

  clicked() {
    this.element.textContent = "Hello World!"
  }
}
