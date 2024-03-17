class Point {

  constructor(positionX, positionY, size, opacity, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.size = size;
    this.opacity = opacity;
    this.color = color;
  }

  render() {
    
    let content = `<div id='${this.positionY-this.positionX}' class="point" style="`;
    content += `top:${this.positionY}vh;`; // 0 en haut, 100 en bas
    content += `left:${this.positionX}vw;`; // 0 à gauche, 100 à droite
    content += `height:${this.size}px;`;
    content += `width:${this.size}px;`;
    content += `opacity:${this.opacity};`; // random ?
    content += `background-color:${this.color};`;
    content += `"></div>`;
    return content;

  }

}

const arrayPoints = [];
let divContent = document.getElementById("point");
let createTimeout, deleteTimeout;

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  const color = `rgb(${random(255)},${random(255)},${random(255)})`;
  return color;
}

function updateScreen() {
  divContent.innerHTML = ""                   // Les points apparaissent et restent
  for (i = 0; i < arrayPoints.length; i++) {
//    divContent.innerHTML = "" ;               // ici, les point apparaissent et disparaissent aussitôt
    divContent.innerHTML += arrayPoints[i].render();
  }
}

function createPoint() {
  arrayPoints.push(new Point(random(100), random(100), random(100), random(10)/10, randomColor()));
  updateScreen();
  createTimeout = setTimeout(createPoint, random(1000));
}

function deletePoint() {
  arrayPoints.splice(random(arrayPoints.length), 1);
  updateScreen();
  deleteTimeout = setTimeout(deletePoint, random(3000));
}

function stopTimer() {
  clearTimeout(createTimeout);
  clearTimeout(deleteTimeout);
  console.log("STOP");
}

createPoint();
deletePoint();

// ZONE DE TEST
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]]
    [array[j], array[i]];
    console.log("i : " + array[i]);
    console.log("j : " + array[j]);
	}
	return array;
}
