function previewFile() {
  var preview = document.getElementById("disease-img");
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
    var a=document.createElement('a');
    a.href=preview.src;
    a.download = "output.jpeg"
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
