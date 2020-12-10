export default class Main {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width = window.innerWidth;
    this.canvas.height = this.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize(e) {
    this.canvas.width = this.width = window.innerWidth;
    this.canvas.height = this.height = window.innerHeight;
  }
}
