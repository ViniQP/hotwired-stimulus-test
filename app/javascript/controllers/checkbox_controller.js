import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["text"]
  static classes = ["highlight"]


  checked() {
    this.textTarget.classList.toggle(this.highlightClass)
  }
}
