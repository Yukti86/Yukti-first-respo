// JavaScript to add interactivity to the ProVital page

// Search bar functionality (logs search queries)
const searchButton = document.querySelector('.search-bar button');
const searchInputs = document.querySelectorAll('.search-bar input');

searchButton.addEventListener('click', () => {
  const searchQuery = Array.from(searchInputs).map(input => input.value.trim());
  console.log('Search Query:', searchQuery);

  // Example action: Alert the user or send the query to a backend API
  if (searchQuery.every(query => query !== '')) {
    alert(Searching for: ${searchQuery.join(', ')});
  } else {
    alert('Please fill in all search fields.');
  }
});

// Hover effect for the six pillars section
const pillars = document.querySelectorAll('.pillar');

pillars.forEach(pillar => {
  pillar.addEventListener('mouseenter', () => {
    pillar.style.transform = 'scale(1.05)';
    pillar.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
    pillar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });

  pillar.addEventListener('mouseleave', () => {
    pillar.style.transform = 'scale(1)';
    pillar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});

// Toggle login options between Doctor and Patient
const authLinks = document.querySelectorAll('.auth a');

authLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const userType = link.textContent.includes('Doctor') ? 'Doctor' : 'Patient';
    alert(Redirecting to ${userType} login page...);

    // Example: Redirect to a specific URL (replace with actual URLs)
    const url = userType === 'Doctor' ? '/doctor-login' : '/patient-login';
    window.location.href = url;
  });
});

// Dynamic content loading example (placeholder for API integration)
const heroImages = document.querySelector('.hero-images');

function loadDynamicImages() {
  const images = [
    { src: 'image1.jpg', alt: 'Cooking' },
    { src: 'image2.jpg', alt: 'Yoga' },
    { src: 'image3.jpg', alt: 'Healthy lifestyle' },
    { src: 'image4.jpg', alt: 'Beach' },
  ];

  heroImages.innerHTML = ''; // Clear existing images

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    heroImages.appendChild(imgElement);
  });
}


loadDynamicImages();