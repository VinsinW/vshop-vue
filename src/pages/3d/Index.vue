<template>
  <div>
    <canvas id="three"></canvas>
  </div>
</template>

<script lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#eee')
      // scene.fog = new THREE.Fog('#eee', 20, 100)

      const canvas = document.querySelector('#three')
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      renderer.shadowMap.enabled = true

      const camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.5,
          8000
      )
      camera.position.z = 10

      const gltfLoader = new GLTFLoader()
      gltfLoader.load('/src/assets/3d/smartCity/scene.gltf', (gltf) => {
        console.log(gltf)
        let model = gltf.scene
        scene.add(model)
      })

      const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      hemLight.position.set(0, 48, 0)
      scene.add(hemLight)

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      //光源等位置
      dirLight.position.set(-10, 8, -5)
      //可以产生阴影
      dirLight.castShadow = true
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      scene.add(dirLight)

      let floorGeometry = new THREE.PlaneGeometry(8000, 8000)
      let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0x857ebb,
        // color:0x00FFFFFF,
        shininess: 0,
      })

      let floor = new THREE.Mesh(floorGeometry, floorMaterial)
      floor.rotation.x = -0.5 * Math.PI
      floor.receiveShadow = true
      floor.position.y = -0.001
      // scene.add(floor)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true

      function animate() {
        controls.update()
        renderer.render(scene, camera)
        requestAnimationFrame(animate)

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement
          camera.aspect = canvas.clientWidth / canvas.clientHeight
          camera.updateProjectionMatrix()
        }
      }
      animate()

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement
        var width = window.innerWidth
        var height = window.innerHeight
        var canvasPixelWidth = canvas.width / window.devicePixelRatio
        var canvasPixelHeight = canvas.height / window.devicePixelRatio

        const needResize =
            canvasPixelWidth !== width || canvasPixelHeight !== height
        if (needResize) {
          renderer.setSize(width, height, false)
        }
        return needResize
      }
    },
  },
}
</script>

<style scoped>
</style>