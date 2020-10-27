// Setting up project description
let info = {
    title: "Random Lines &mdash; 002",
    caption: "A practice in generative randomness."
}

document.getElementById('title').innerHTML = info.title;
document.getElementById('caption').innerHTML = info.caption;


// Begin code
const randomMin = 0.01;
const randomMax = 0.03;
const lines = 33; // Must be odd to evenly distribute lines on either side of x-axis
const lineGap = 2 // Space between the lines

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, 1, 1, 500);
let renderer = new THREE.WebGLRenderer({
    antialias: true
});

// Calculating the first point from where to begin drawing line on y-axis
let ycoord = ((lines - 1) / 2) * lineGap;

renderer.setSize(480, 480);
document.getElementById('scene').appendChild(renderer.domElement);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Create a white LineBasicMatetial
let material = new THREE.LineBasicMaterial({
    color: 0x919497
});

for (let i = 0; i < lines; i++) {
    // Defining geometry with vertices
    let points = [];
    points.push(new THREE.Vector3(-30, (ycoord - (lineGap * i)), 0)); // Starting point
    points.push(new THREE.Vector3(30, (ycoord - (lineGap * i)), 0)); // End point

    let geometry = new THREE.BufferGeometry().setFromPoints(points);

    let line = new THREE.Line(geometry, material);

    scene.add(line);
}
renderer.render(scene, camera);

// Animation loop rendering the scene with camera
let animate = () => {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

let getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

animate();