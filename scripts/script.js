document.addEventListener("DOMContentLoaded", function () {
  // Select all timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');

  // Function to check if the timeline item is in the viewport
  function checkVisibility() {
    timelineItems.forEach(function (item) {
      const rect = item.getBoundingClientRect();
      
      // If the item is in the viewport, add the visible class
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible'); // Hide item if it's out of view
      }
    });
  }

  // Function to handle the visibility of timeline items based on scroll position
  function handleScroll() {
    checkVisibility();
  }

  // Initial visibility check
  checkVisibility();

  // Add event listener to detect scroll events
  window.addEventListener('scroll', handleScroll);

  // Timeline item flip functionality
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('flipped'); // Toggle the flip on click
    });
  });
});
