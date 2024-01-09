function toggleMenu() {
    var x = document.getElementById("navMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

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

function initThreeDChart() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    var chartContainer = document.getElementById('chartContainer');
    renderer.setSize(chartContainer.clientWidth, chartContainer.clientHeight);
    chartContainer.appendChild(renderer.domElement);

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.5);
    camera.add(pointLight);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });

    for (var i = 0; i < 5; i++) {
        var bar = new THREE.Mesh(geometry, material);
        bar.position.x = i * 2 - 5;
        bar.scale.y = Math.random() * 2 + 1;
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

document.addEventListener('DOMContentLoaded', function() {
    loadPublications();
    initThreeDChart();
});
