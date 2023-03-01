import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output", 'text']
  static classes = ["hide"]

  connect() {
    this.textTarget.classList.add(this.hideClass)
    // this.outputTarget.textContent = "Hello World!"
  }

  clicked() {
    this.textTarget.classList.toggle(this.hideClass)
    // this.outputTarget.textContent = "Hello World!"
  }
}

