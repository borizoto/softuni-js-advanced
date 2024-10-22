function notify(message) {
    const notificationRef = document.getElementById("notification");
    notificationRef.textContent = message;
    notificationRef.style.display = "block";
  
    notificationRef.addEventListener("click", function () {
      notificationRef.style.display = "none";
    })
  }