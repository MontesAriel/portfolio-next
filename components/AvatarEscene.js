// import { useThree, useFrame } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useEffect, useRef } from "react";
// import { AmbientLight, Vector3, Box3, MathUtils } from "three";

// const AvatarEscene = () => {
//   const { scene, camera, size } = useThree();
//   const avatarRef = useRef();

//   useEffect(() => {
//     const loader = new GLTFLoader();

//     const loadModel = async () => {
//       const gltf = await loader.loadAsync("./avatar.glb");
//       const avatar = gltf.scene;
//       avatar.scale.set(1, 1, 1); // Ajusta la escala para hacer el avatar más grande
//       avatarRef.current = avatar;
//       scene.add(avatar);
//     };

//     loadModel();

//     const ambientLight = new AmbientLight(0xffffff, 1);
//     scene.add(ambientLight);

//     return () => {
//       if (avatarRef.current) {
//         scene.remove(avatarRef.current);
//       }
//       scene.remove(ambientLight);
//     };
//   }, [scene]);

//   useFrame(() => {
//     if (avatarRef.current) {
//       const { x, y, z } = avatarRef.current.position;

//       // Obtén la altura del avatar usando el bounding box
//       const boundingBox = new Box3().setFromObject(avatarRef.current);
//       const avatarHeight = boundingBox.getSize(new Vector3()).y;

//       // Ajusta la posición de la cámara para centrar el avatar en el medio del canvas
//       const aspect = size.width / size.height;
//       const distance = Math.abs(avatarHeight / (2 * Math.tan(MathUtils.degToRad(camera.fov / 2))));
//       const cameraY = avatarHeight / 2;
//       camera.position.set(x, cameraY, z + distance);
//       camera.lookAt(new Vector3(x, cameraY, z));
//     }
//   });

//   return null;
// };

// export default AvatarEscene;
