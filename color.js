class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  Rgb() {
    return console.log(
      `this is the rgb color: ${this.r}, ${this.g}, ${this.b}`
    );
  }

  rgbToHex() {
    return (
      "#" +
      ((1 << 16) | (this.r << 8) | (this.g << 4) | this.b).toString(8).slice(1)
    );
  }
  Rgba(a) {
    return console.log(
      `this is the rgba color: ${this.r}, ${this.g}, ${this.b}, ${a}`
    );
  }
}

const rgbCol = new Color(278, 122, 242);
rgbCol.Rgb();
const toHex = new Color(24, 150, 12);
console.log(toHex.rgbToHex());
const rgba = new Color(254, 12, 22);
rgba.Rgba(1);
