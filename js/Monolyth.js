import Main from "./Main.js";

class Monolyth extends Main {
  constructor() {
    super();
    this.ctx.font = "normal 30px sans-serif";
    this.angle = 0;
    this.angle_speed = 0;
    this.origin = { x: this.width / 2 - 40, y: 50 };
    this.draw();
  }
  draw(e) {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.width, this.height);
    for (let i = 0; i < 28; i++) {
      const offset = i * 25;
      const offsetAngle = i * 7;
      this.buildWord("STUDIO ", 0, offset, offsetAngle);
      this.buildWord("MORE ", 90, offset, offsetAngle);
      this.buildWord(" ONE", 180, offset, offsetAngle);
      this.buildWord("MORE", 270, offset, offsetAngle);
    }
    this.angle_speed += 0.9;
    this.angle += Math.sin(this.angle_speed * (Math.PI / 180)) * 1;
    requestAnimationFrame(this.draw.bind(this));
  }

  buildWord(string, delta, offset, offsetAngle) {
    const dim = this.ctx.measureText(string);
    const position = { x: dim.width / 2, y: dim.fontBoundingBoxAscent / 2 };
    const angle =
      (this.angle +
        delta +
        offsetAngle -
        offset * 0.5 * Math.sin(this.angle_speed * (Math.PI / 180))) *
      (Math.PI / 180);
    const alpha = Math.sin(angle) > 0 ? 0 : Math.cos(angle + Math.PI / 2);
    this.ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    this.ctx.save();
    this.ctx.translate(
      this.origin.x + position.x + Math.cos(angle) * (dim.width / 2),
      this.origin.y + position.y + offset
    );
    this.ctx.scale(Math.abs(Math.sin(angle)), Math.abs(Math.sin(angle)));
    this.ctx.fillText(string, -position.x, position.y);
    this.ctx.restore();
  }
}

window.onload = () => {
  new Monolyth();
};
