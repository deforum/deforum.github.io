/* JavaScript for the navigation toggle */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

/* JavaScript for the footer */
document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.footer-column h4');

    headers.forEach(function(header) {
        header.addEventListener('click', function () {
            var ul = this.nextElementSibling;

            // Remove active class from all other h4 elements and their ul
            headers.forEach(function(innerHeader) {
                if (innerHeader !== header) {
                    innerHeader.classList.remove('active');
                    innerHeader.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle the active class for the current h4 and its ul
            this.classList.toggle('active');
            ul.classList.toggle('active');
        });
    });
});

/* JavaScript for the github info */
fetch('https://api.github.com/repos/deforum-art/sd-webui-deforum')
    .then(response => response.json())
    .then(data => document.getElementById('star-count1').innerHTML = `<i class="far fa-star"></i> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/deforum-art/sd-webui-deforum/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date1').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/deforum-art/deforum-stable-diffusion')
    .then(response => response.json())
    .then(data => document.getElementById('star-count2').innerHTML = `<i class="far fa-star"></i> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/deforum-art/deforum-stable-diffusion/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date2').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/rewbs/sd-parseq')
    .then(response => response.json())
    .then(data => document.getElementById('star-count3').innerHTML = `<i class="far fa-star"></i> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/rewbs/sd-parseq/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date3').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/XmYx/ainodes-engine')
    .then(response => response.json())
    .then(data => document.getElementById('star-count4').innerHTML = `<i class="far fa-star"></i> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/XmYx/ainodes-engine/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date4').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

/* JavaScript for the animated background */
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('animatedBackground');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = [];
    const numLines = 10;

    class Line {
        constructor(x) {
            this.x = x;
            this.y = 0;
            this.width = 2;
            this.speed = Math.random() + 0.5;
            this.color = `hsl(${Math.random() * 20 + 210}, 80%, 100%)`;
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height + 300) { // Increased the range beyond canvas height for longer lines
                this.y = 0 - 300; // Start above the canvas to ensure the lines enter smoothly
                this.color = `hsl(${Math.random() * 20 + 210}, 80%, 100%)`;
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, 1); // Increased to 300 for longer lines
        }
    }

    function init() {
        for (let i = 0; i < numLines; i++) {
            let x = Math.random() * canvas.width;
            lines.push(new Line(x));
        }
    }

    function animate() {
        // Fill the canvas with a semi-transparent black rectangle for the fade effect
        ctx.fillStyle = 'rgba(10,10,10,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < lines.length; i++) {
            lines[i].update();
            lines[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    lines.length = 0; // clear the existing lines
    init(); // re-initialize lines
});
