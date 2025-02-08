//创建网格
const gridHeight = Math.floor((window.innerHeight - 10) / 30);
const gridWidth = Math.floor((window.innerWidth - 300) / 30);
document.getElementById("ground").style.height = gridHeight * 30 + "px";
document.getElementById("ground").style.width = gridWidth * 30 + "px";
document.body.style.height = gridHeight * 30 + "px";
document.body.style.width = gridWidth * 30 + 290 + "px";
for (let x = 0; x < gridWidth; x++) {
  for (let y = 0; y < gridHeight; y++) {
    const newGrid = document.createElement("div");
    newGrid.id = `${x},${y}`;
    newGrid.classList.add("grid");
    newGrid.setAttribute("data-sterrain", Math.random() < 0.4 ? "grass" : "soil");
    document.getElementById("ground").appendChild(newGrid);
  }
}
document.getElementById("0,0").classList.add("redColor");
document.getElementById("0," + (gridHeight - 1)).classList.add("greenColor");
document.getElementById(gridWidth - 1 + "," + (gridHeight - 1)).classList.add("blueColor");
document.getElementById(gridWidth - 1 + ",0").classList.add("yellowColor");

/*监测鼠标
var keyList = [];
document.addEventListener("keydown", function (event) {
  if (!keyList.includes(event.key)) {
    keyList.push(event.key);
  }
  console.log(keyList);
});
document.addEventListener("keyup", function (event) {
  keyList.pop(keyList.indexOf(event.key));
});*/

//发射士兵
const qualities = {red:{energy:[1,2,3,4],blood:5,kill:1}, green:{energy:[3,6,9,12],blood:5,kill:1}, yellow:{energy:[2,4,6,9],blood:5,kill:1}, blue:{energy:[2,3,5,6],blood:5,kill:1}};
for (const color in qualities) {
qualities[color].energy.forEach(function (energy,index) {
    document.getElementById(color +(index+1)).lastElementChild.textContent = energy;
    document.getElementById(color + (index+1)).addEventListener("click", function (event) {
      let plans = [];
      document.querySelectorAll(".grid." + color + "Color").forEach(function (element) {
        if (element.children.length === 0) {
          plans.push(element);
        }
      });
      if (plans.length > 0) {
        plans[Math.floor(Math.random() * plans.length)].appendChild(document.getElementById(color + (index+1)).firstElementChild.cloneNode());
      }
    });
  })
}


//定时器
setInterval(function() {

}, 250);