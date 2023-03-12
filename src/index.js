import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import animate from "./animate";
import init from "./init";

const { scene, camera, renderer } = init();
document.body.appendChild(renderer.domElement);

// To check import jsm
const controls = new OrbitControls(camera, renderer.domElement);
console.log(controls);

// Add our cube
const geometry = new THREE.BoxGeometry(1, 1, 4);
const material = new THREE.MeshBasicMaterial({
  color: 0xdddddd,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

animate({ scene, camera, renderer, cube });
