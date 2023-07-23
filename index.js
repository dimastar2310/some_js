// index.js

// Function to be called once OpenCV.js is loaded and ready to be used
function onOpenCvReady() {
    console.log('OpenCV.js is ready!');
    // You can start using OpenCV functions here
    // For example, you can use cv.imread(), cv.imshow(), etc.
}

// Load OpenCV.js asynchronously
const script = document.createElement('script');
script.src = 'https://docs.opencv.org/master/opencv.js';
script.async = true;
script.onload = onOpenCvReady;
document.head.appendChild(script);
onOpenCvReady();