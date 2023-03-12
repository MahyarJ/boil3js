import * as THREE from "three";
import animate from "./animate";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // FOV - field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near
  1000 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
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

camera.position.z = 10;

animate({ scene, camera, renderer, cube });
