import * as THREE from "three";
import { Shape } from "../models/Shape";

export function createShapeBufferGeometry(shape: Shape) {
  switch (shape) {
    case Shape.Cylinder:
      return new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32);
    case Shape.Sphere:
      return new THREE.SphereBufferGeometry(1, 32, 32);
    case Shape.Tetrahedron:
      return new THREE.TetrahedronBufferGeometry(2);
    case Shape.Cone:
      return new THREE.ConeGeometry(1.1, 1.7, 32);
    case Shape.Torus:
      return new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32);
    case Shape.Octahedron:
      return new THREE.OctahedronGeometry(2);
    case Shape.Box:
      new THREE.BoxBufferGeometry(2.5, 2.5, 2.5);
  }
}
