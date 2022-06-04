import {
  Scene, 
  PerspectiveCamera, 
  WebGLRenderer, 
  Mesh, 
  PlaneGeometry, 
  DoubleSide, 
  MeshPhongMaterial, 
  DirectionalLight
} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000,
);
const renderer = new WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const planeGeometry = new PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new MeshPhongMaterial({
  color: 0xFF0000,
  side: DoubleSide,
});
const planeMesh = new Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

const light = new DirectionalLight(0xFFFFFF, 1);
light.position.set(0, 0, 1);
scene.add(light);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // planeMesh.rotation.x += 0.01;
}

animate();