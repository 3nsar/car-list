import React from 'react'
import * as THREE from 'three';

const scene = new THREE.Scene()
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login