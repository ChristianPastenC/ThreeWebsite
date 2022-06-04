import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000,
);
const renderer = new WebGLRenderer();

console.log(scene);
console.log(camera);
console.log(renderer);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const boxGeometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({
  color: 0x00FF00
});
console.log(boxGeometry);
console.log(material);

const mesh = new Mesh(boxGeometry, material);
console.log(mesh);

scene.add(mesh);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
}

animate();