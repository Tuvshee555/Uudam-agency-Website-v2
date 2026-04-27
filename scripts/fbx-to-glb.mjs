import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

global.self = global;
global.window = global;
global.Blob = class Blob { constructor(p) { this.parts = p; } };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MODELS = path.resolve(__dirname, "../public/models");

const fbxBuf = fs.readFileSync(path.join(MODELS, "airplane.fbx"));
const fbxAB = fbxBuf.buffer.slice(fbxBuf.byteOffset, fbxBuf.byteOffset + fbxBuf.byteLength);

const fbx = new FBXLoader().parse(fbxAB, "");

// Strip materials — export geometry only, apply textures at runtime
fbx.traverse((o) => {
  if (o.isMesh) {
    o.material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
  }
});

// Normalize scale + center
const box = new THREE.Box3().setFromObject(fbx);
const size = box.getSize(new THREE.Vector3()).length();
const scale = 4.5 / size;
fbx.scale.setScalar(scale);
fbx.position.sub(box.getCenter(new THREE.Vector3()).multiplyScalar(scale));

const exporter = new GLTFExporter();
exporter.parse(
  fbx,
  (glb) => {
    const outPath = path.join(MODELS, "airplane.glb");
    fs.writeFileSync(outPath, Buffer.from(glb));
    console.log(`✓ airplane.glb — ${(glb.byteLength / 1024).toFixed(0)} KB`);
  },
  (err) => { console.error(err); process.exit(1); },
  { binary: true }
);
