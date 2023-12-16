document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.classList.add('show');
  });
  
  function closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.classList.remove('show');
  }