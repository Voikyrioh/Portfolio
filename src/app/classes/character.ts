import { Mesh, MeshBasicMaterial, Vector3 } from "three";
import {Controls} from "./controls.ts";
import {degToRad} from "three/src/math/MathUtils";
import {TeapotGeometry} from "three/examples/jsm/geometries/TeapotGeometry";


export class Character {
    mesh: Mesh;
    controls: Controls;

    constructor() {
        const geometry = new TeapotGeometry( 1)
        const material = new MeshBasicMaterial( { color: 0x0000ff })
        this.mesh = new Mesh(geometry, material);
        this.mesh.position.set(0, 0, 0);
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
}
