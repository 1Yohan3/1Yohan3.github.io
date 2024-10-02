// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const text = "Greetings User, Welcome to my Cybersecurity Projects";
    let index = 0;

    function type() {
        if (index < text.length) {
            cursor.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            cursor.classList.remove('cursor');
        }
    }

    type();
});


// Globe

const globe = Globe()
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-light.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .showGlobe(true)
    .showGraticules(true)
    .arcsData([])
    .pointOfView({ lat: 20, lng: 0, altitude: 3 }, 1000) // Set initial view
    .animateIn({ speed: 0.01, duration: 20000 }) // Slow spinning animation

// Adjusting the globe to give it a holographic effect
globe
    .pointsData([])
    .pointAltitude("size") // Set point altitude based on size if you add points later
    .pointColor(() => '#00ff00') // Green color for points
    .pointLabel(d => d.name) // You can customize labels if you add data