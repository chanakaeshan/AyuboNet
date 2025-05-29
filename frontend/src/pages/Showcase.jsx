// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { Leaf, Flower, Heart, Sun, Star } from 'lucide-react';

// export default function SriLankanAyurvedaShowcase() {
//   const mountRef = useRef(null);
//   const [activeProduct, setActiveProduct] = useState(null);
//   const [products] = useState([
//     { 
//       id: 1, 
//       name: 'Gotukola (Centella asiatica)', 
//       description: 'Known for its rejuvenating properties, Gotukola helps improve memory and longevity.',
//       color: '#4CAF50',
//       icon: Leaf
//     },
//     { 
//       id: 2, 
//       name: 'Cinnamon (Cinnamomum verum)', 
//       description: 'Sri Lankan cinnamon is renowned worldwide for its superior quality and medicinal properties.',
//       color: '#8D6E63',
//       icon: Star
//     },
//     { 
//       id: 3, 
//       name: 'Turmeric (Curcuma longa)', 
//       description: 'A powerful anti-inflammatory and antioxidant used in many Ayurvedic remedies.',
//       color: '#FFC107',
//       icon: Sun
//     },
//     { 
//       id: 4, 
//       name: 'Sandalwood Oil', 
//       description: 'Traditional oil used for skin care and spiritual practices with a calming aroma.',
//       color: '#FFEB3B',
//       icon: Heart
//     },
//     { 
//       id: 5, 
//       name: 'Jasmine (Jasminum grandiflorum)', 
//       description: 'Used in aromatherapy and Ayurvedic treatments for its calming effects.',
//       color: '#F5F5F5',
//       icon: Flower
//     }
//   ]);

//   useEffect(() => {
//     let scene, camera, renderer;
//     let objects = [];
//     let frameId;
//     let mouseDown = false;
//     let rotationSpeed = 0.01;
//     let autoRotate = true;
//     let lastMouseX = 0;
//     let lastMouseY = 0;

//     const init = () => {
//       // Scene setup
//       scene = new THREE.Scene();
//       scene.background = new THREE.Color(0xf0f8ea);

//       // Camera setup
//       camera = new THREE.PerspectiveCamera(
//         75,
//         mountRef.current.clientWidth / mountRef.current.clientHeight,
//         0.1,
//         1000
//       );
//       camera.position.z = 12;

//       // Renderer setup
//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//       mountRef.current.appendChild(renderer.domElement);

//       // Lighting
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//       scene.add(ambientLight);

//       const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//       directionalLight.position.set(0, 10, 10);
//       scene.add(directionalLight);

//       // Create product objects
//       createObjects();

//       // Handle window resize
//       window.addEventListener('resize', onWindowResize);
      
//       // Add mouse events for manual rotation
//       renderer.domElement.addEventListener('mousedown', onMouseDown);
//       renderer.domElement.addEventListener('mouseup', onMouseUp);
//       renderer.domElement.addEventListener('mousemove', onMouseMove);
//       renderer.domElement.addEventListener('touchstart', onTouchStart);
//       renderer.domElement.addEventListener('touchend', onTouchEnd);
//       renderer.domElement.addEventListener('touchmove', onTouchMove);
//       renderer.domElement.addEventListener('wheel', onWheel);

//       // Start animation
//       animate();
//     };

//     const createObjects = () => {
//       // Create a group to hold all objects (for easier rotation)
//       const group = new THREE.Group();
//       scene.add(group);
      
//       // Clear existing objects
//       objects.forEach(obj => scene.remove(obj));
//       objects = [];

//       // Create new objects in a circular pattern
//       const radius = 6;
//       products.forEach((product, index) => {
//         let geometry;
        
//         // Choose geometry based on product type
//         switch (product.id % 3) {
//           case 0:
//             geometry = new THREE.SphereGeometry(1, 32, 32);
//             break;
//           case 1:
//             geometry = new THREE.CylinderGeometry(0.7, 0.7, 2, 32);
//             break;
//           case 2:
//             geometry = new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16);
//             break;
//           default:
//             geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
//         }
        
//         // Create material with product color
//         const material = new THREE.MeshStandardMaterial({
//           color: product.color,
//           roughness: 0.5,
//           metalness: 0.2
//         });
        
//         const mesh = new THREE.Mesh(geometry, material);
        
//         // Position in a circle
//         const angle = (index / products.length) * Math.PI * 2;
//         mesh.position.x = Math.cos(angle) * radius;
//         mesh.position.y = Math.sin(angle) * radius;
        
//         // Store product info with the mesh
//         mesh.userData = { productId: product.id };
        
//         group.add(mesh);
//         objects.push(mesh);
//       });
      
//       // Add the group itself to objects for rotation
//       objects.push(group);
//     };

//     const onWindowResize = () => {
//       camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//     };
    
//     // Mouse event handlers for manual rotation
//     const onMouseDown = (event) => {
//       mouseDown = true;
//       lastMouseX = event.clientX;
//       lastMouseY = event.clientY;
//       autoRotate = false;
//     };
    
//     const onMouseUp = () => {
//       mouseDown = false;
//       autoRotate = true;
//     };
    
//     const onMouseMove = (event) => {
//       if (!mouseDown) return;
      
//       const deltaX = event.clientX - lastMouseX;
//       const deltaY = event.clientY - lastMouseY;
      
//       scene.rotation.y += deltaX * 0.005;
//       scene.rotation.x += deltaY * 0.005;
      
//       lastMouseX = event.clientX;
//       lastMouseY = event.clientY;
//     };
    
//     // Touch event handlers for mobile
//     const onTouchStart = (event) => {
//       if (event.touches.length === 1) {
//         mouseDown = true;
//         lastMouseX = event.touches[0].clientX;
//         lastMouseY = event.touches[0].clientY;
//         autoRotate = false;
//       }
//     };
    
//     const onTouchEnd = () => {
//       mouseDown = false;
//       autoRotate = true;
//     };
    
//     const onTouchMove = (event) => {
//       if (!mouseDown || event.touches.length !== 1) return;
      
//       const deltaX = event.touches[0].clientX - lastMouseX;
//       const deltaY = event.touches[0].clientY - lastMouseY;
      
//       scene.rotation.y += deltaX * 0.005;
//       scene.rotation.x += deltaY * 0.005;
      
//       lastMouseX = event.touches[0].clientX;
//       lastMouseY = event.touches[0].clientY;
//     };
    
//     // Zoom with mouse wheel
//     const onWheel = (event) => {
//       event.preventDefault();
      
//       // Zoom in/out with mouse wheel
//       camera.position.z += event.deltaY * 0.01;
      
//       // Limit zoom range
//       camera.position.z = Math.max(5, Math.min(20, camera.position.z));
//     };

//     const animate = () => {
//       frameId = requestAnimationFrame(animate);
      
//       // Auto-rotate scene if enabled
//       if (autoRotate) {
//         scene.rotation.y += rotationSpeed;
//       }
      
//       // Rotate individual objects
//       objects.forEach((obj) => {
//         if (obj instanceof THREE.Mesh) {
//           obj.rotation.x += 0.01;
//           obj.rotation.y += 0.01;
//         }
//       });
      
//       renderer.render(scene, camera);
//     };

//     const handleClick = (event) => {
//       // Only handle clicks, not drags
//       if (mouseDown) return;
      
//       const rect = renderer.domElement.getBoundingClientRect();
//       const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//       const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
//       const raycaster = new THREE.Raycaster();
//       const pointer = new THREE.Vector2(x, y);
      
//       raycaster.setFromCamera(pointer, camera);
      
//       // Get all meshes in the scene
//       const meshes = [];
//       scene.traverse((object) => {
//         if (object instanceof THREE.Mesh) {
//           meshes.push(object);
//         }
//       });
      
//       const intersects = raycaster.intersectObjects(meshes);
      
//       if (intersects.length > 0) {
//         const selected = intersects[0].object;
//         const productId = selected.userData.productId;
        
//         if (productId) {
//           setActiveProduct(products.find(p => p.id === productId) || null);
//         }
//       }
//     };

//     // Initialize
//     init();
    
//     // Add click event listener
//     renderer.domElement.addEventListener('click', handleClick);

//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener('resize', onWindowResize);
      
//       // Clean up event listeners
//       renderer.domElement.removeEventListener('click', handleClick);
//       renderer.domElement.removeEventListener('mousedown', onMouseDown);
//       renderer.domElement.removeEventListener('mouseup', onMouseUp);
//       renderer.domElement.removeEventListener('mousemove', onMouseMove);
//       renderer.domElement.removeEventListener('touchstart', onTouchStart);
//       renderer.domElement.removeEventListener('touchend', onTouchEnd);
//       renderer.domElement.removeEventListener('touchmove', onTouchMove);
//       renderer.domElement.removeEventListener('wheel', onWheel);
      
//       mountRef.current && mountRef.current.removeChild(renderer.domElement);
//     };
//   }, [products]);

//   return (
//     <div className="flex flex-col w-full h-full">
//       <div className="text-center py-4 bg-green-800 text-white">
//         <h1 className="text-3xl font-bold">Sri Lankan Ayurvedic Natural Products</h1>
//         <p className="text-lg">Explore traditional healing products in 3D - Click on objects to learn more</p>
//       </div>
      
//       <div className="flex flex-col md:flex-row h-full">
//         <div 
//           ref={mountRef} 
//           className="flex-grow h-96 md:h-screen md:w-2/3"
//         ></div>
        
//         <div className="md:w-1/3 bg-green-50 p-4 overflow-y-auto">
//           {activeProduct ? (
//             <div className="bg-white rounded-lg p-4 shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-3 rounded-full mr-3">
//                   {React.createElement(activeProduct.icon, { size: 24, color: activeProduct.color })}
//                 </div>
//                 <h2 className="text-2xl font-bold text-green-800">{activeProduct.name}</h2>
//               </div>
//               <p className="text-gray-700 mb-4">{activeProduct.description}</p>
//               <div className="bg-green-100 p-3 rounded-lg">
//                 <h3 className="font-semibold text-green-800 mb-2">Traditional Uses:</h3>
//                 <ul className="list-disc pl-5">
//                   <li className="mb-1">Ayurvedic medicine</li>
//                   <li className="mb-1">Skin care</li>
//                   <li className="mb-1">Natural remedies</li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center h-full text-center text-gray-600">
//               <div className="mb-4">
//                 <Leaf size={48} className="text-green-500 mx-auto" />
//               </div>
//               <h3 className="text-xl font-medium mb-2">Select a product</h3>
//               <p>Click on any 3D object to view details about Sri Lankan Ayurvedic products</p>
//             </div>
//           )}
          
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold text-green-800 mb-3">All Products:</h3>
//             <div className="grid grid-cols-1 gap-2">
//               {products.map(product => (
//                 <button
//                   key={product.id}
//                   onClick={() => setActiveProduct(product)}
//                   className={`flex items-center p-2 rounded-md ${
//                     activeProduct?.id === product.id 
//                       ? 'bg-green-200 border-l-4 border-green-600' 
//                       : 'bg-white hover:bg-green-50'
//                   }`}
//                 >
//                   <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${product.color}20` }}>
//                     {React.createElement(product.icon, { size: 16, color: product.color })}
//                   </div>
//                   <span>{product.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }