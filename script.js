// Function to toggle the navigation menu
function toggleMenu() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Function to load publications dynamically
function loadPublications() {
    // Example publications data
    var publications = [
        { title: "Publication 1", year: "2022" },
        { title: "Publication 2", year: "2021" },
        // Add more publications here
    ];

    var publicationList = document.getElementById("publicationList");

    publications.forEach(function(pub) {
        var p = document.createElement("p");
        p.innerHTML = pub.title + " - " + pub.year;
        publicationList.appendChild(p);
    });
}

// Function to initialize a basic 3D scene with Three.js
function initThreeDChart() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.getElementById('chartContainer').appendChild(renderer.domElement);

    // Add 3D objects here
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

// Event listener to run functions after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPublications();
    initThreeDChart();
});
