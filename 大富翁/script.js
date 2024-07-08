//地点对象
function newPlace(low, high) {
  return {price: Math.floor(Math.random() * (high - low + 1) + low) * 10, max: high * 10, min: low * 10, owner: null, grade: 0, card: []};
}
const places = {
  "湖北-武汉": newPlace(18, 22),
  "湖南-长沙": newPlace(17, 21),
  "广东-广州": newPlace(30, 35),
  "广西-南宁": newPlace(15, 18),
  "海南-海口": newPlace(18, 22),
  "重庆": newPlace(20, 24),
  "四川-成都": newPlace(22, 26),
  "贵州-贵阳": newPlace(16, 20),
  "云南-昆明": newPlace(20, 24),
  "西藏-拉萨": newPlace(14, 18), //row0,10个城市
  "上海": newPlace(60, 70),
  "江苏-南京": newPlace(25, 30),
  "浙江-杭州": newPlace(30, 35),
  "安徽-合肥": newPlace(20, 24),
  "福建-福州": newPlace(22, 26),
  "江西-南昌": newPlace(18, 22),
  "山东-济南": newPlace(22, 26), //row1,7个城市
  "北京": newPlace(80, 90),
  "天津": newPlace(35, 40),
  "河北-石家庄": newPlace(18, 22),
  "山西-太原": newPlace(16, 20),
  "辽宁-沈阳": newPlace(18, 22),
  "吉林-长春": newPlace(17, 21),
  "黑龙江-哈尔滨": newPlace(17, 21),
  "内蒙古-呼和浩特": newPlace(16, 20),
  "陕西-西安": newPlace(24, 28), //row2,9个城市
  "甘肃-兰州": newPlace(16, 20),
  "青海-西宁": newPlace(14, 18),
  "宁夏-银川": newPlace(15, 19),
  "新疆-乌鲁木齐": newPlace(18, 22),
  "香港": newPlace(150, 200),
  "澳门": newPlace(100, 150),
  "台湾-台北": newPlace(60, 70) //row3,7个城市
};

//生成棋盘
let placeIndex = 0;
[
  ["湖北-武汉", "湖南-长沙", "特大新闻", "广东-广州", "广西-南宁", "海南-海口", "游乐场", "重庆", "四川-成都", "贵州-贵阳", "云南-昆明", "西藏-拉萨"],
  ["上海", "江苏-南京", "特大新闻", "浙江-杭州", "安徽-合肥", "飞机场", "福建-福州", "江西-南昌", "山东-济南"],
  ["北京", "天津", "河北-石家庄", "特大新闻", "山西-太原", "辽宁-沈阳", "飞机场", "吉林-长春", "黑龙江-哈尔滨", "监狱", "内蒙古-呼和浩特", "陕西-西安"],
  ["甘肃-兰州", "青海-西宁", "宁夏-银川", "新疆-乌鲁木齐", "飞机场", "香港", "澳门", "国际大酒店", "台湾-台北"]
].forEach(function (rowElement, rowIndex) {
  rowElement.forEach(function (element) {
    placeIndex++;
    //创建主要div
    const mainDiv = document.createElement("div");
    mainDiv.className = "grid";
    //创建p容器
    const pContainer = document.createElement("div");
    pContainer.className = "container";
    mainDiv.appendChild(pContainer);
    //创建p
    const p = document.createElement("p");
    p.innerHTML = element.replace(/-/, "<br>");
    p.id = "name" + placeIndex;
    pContainer.appendChild(p);
    //如果是地方
    if (Object.keys(places).some((key) => key === element)) {
      //创建价格div
      const priceDiv = document.createElement("div");
      priceDiv.className = "price";
      mainDiv.appendChild(priceDiv);
      //创建金币图案svg
      const svg = document.createElement("object");
      svg.type = "image/svg+xml";
      svg.data = "coin.svg";
      svg.width = "5px";
      svg.height = "12px";
      priceDiv.appendChild(svg);
      //创建价格范围p
      const range = document.createElement("p");
      range.className = "range";
      range.textContent = places[element].min + "-" + places[element].max;
      priceDiv.appendChild(range);
      //创建当前价格p
      const current = document.createElement("p");
      current.className = "current";
      current.textContent = places[element].price;
      priceDiv.appendChild(current);
      //创建房子div
      const houseDiv = document.createElement("div");
      houseDiv.className = "houseDiv";
      houseDiv.id = "houseDiv" + placeIndex;
      mainDiv.appendChild(houseDiv);
    } else {
      //创建空行div
      if (rowIndex % 2 === 1) {
        const brDiv = document.createElement("div");
        brDiv.className = "brDiv";
        mainDiv.appendChild(brDiv);
      }
    }
    //创建棋子div
    const pawnDiv = document.createElement("div");
    pawnDiv.className = "pawnDiv";
    pawnDiv.id = "pawnDiv" + placeIndex;
    mainDiv.appendChild(pawnDiv);

    document.getElementById("row" + rowIndex).appendChild(mainDiv);
  });
  placeIndex++;
});

//开始
var pawns = {};
document.getElementById("startButton").addEventListener("click", function () {
  const startDiv = document.getElementById("startDiv");
  document.getElementById("pawnsDiv").style.display = "block";
  for (const choose of document.getElementsByName("choose")) {
    if (choose.checked) {
      pawns[choose.value] = {place: 0, coin: parseInt(document.getElementById("cionRange").value)};
      document.getElementById("pawnDiv0").appendChild(newPawn(choose.value));
      const mainDiv = document.createElement("div");
      mainDiv.id = choose.value + "card";
      const pawnSvg = newPawn(choose.value);
      pawnSvg.id = undefined;
      pawnSvg.width = "11px";
      pawnSvg.height = "15px";
      mainDiv.appendChild(pawnSvg);
      const coinSvg = document.createElement("object");
      coinSvg.type = "image/svg+xml";
      coinSvg.data = "coin.svg";
      coinSvg.width = "11px";
      coinSvg.height = "15px";
      mainDiv.appendChild(coinSvg);
      const coinSpan = document.createElement("span");
      coinSpan.textContent = pawns[choose.value].coin;
      mainDiv.appendChild(coinSpan);
      mainDiv.appendChild(document.createElement("br"));
      const skillSvg = document.createElement("object");
      skillSvg.type = "image/svg+xml";
      skillSvg.data = "skill.svg";
      skillSvg.width = "11px";
      skillSvg.height = "15px";
      mainDiv.appendChild(skillSvg);
      document.getElementById("pawnsDiv").appendChild(mainDiv);
    }
  }
  startDiv.parentNode.removeChild(startDiv);
  console.log(pawns);
  newDay();
});

//新的一天
var day = 0;
var turn;
function newDay() {
  day++;
  turn = -1;
  newTurn();
}

//骰子
var diceTimer, step;
document.getElementById("dice").addEventListener("click", function () {
  if (diceTimer) {
    clearInterval(diceTimer);
    //移动
    diceTimer = setInterval(function () {
      if (step < 0) {
        clearInterval(diceTimer);
        document.getElementById("diceDiv").style.display = "none";
        document.getElementById("actDiv").style.display = "block";
        if (Object.keys(places).some((key) => key === document.getElementById("name" + Object.values(pawns)[turn].place).textContent)) {
        } else {
        }
      } else {
        Object.values(pawns)[turn].place = (Object.values(pawns)[turn].place + 1) % 46;
        document.getElementById(Object.keys(pawns)[turn]).remove();
        console.log("pawnDiv" + Object.values(pawns)[turn].place);
        document.getElementById("pawnDiv" + Object.values(pawns)[turn].place).appendChild(newPawn(Object.keys(pawns)[turn]));
        step--;
      }
    }, 300);
  } else {
    //投骰子
    diceTimer = setInterval(function () {
      step = Math.floor(Math.random() * 6);
      document.getElementById("dice").textContent = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][step];
    }, 100);
  }
});

//新的回合
function newTurn() {
  turn++;
  if (turn === Object.keys(pawns).length) {
    newDay();
  } else {
    if (document.getElementsByClassName("turn")[0]) {
      document.getElementsByClassName("turn")[0].className = "";
    }
    document.getElementById(Object.keys(pawns)[turn] + "card").className = "turn";
    document.getElementById("diceDiv").style.display = "block";
    diceTimer = undefined;
  }
}

//金币范围数字调整
function updateRange() {
  document.getElementById("cionRangeNumber").textContent = document.getElementById("cionRange").value;
}

//显示棋子
function newPawn(color) {
  const element = document.createElement("object");
  element.type = "image/svg+xml";
  element.data = color + "Pawn.svg";
  element.width = "5px";
  element.height = "8px";
  element.id = color;
  return element;
}

// 缩放棋盘大小
function updateSize() {
  document.body.style.transform = `scale(${window.innerWidth / 434 > window.innerHeight / 350 ? window.innerHeight / 350 : window.innerWidth / 434})`;
  console.log(places);
}
window.addEventListener("resize", updateSize);
window.addEventListener("DOMContentLoaded", updateSize);
