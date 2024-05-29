document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var form = e.target;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.stats === 200) {
      alert("Form submitted successfully!");
    } else if (xhr.readyState === 4) {
      alert("Error: " + xhr.status);
    }
  };
  var data = new FormData(form);
  var params = new URLSearchParams(data).toString();
  xhr.send(params);
});
