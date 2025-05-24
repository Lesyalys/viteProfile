
export function startAdd() {
    document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.querySelector('.stars-container');
  const starSVG = `<svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6601 41.7926L24.5815 41.5766L24.3658 41.497L1.5649 33.0031L24.4025 24.6084L24.6185 24.5297L24.6981 24.3141L33.192 1.51317L41.5867 24.3508L41.6654 24.5668L41.881 24.6464L64.6829 33.1403L41.8443 41.535L41.6283 41.6136L41.5487 41.8293L33.0548 64.6312L24.6601 41.7926Z" stroke="#D9D9D9"/>
  </svg>`;


  const starCount = 50;
  

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = starSVG;
    
  
    const sizes = ['star-small', 'star-medium', 'star-large'];
    star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
    
    
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    
    star.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    
    star.style.opacity = `${0.3 + Math.random() * 0.7}`;
    
    starsContainer.appendChild(star);
  }
  
  // Анимация плавающего движения
//   function animateStars() {
//     const stars = document.querySelectorAll('.star');
//     stars.forEach(star => {
//       // Медленное случайное движение
//       const x = (Math.random() - 0.5) * 2;
//       const y = (Math.random() - 0.5) * 2;
      
//       const currentX = parseFloat(star.style.left || '0');
//       const currentY = parseFloat(star.style.top || '0');
      
//       star.style.left = `${Math.max(0, Math.min(100, currentX + x))}%`;
//       star.style.top = `${Math.max(0, Math.min(100, currentY + y))}%`;
//     });
    
//     requestAnimationFrame(animateStars);
//   }
  
//   // Запускаем анимацию
//   animateStars();
});
}
