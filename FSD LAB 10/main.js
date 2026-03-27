// 1. Setup the Scene, Camera, and Renderer
const scene = new THREE.Scene();

// Camera setup: Field of View (75), Aspect Ratio, Near Clipping Plane, Far Clipping Plane
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// Append the canvas to the HTML document
document.body.appendChild(renderer.domElement);

// 2. Create a 3D Object (Mesh = Geometry + Material)
const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16); // A complex knot shape
const material = new THREE.MeshStandardMaterial({ 
    color: 0x0fc2c0, // Cyan-ish color
    roughness: 0.2,
    metalness: 0.8,
    wireframe: false 
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// 3. Add Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xe94560, 2, 50); // Reddish highlight
pointLight.position.set(-5, -5, 5);
scene.add(pointLight);

// 4. Animation Loop
function animate() {
    // Request the browser to call animate() 60 times per second
    requestAnimationFrame(animate);

    // Rotate the object slightly every frame
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    // Render the scene from the perspective of the camera
    renderer.render(scene, camera);
}

// 5. Handle Window Resizing
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();
