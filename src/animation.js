const bg = document.getElementById('animated-bg');
    
    // Create floating particles
    function createParticles() {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `rgba(${100 + Math.random() * 155}, ${150 + Math.random() * 105}, 255, ${Math.random() * 0.5 + 0.3})`;
        
        bg.appendChild(particle);
        
        // Animate particles
        anime({
          targets: particle,
          translateY: [
            { value: -20 - Math.random() * 40, duration: 2000 + Math.random() * 2000 },
            { value: 0, duration: 2000 + Math.random() * 2000 }
          ],
          translateX: [
            { value: -15 + Math.random() * 30, duration: 3000 + Math.random() * 2000 },
            { value: 0, duration: 3000 + Math.random() * 2000 }
          ],
          opacity: [
            { value: 0.8, duration: 1500 + Math.random() * 1500 },
            { value: 0.2, duration: 1500 + Math.random() * 1500 }
          ],
          loop: true,
          easing: 'easeInOutSine',
          delay: Math.random() * 2000
        });
      }
    }

    // Create animated grid
    function createGrid() {
      const lineCount = 12;
      
      // Vertical lines
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.width = '1px';
        line.style.height = '100%';
        line.style.left = `${(i / lineCount) * 100}%`;
        line.style.top = '0';
        bg.appendChild(line);
        
        anime({
          targets: line,
          opacity: [0.02, 0.08, 0.02],
          duration: 3000 + Math.random() * 2000,
          loop: true,
          easing: 'easeInOutQuad',
          delay: Math.random() * 1000
        });
      }
      
      // Horizontal lines
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.width = '100%';
        line.style.height = '1px';
        line.style.left = '0';
        line.style.top = `${(i / lineCount) * 100}%`;
        bg.appendChild(line);
        
        anime({
          targets: line,
          opacity: [0.02, 0.08, 0.02],
          duration: 3000 + Math.random() * 2000,
          loop: true,
          easing: 'easeInOutQuad',
          delay: Math.random() * 1000
        });
      }
    }

    // Create glowing orbs
    function createGlowOrbs() {
      const colors = [
        { r: 102, g: 126, b: 234 },
        { r: 118, g: 75, b: 162 },
        { r: 237, g: 100, b: 166 }
      ];
      
      colors.forEach((color, index) => {
        const orb = document.createElement('div');
        orb.className = 'glow-orb';
        
        const size = 300 + Math.random() * 200;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        
        bg.appendChild(orb);
        
        anime({
          targets: orb,
          translateX: [
            { value: -100 + Math.random() * 200, duration: 8000 + Math.random() * 4000 },
            { value: 0, duration: 8000 + Math.random() * 4000 }
          ],
          translateY: [
            { value: -100 + Math.random() * 200, duration: 10000 + Math.random() * 4000 },
            { value: 0, duration: 10000 + Math.random() * 4000 }
          ],
          scale: [
            { value: 1.2, duration: 6000 + Math.random() * 3000 },
            { value: 0.8, duration: 6000 + Math.random() * 3000 }
          ],
          opacity: [
            { value: 0.4, duration: 4000 },
            { value: 0.2, duration: 4000 }
          ],
          loop: true,
          easing: 'easeInOutSine',
          delay: index * 2000
        });
      });
    }

    // Create floating code symbols
    function createFloatingElements() {
      const symbols = ['{ }', '< >', '( )', '[ ]', '/>', '<=', '=>', '!='];
      const elementCount = 15;
      
      for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.className = 'float-element';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.fontSize = `${20 + Math.random() * 30}px`;
        element.style.color = `rgba(100, 150, 255, ${Math.random() * 0.3 + 0.1})`;
        element.style.fontFamily = 'monospace';
        element.style.fontWeight = 'bold';
        
        bg.appendChild(element);
        
        anime({
          targets: element,
          translateY: [
            { value: -50 - Math.random() * 100, duration: 8000 + Math.random() * 4000 },
            { value: 50 + Math.random() * 100, duration: 8000 + Math.random() * 4000 }
          ],
          translateX: [
            { value: -30 + Math.random() * 60, duration: 6000 + Math.random() * 4000 }
          ],
          rotate: [
            { value: -15 + Math.random() * 30, duration: 5000 + Math.random() * 3000 }
          ],
          opacity: [
            { value: 0.2, duration: 3000 },
            { value: 0.05, duration: 3000 }
          ],
          loop: true,
          easing: 'easeInOutSine',
          delay: Math.random() * 3000
        });
      }
    }

    // Initialize all animations
    createGlowOrbs();
    createGrid();
    createParticles();
    createFloatingElements();

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      const orbs = document.querySelectorAll('.glow-orb');
      
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      particles.forEach((particle, index) => {
        const speed = (index % 3 + 1) * 0.5;
        particle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
      
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });