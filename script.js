function validateForm() {
    var x = document.forms["formKuis"].value;
    if (x == "" || x == null) {
      alert("All fields must be filled out");
      return false;
    }
  }