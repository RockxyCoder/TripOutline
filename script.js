document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add event listener for FAQ hover effect
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        const answer = item.getAttribute('data-answer');
        alert(answer); // Shows answer in an alert box; could be improved to display dynamically within the page
      });
    });
  });
  