import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3, Object3D } from "three";
import { Controls } from "./controls";
import { degToRad } from "three/src/math/MathUtils.js";
import object from '../assets/models/persona.glb?url';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";


export class Character {
    mesh: Object3D;
    controls: Controls;

    constructor() {
        this.mesh = new Mesh(new SphereGeometry(1), new MeshBasicMaterial({color: 0xff0000}));
        this.controls = new Controls();
    }

    private move({force, angle}: {force?: number, angle?: number}) {
        if (angle) {
            const o = degToRad(angle);
            this.mesh.rotation.y += o;
        }

        if (force) {
            const a = this.mesh.rotation.y;
            this.mesh.position.add(new Vector3(
                Math.cos(a) * 0.1 * force,
                0,
                Math.sin(a) * 0.1 * force * -1 // -1 because z axis is inverted
            ));
        }
    }

    update() {
        this.controls.isKeyPressed('z') ? this.move({force: 1} ) : null;
        this.controls.isKeyPressed('s') ? this.move({force: -1} ) : null;
        this.controls.isKeyPressed('q') ? this.move({angle: -1}) : null;
        this.controls.isKeyPressed('d') ? this.move({angle: 1} ) : null;
    }

    async load() {
        const loader = new GLTFLoader();
        const characterModel = await loader.loadAsync(object);
        this.mesh = characterModel.scene;
        this.mesh.position.set(0, 0, 0);
    }
}
