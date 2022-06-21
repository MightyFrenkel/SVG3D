export function exportCanvas(canvas: HTMLCanvasElement | null) {
  if (canvas === null) {
    console.error("Can no export canvas");
    return;
  }
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "CanvasAsImage.png");

  canvas.toBlob(function (blob) {
    if (blob === null) {
      console.error("Blob is null");
      return;
    }
    let url = URL.createObjectURL(blob);
    downloadLink.setAttribute("href", url);
    downloadLink.click();
  });
}
