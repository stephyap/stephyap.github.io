// Social links configuration
const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' }
//   { name: 'Medium', url: '#' },
//   { name: 'Dribbble', url: '#' },
//   { name: 'Figma', url: '#' }
];

// Function to populate social links
function populateSocialLinks() {
  const socialLinksUl = document.querySelector('.social-links');
  if (socialLinksUl) {
    socialLinksUl.innerHTML = socialLinks.map(link => 
      `<li><a href="${link.url}">${link.name}</a></li>`
    ).join('');
  }
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', populateSocialLinks);