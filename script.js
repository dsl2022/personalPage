// Array of navigation items
const navItems = [
    { text: 'Home', link: '#' },
    { text: 'About Me', link: '#' },
    { text: 'Portfolios', link: '#' },
    { text: 'Blog', link: '#' },
    { text: 'Contact Me', link: '#' }
  ];
  
  // Generate the navigation bar
  const navbar = document.getElementById('navbar');
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.text;
    li.appendChild(a);
    navbar.appendChild(li);
  });
  