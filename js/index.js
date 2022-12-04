let clock = new THREE.Clock();
let planetHolder = document.querySelector('.planet-holder')
const imgLoc = "../images/final-globe.png";
let camera = new THREE.PerspectiveCamera(45, planetHolder.offsetWidth / planetHolder.offsetHeight, 0.1, 10000),
light = new THREE.PointLight(0xFFFFFF, 2, 5000);
camera.position.set(1300, 0, 0),
scene = new THREE.Scene();
camera.lookAt(scene.position);
light.position.set(2000, 2000, 1500);
let marsGeo = new THREE.SphereGeometry (500, 32, 32),
marsMaterial = new THREE.MeshPhongMaterial(),
marsMesh = new THREE.Mesh(marsGeo, marsMaterial);
scene.add(marsMesh);   
let loader = new THREE.TextureLoader();
marsMaterial.map = loader.load(imgLoc);
var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
var dirLight = new THREE.DirectionalLight(0x000000, 0.1);
hemiLight.position.set(5, 100, 1000);
hemiLight.matrixAutoUpdate = false;
hemiLight.updateMatrix();
dirLight.position.set(30, 1, 1000);
dirLight.castShadow = false;
scene.add(hemiLight);
scene.add(dirLight);
let wraper = document.querySelector('.planet-holder')
let renderer = new THREE.WebGLRenderer({antialiasing : false, alpha: true, antialias: true});
renderer.setSize(window.innerWidth - 40, window.innerHeight -40)       
marsloc.appendChild(renderer.domElement);
renderer.setClearColor( 0x000000, 0 )
let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
function animate(){
  requestAnimationFrame(animate);
  controls.update();
  render();       
}
            
function render(){
   var delta = clock.getDelta();
   marsMesh.rotation.y += 0.5 * delta;
   renderer.clear();
   renderer.render(scene, camera); 
}
// Second argument is for opacity.
renderer.setClearColor(0xffffff, 0);
animate();
marsloc.addEventListener('mouseup', function() { 
  marsloc.style.cursor = "-moz-grab";
  marsloc.style.cursor = "-webkit-grab";
  marsloc.style.cursor = "grab";
})


document.querySelector('.planet-holder').addEventListener('click', function () {
  document.querySelector('body').classList.add('flipbook-show')
  
})

document.querySelector('.close-modal-icon').addEventListener('click', function() {
  document.querySelector('body').classList.remove('flipbook-show')
})

  document.querySelector('.thumbs-list-icon').addEventListener('click', function () {
    document.querySelector('body').classList.add('flipbook-thumbs-show')
    
  })
  document.querySelector('.close-thumbs-list').addEventListener('click', function () {
    document.querySelector('body').classList.remove('flipbook-thumbs-show')
    
  })