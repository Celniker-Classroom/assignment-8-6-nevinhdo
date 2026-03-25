// ----- Functions to implement -----

// 1) myFunc(): persistent counter

let counter = 0;
function myFunc(){
  counter ++ ;
  return counter;
  }

// 2) getRandomNum(max): 1..max int or 0 if invalid

function getRandomNum(max){
  if (max < 1) {
    return 0;
  }

  return Math.floor(Math.random() * max) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y){
  return Number(x) + Number(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance

function distance(x1, y1, x2, y2){
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  // Calculate discriminant
  const discriminant = b * b - 4 * a * c;
  
  // Handle negative discriminant
  if (discriminant < 0) {
    return null; // or return [] or throw an error, depending on requirements
  }
  
  // For non-negative discriminant, calculate the roots
  const sqrt = Math.sqrt(discriminant);
  const root1 = (-b + sqrt) / (2 * a);
  const root2 = (-b - sqrt) / (2 * a);
  
  return [root1, root2];
}

// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
