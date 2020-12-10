var startX = 0;
var startY = 0;
var page = document.querySelector('html')

function dragstart_handler(ev) {
  startX = ev.screenX + page.scrollLeft;
  startY = ev.screenY + page.scrollTop;
  let crt = ev.target.cloneNode(true);
  crt.style.display = "none";
  document.body.appendChild(crt);
  ev.dataTransfer.setDragImage(crt, 0, 0);
}

function dragover_handler(ev){
  let moveX = ev.screenX - startX;
  let moveY = ev.screenY - startY;
  page.scrollLeft = - moveX;
  page.scrollTop = - moveY;
}
