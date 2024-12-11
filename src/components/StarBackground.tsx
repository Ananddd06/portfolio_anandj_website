import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const StarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isStarMode, setIsStarMode] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    containerRef.current.appendChild(renderer.domElement);

    const objects: THREE.Object3D[] = [];
    const velocities: { x: number; y: number }[] = [];
    const starCount = 1000;

    function createStarField() {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2000;
        positions[i + 1] = (Math.random() - 0.5) * 2000;
        positions[i + 2] = (Math.random() - 0.5) * 2000;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        sizeAttenuation: true
      });

      const starField = new THREE.Points(geometry, material);
      objects.push(starField);
      scene.add(starField);
    }

    function createBouncingBalls() {
      for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.set(
          (Math.random() - 0.5) * 800,
          (Math.random() - 0.5) * 800,
          (Math.random() - 0.5) * 800
        );

        objects.push(sphere);
        velocities.push({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 });
        scene.add(sphere);
      }
    }

    function toggleMode() {
      // Clear existing objects
      objects.forEach(obj => scene.remove(obj));
      objects.length = 0;
      velocities.length = 0;

      if (isStarMode) {
        renderer.setClearColor(0xffffff); // Set white background
        createBouncingBalls();
      } else {
        renderer.setClearColor(0x000000); // Set black background
        createStarField();
      }

      setIsStarMode(!isStarMode);
    }

    createStarField();
    camera.position.z = 1000;

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    const handleClick = () => {
      toggleMode();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const animate = () => {
      requestAnimationFrame(animate);

      if (!isStarMode) {
        // Update bouncing balls
        objects.forEach((obj, i) => {
          if (obj instanceof THREE.Mesh) {
            obj.position.x += velocities[i].x;
            obj.position.y += velocities[i].y;

            // Bounce off walls
            if (Math.abs(obj.position.x) > 400) velocities[i].x *= -1;
            if (Math.abs(obj.position.y) > 400) velocities[i].y *= -1;

            // React to cursor
            const distance = Math.hypot(
              obj.position.x - mousePosition.current.x * 800,
              obj.position.y - mousePosition.current.y * 800
            );

            if (distance < 100) {
              velocities[i].x += (obj.position.x > mousePosition.current.x * 800 ? 0.5 : -0.5);
              velocities[i].y += (obj.position.y > mousePosition.current.y * 800 ? 0.5 : -0.5);
            }
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [isStarMode]);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarBackground;
