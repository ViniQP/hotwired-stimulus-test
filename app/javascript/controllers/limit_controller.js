import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["text", "output"]
  static classes = ["highlight"]


  connect() {
    this.change()
  }

  change() {
    let length = this.textTarget.value.length
    this.outputTarget.textContent = `${length} characters`

    if (length > 280) {
      this.outputTarget.classList.add(this.highlightClass)
    } else {
      this.outputTarget.classList.remove(this.highlightClass)
    }
  }
}
