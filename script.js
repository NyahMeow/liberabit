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

// Function to initialize a more interactive 3D chart
function initThreeDChart() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lighting
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    camera.add(pointLight);

    // 3D Chart Elements (Example: Bars)
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });

    // Create multiple bars for a bar chart
    for (var i = 0; i < 5; i++) {
        var bar = new THREE.Mesh(geometry, material);
        bar.position.x = i * 2 - 5;
        bar.scale.y = Math.random() * 2 + 1; // Random height for each bar
        scene.add(bar);
    }

    camera.position.z = 5;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

// Event listener to run functions after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPublications();
    initThreeDChart();
});
