const animate = (props) => {
  const { scene, camera, renderer, cube } = props;

  // Animate box
  const updatedCube = cube;
  updatedCube.rotation.x += 0.01;
  updatedCube.rotation.y += 0.01;

  renderer.render(scene, camera);

  requestAnimationFrame(() =>
    animate({ scene, camera, renderer, cube: updatedCube })
  );
};

export default animate;
