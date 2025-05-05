import { WebGPURenderer } from 'three/webgpu';
import { Camera, Scene, PerspectiveCamera } from 'three';
import { Character } from "./character";

export class Game {
    #scene: Scene;
    #camera: Camera;
    character: Character;
    #renderer: WebGPURenderer;

    constructor() {
        this.#scene = new Scene();
        this.#camera =  new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.character = new Character();
        this.#renderer = new WebGPURenderer();
    }

    resetView() {
        const oldCamera = this.#camera;
        this.#renderer.setSize( window.innerWidth, window.innerHeight );
        this.#camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.#camera.position.set(...oldCamera.position.toArray());
        this.#camera.rotation.set(...oldCamera.rotation.toArray());
    }

    async init() {
        await this.character.load()
        this.#renderer.setSize( window.innerWidth, window.innerHeight );
        this.#renderer.alpha = true;
        document.body.appendChild( this.#renderer.domElement );
        this.#camera.position.set( 10, 10, 10);
        this.#camera.lookAt(this.character.mesh.position);
        this.#scene.add(this.character.mesh);
        this.#renderer.setAnimationLoop( this.render.bind(this) );
        window.addEventListener('resize', () => {
            console.log('resize');
            this.resetView();
        });
    }

    render() {
        this.character.update();
        this.#renderer.render( this.#scene, this.#camera );
    }
}
