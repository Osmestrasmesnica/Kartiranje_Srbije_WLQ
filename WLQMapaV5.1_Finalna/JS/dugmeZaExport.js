// Load the html2canvas library
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>

<script>
  document.getElementById("exportButton").addEventListener("click", function() {
    let exportFormat = window.prompt("Please choose the export format (JPG or TIFF):");
    let mapContainer = document.getElementById("map");

    html2canvas(mapContainer).then(function(canvas) {
      if (exportFormat === "JPG") {
        let imageData = canvas.toDataURL("image/jpeg");
        download(imageData, "map.jpg", "image/jpeg");
      } else if (exportFormat === "TIFF") {
        // TIFF format is not supported by HTML5 canvas, so you will need to use a different library or approach to export as TIFF
      } else {
        alert("Invalid format. Please try again.");
      }
    });
  });

  function download(data, filename, type) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
  }
</script>
