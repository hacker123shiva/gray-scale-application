const fileInput = document.querySelector('.file-upload');
// const cd = document.querySelector('.cd1');
// let img = null;

// fileInput.addEventListener('change', () => {
//   makeGray();
//   img.drawTo(cd);
// });

// function makeGray() {
//   img = new SimpleImage(fileInput);
//   for (let pixel of img.values()) {
//     let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
//     pixel.setRed(avg);
//     pixel.setGreen(avg);
//     pixel.setBlue(avg);
//     console.log('shiva');
//   }
// }

// const fileInput = document.querySelector('.file-upload');
// const cd = document.querySelector('.cd');
// let img = null;

// fileInput.addEventListener('change', () => {
//   makeGray();
//   img.drawTo(cd);
// });

// function makeGray() {
//   img = new SimpleImage(fileInput);
//   const width = img.getWidth();
//   const height = img.getHeight();

//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       const pixel = img.getPixel(x, y);
//       const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
//       pixel.setRed(avg);
//       pixel.setGreen(avg);
//       pixel.setBlue(avg);
//     }
//   }
// }

// Global variables
let image = null; // Original image
let grayImage = null; // Grayscale image
let canvas1 = document.querySelector('.cd1'); // Left canvas for original image
let canvas2 = document.querySelector('.cd2'); // Right canvas for grayscale image
let makeChange = document.querySelector('.make-change');
//evnet listener for upload button
const file = document.querySelector('.file-upload');
file.addEventListener('change', () => {
  upload();
});
// Function to upload the image
function upload() {
  let fileInput = document.querySelector('.file-upload');
  image = new SimpleImage(fileInput);
  grayImage = new SimpleImage(fileInput);
  image.drawTo(canvas1);
}

// Function to convert the image to grayscale
function makeGray() {
  if (grayImage != null) {
    for (let pixel of grayImage.values()) {
      let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    grayImage.drawTo(canvas2);
  }
}

//add event listener on make change button
makeChange.addEventListener('click', () => {
  makeGray();
});
