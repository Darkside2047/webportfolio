//For index word entrance effect

window.onload = function() {
    document.querySelectorAll('.animated-text').forEach(el => {
      const text = el.innerText;
      let formattedHtml = '';
      let delay = 0;  // Initialize delay counter separately
  
      for (const char of text) {
        if (char === ' ') {
          formattedHtml += char; // Add space directly
        } else {
          formattedHtml += `<span style="animation-delay:${delay * 0.1}s;">${char}</span>`;
          delay++; // Only increment delay for non-space characters
        }
      }
      el.innerHTML = formattedHtml;
    });
  }
  
 //Animation for images

 window.addEventListener('scroll', fadeInOnScroll);

function fadeInOnScroll() {
  const fadeInElements = document.querySelectorAll('.fade-in-scroll');
  for (let i = 0; i < fadeInElements.length; i++) {
    const elem = fadeInElements[i];
    const distanceFromTop = window.scrollY + window.innerHeight;
    if (distanceFromTop > elem.offsetTop) {
      elem.classList.add('visible');
    }
  }
}


