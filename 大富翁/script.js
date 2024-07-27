///游戏开始前
//svg缓存
var svgCache = {
  coin:'<svg height="30.0px" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 30 30" width="30.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path d="M15 0.833333C7.17597 0.833333 0.833333 7.17597 0.833333 15C0.833333 22.824 7.17597 29.1667 15 29.1667C22.824 29.1667 29.1667 22.824 29.1667 15C29.1667 7.17597 22.824 0.833333 15 0.833333Z" fill="#f6d397" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M15 5C9.47715 5 5 9.47715 5 15C5 20.5228 9.47715 25 15 25C20.5228 25 25 20.5228 25 15C25 9.47715 20.5228 5 15 5Z" fill="#f9e3ae" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M19.9375 6.3125C19.7525 6.205 19.5608 6.10833 19.3692 6.01333L6.01167 19.3525C6.1075 19.5458 6.205 19.7383 6.3125 19.925C6.675 20.5742 7.1125 21.1767 7.61083 21.7283L21.735 7.61083C21.1858 7.1125 20.585 6.67333 19.9375 6.3125ZM16.3375 5.09333C15.8942 5.03083 15.4475 4.99917 15 5C14.8033 5 14.6117 5.01833 14.4175 5.02917L6.73083 12.6917L5.03083 14.3917C5.01833 14.5942 5 14.795 5 15C5.005 15.8225 5.11417 16.6383 5.31167 17.4342L17.4425 5.30417C17.0783 5.21333 16.71 5.1425 16.3375 5.09333ZM24.54 11.9975C24.4475 11.7025 24.3417 11.4142 24.2233 11.1317C24.2183 11.12 24.2142 11.1092 24.21 11.0975C23.97 10.5325 23.6775 9.99667 23.3425 9.49083C23.29 9.4125 23.235 9.33583 23.1808 9.25917C23.1175 9.17 23.05 9.08417 22.9842 8.99667L22.2317 9.74667L9.0025 22.9883C10.6742 24.2458 12.7467 25 15 25L25 15C25 13.9742 24.8442 12.985 24.5575 12.0533C24.5517 12.035 24.5458 12.0158 24.54 11.9975Z" fill="#ffefca" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M14.1667 8.33333L14.1667 9.16667C12.3258 9.16667 10.8333 10.6592 10.8333 12.5C10.8333 14.3408 12.3258 15.8333 14.1667 15.8333L15.8333 15.8333C16.7542 15.8333 17.5 16.5792 17.5 17.5C17.5 18.4208 16.7542 19.1667 15.8333 19.1667L15.8333 17.5C15.8333 17.04 15.46 16.6667 15 16.6667C14.54 16.6667 14.1667 17.04 14.1667 17.5L14.1667 19.1667C13.2458 19.1667 12.5 18.4208 12.5 17.5C12.5 17.04 12.1267 16.6667 11.6667 16.6667C11.2067 16.6667 10.8333 17.04 10.8333 17.5C10.8333 19.3408 12.3258 20.8333 14.1667 20.8333L14.1667 21.6667C14.1667 22.1267 14.54 22.5 15 22.5C15.46 22.5 15.8333 22.1267 15.8333 21.6667L15.8333 20.8333C17.6742 20.8333 19.1667 19.3408 19.1667 17.5C19.1667 15.6592 17.6742 14.1667 15.8333 14.1667L15.8333 12.5C15.8333 12.04 15.46 11.6667 15 11.6667C14.54 11.6667 14.1667 12.04 14.1667 12.5L14.1667 14.1667C13.2458 14.1667 12.5 13.4208 12.5 12.5C12.5 11.5792 13.2458 10.8333 14.1667 10.8333L15.8333 10.8333C16.7542 10.8333 17.5 11.5792 17.5 12.5C17.5 12.96 17.8733 13.3333 18.3333 13.3333C18.7933 13.3333 19.1667 12.96 19.1667 12.5C19.1667 10.6592 17.6742 9.16667 15.8333 9.16667L15.8333 8.33333C15.8333 7.87333 15.46 7.5 15 7.5C14.54 7.5 14.1667 7.87333 14.1667 8.33333Z" fill="#8d6c9f" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M15 30C6.72917 30-3.55271e-15 23.2708-3.55271e-15 15C-3.55271e-15 6.72917 6.72917 0 15 0C23.2708 0 30 6.72917 30 15C30 23.2708 23.2708 30 15 30ZM15 1.66667C7.64833 1.66667 1.66667 7.64833 1.66667 15C1.66667 22.3517 7.64833 28.3333 15 28.3333C22.3517 28.3333 28.3333 22.3517 28.3333 15C28.3333 7.64833 22.3517 1.66667 15 1.66667Z" fill="#8d6c9f" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M20.8325 7.7275C20.6642 7.7275 20.4942 7.67667 20.3467 7.57083C19.8558 7.2175 19.3417 6.91583 18.8183 6.67583C18.4 6.48333 18.2167 5.98833 18.41 5.57C18.6017 5.15167 19.095 4.96833 19.515 5.16083C20.135 5.44667 20.7433 5.8025 21.32 6.21833C21.6933 6.4875 21.7783 7.00833 21.51 7.38167C21.3467 7.6075 21.0917 7.7275 20.8325 7.7275Z" fill="#8d6c9f" fill-rule="nonzero" opacity="1" stroke="none"/><path d="M15 25.8333C9.02667 25.8333 4.16667 20.9733 4.16667 15C4.16667 9.02667 9.02667 4.16667 15 4.16667C15.305 4.16667 15.605 4.18667 15.9025 4.21167C16.3608 4.24917 16.7017 4.6525 16.6642 5.11083C16.625 5.56917 16.2317 5.90917 15.7642 5.8725C15.5117 5.85167 15.2583 5.83333 15 5.83333C9.94583 5.83333 5.83333 9.94583 5.83333 15C5.83333 20.0542 9.94583 24.1667 15 24.1667C20.0542 24.1667 24.1667 20.0542 24.1667 15C24.1667 13.1942 23.6383 11.4458 22.64 9.945C22.3842 9.56167 22.4883 9.04417 22.8717 8.78917C23.2533 8.53417 23.7717 8.63833 24.0267 9.02083C25.2092 10.7967 25.8333 12.8642 25.8333 15C25.8333 20.9733 20.9733 25.8333 15 25.8333Z" fill="#8d6c9f" fill-rule="nonzero" opacity="1" stroke="none"/></svg>',
  pawn: '<svg id="theId" height="30.0px" stroke-miterlimit="10" style="fill: #ec0014;" version="1.1" viewBox="0 0 21.19 30" width="21.19px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path d="M10.5938 0C7.66989 0 5.3125 2.35739 5.3125 5.28125C5.3125 7.13635 6.37095 8.64316 7.8125 9.59375L5.3125 9.59375C3.97917 9.59375 3.97917 11.5937 5.3125 11.5938C5.68058 11.5938 7.14582 11.5937 8.25 11.5938C7.45361 17.3952 6.15271 20.8363 5.6875 21.9375L5.3125 21.9375C4.37089 21.9375 4.14292 22.9139 4.53125 23.5C2.49275 24.1726 0 25.7456 0 30L21.1875 30C21.1875 25.7456 18.6947 24.1726 16.6562 23.5C17.0446 22.9139 16.8166 21.9375 15.875 21.9375L15.5 21.9375C15.0348 20.8363 13.7339 17.3952 12.9375 11.5938C14.0417 11.5938 15.5069 11.5937 15.875 11.5938C17.2083 11.5938 17.2083 9.59375 15.875 9.59375L13.375 9.59375C14.8165 8.64316 15.875 7.13635 15.875 5.28125C15.875 2.35739 13.5176 0 10.5938 0Z" fill-rule="nonzero" opacity="1" stroke="none"/></svg>',
  house1: null,
  house2: null,
  house3: null,
}

//颜色对应码
const colors = { red: '#FF3B30', blue: '#007AFF', yellow: '#FF9500', green: '#34C759' }

//缩放棋盘大小
function updateSize() {
  document.body.style.transform = `scale(${window.innerWidth / 434 > window.innerHeight / 350 ? window.innerHeight / 350 : window.innerWidth / 434})`;
}
window.addEventListener("resize", updateSize);
window.addEventListener("DOMContentLoaded", updateSize);


///起始界面
//地点对象
function newPlace(low, high) {
  return { price: Math.floor(Math.random() * (high - low + 1) + low) * 10, max: high * 10, min: low * 10, owner: null, grade: 0, card: [] };
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
      range.id = "range" + placeIndex;
      range.className = "range";
      range.textContent = places[element].min + "-" + places[element].max;
      priceDiv.appendChild(range);
      //创建当前价格p
      const current = document.createElement("p");
      current.id = "current" + placeIndex;
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
    pawnDiv.name = element;
    mainDiv.appendChild(pawnDiv);

    document.getElementById("row" + rowIndex).appendChild(mainDiv);
  });
  placeIndex++;
});


///游戏运行
//开始
var pawns = {};
document.getElementById("startButton").addEventListener("click", function () {
  const startDiv = document.getElementById("startDiv");
  document.getElementById("pawnsDiv").style.display = "block";
  for (const choose of document.getElementsByName("choose")) {
    if (choose.checked) {
      pawns[choose.value] = { place: 0, coin: parseInt(document.getElementById("cionRange").value) };
      newPawn(document.getElementById("pawnDiv0"), choose.value);
      const mainDiv = document.createElement("div");
      mainDiv.id = choose.value + "card";
      /*  const pawnSvg = newPawn(choose.value);
      pawnSvg.id = undefined;
      pawnSvg.width = "11px";
      pawnSvg.height = "15px";
      mainDiv.appendChild(pawnSvg);*/
      const coinSvg = document.createElement("object");
      coinSvg.type = "image/svg+xml";
      coinSvg.data = "coin.svg";
      coinSvg.width = "11px";
      coinSvg.height = "15px";
      mainDiv.appendChild(coinSvg);
      const coinSpan = document.createElement("span");
      coinSpan.textContent = pawns[choose.value].coin;
      coinSpan.id = choose.value + 'Coin'
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
        if (document.getElementById("houseDiv" + Object.values(pawns)[turn].place)) {
          document.getElementById("buyButtons").style.display = "block";
          document.getElementById("question").textContent = `是否以${places[document.getElementById("pawnDiv" + Object.values(pawns)[turn].place).name].price * 2}元购买${document.getElementById("pawnDiv" + Object.values(pawns)[turn].place).name
            }？`;
        } else {
        }
      } else {
        Object.values(pawns)[turn].place = (Object.values(pawns)[turn].place + 1) % 46;
        document.getElementById(Object.keys(pawns)[turn]).remove();
        newPawn(document.getElementById("pawnDiv" + Object.values(pawns)[turn].place), Object.keys(pawns)[turn]);
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

//确定购买
document.getElementById("sureToBuy").addEventListener("click", function () {
  Object.values(pawns)[turn].coin -= places[document.getElementById("pawnDiv" + Object.values(pawns)[turn].place).name].price * 2
  document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin
  places[document.getElementById("pawnDiv" + Object.values(pawns)[turn].place).name].owner = Object.keys(pawns)[turn]
  //document.getElementById('houseDiv' + Object.values(pawns)[turn].place).appendChild(newPawn(Object.keys(pawns)[turn]))
})

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
function newPawn(content, color) {
  content.insertAdjacentHTML('beforeend', svgCache.pawn.replace("theId", color));
  const element = document.getElementById(color)
  element.width = "5px";
  element.height = "8px";
  element.style = `fill: ${colors[color]};`;
  return element;
}
