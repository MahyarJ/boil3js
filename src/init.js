import * as THREE from "three";

const init = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // FOV - field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near
    1000 // far
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.position.z = 10;

  return { scene, camera, renderer };
};

export default init;
