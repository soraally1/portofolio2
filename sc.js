document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
  });
  
// Toggle the navigation menu on mobile
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('active');
  });

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      projects.forEach(project => {
        if (filter === 'all') {
          project.style.display = 'block';
        } else {
          project.style.display = project.classList.contains(filter) ? 'block' : 'none';
        }
      });
    });
  });
  
  const nameElement = document.getElementById('name');
    const fullName = "Daffa Kumara Seta Rahmasina";
    let index = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = fullName.slice(0, index);
        nameElement.textContent = currentText;
        
        if (isDeleting) {
            index--;
            if (index < 0) {
                isDeleting = false;
                index = 0; 
            }
        } else {
            index++;
            if (index > fullName.length) {
                isDeleting = true;
            }
        }
        
        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    type();