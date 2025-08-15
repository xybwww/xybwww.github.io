/*-------------------------------------游戏预设---------------------------------------*/
//svg缓存
var svgCache = {
  coin: '<svg height="theHeight" stroke-miterlimit="10" width="theWidth" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M15 .833C7.176.833.833 7.176.833 15S7.176 29.167 15 29.167 29.167 22.824 29.167 15 22.824.833 15 .833z" fill="#f6d397"/><path d="M15 5C9.477 5 5 9.477 5 15s4.477 10 10 10 10-4.477 10-10S20.523 5 15 5z" fill="#f9e3ae"/><path d="M19.938 6.313a9.73 9.73 0 00-.569-.3L6.012 19.353c.096.193.193.385.3.572.363.65.8 1.252 1.299 1.803L21.735 7.611a9.728 9.728 0 00-1.797-1.298zm-3.6-1.22A9.453 9.453 0 0015 5c-.197 0-.388.018-.582.03L6.73 12.691l-1.7 1.7C5.018 14.594 5 14.795 5 15c.005.822.114 1.638.312 2.434l12.13-12.13a9.936 9.936 0 00-1.105-.21zm8.202 6.905a9.905 9.905 0 00-1.197-2.507c-.053-.079-.108-.155-.162-.232-.064-.089-.131-.175-.197-.262l-.752.75-13.23 13.241A9.941 9.941 0 0015 25l10-10c0-1.026-.156-2.015-.442-2.947l-.018-.056z" fill="#ffefca"/><path d="M14.167 8.333v.834a3.334 3.334 0 000 6.666h1.666a1.666 1.666 0 110 3.334V17.5a.834.834 0 00-1.666 0v1.667c-.921 0-1.667-.746-1.667-1.667a.834.834 0 00-1.667 0 3.333 3.333 0 003.334 3.333v.834a.834.834 0 001.666 0v-.834a3.333 3.333 0 000-6.666V12.5a.834.834 0 00-1.666 0v1.667a1.666 1.666 0 110-3.334h1.666c.921 0 1.667.746 1.667 1.667a.834.834 0 001.667 0 3.334 3.334 0 00-3.334-3.333v-.834a.834.834 0 00-1.666 0z" fill="#8d6c9f"/><path d="M15 30C6.73 30 0 23.27 0 15S6.73 0 15 0s15 6.73 15 15-6.73 15-15 15zm0-28.333C7.648 1.667 1.667 7.648 1.667 15S7.648 28.333 15 28.333 28.333 22.352 28.333 15 22.352 1.667 15 1.667z" fill="#8d6c9f"/><path d="M20.832 7.728a.83.83 0 01-.485-.157 9.175 9.175 0 00-1.529-.895.833.833 0 11.697-1.515c.62.286 1.228.642 1.805 1.057a.834.834 0 01-.488 1.51z" fill="#8d6c9f"/><path d="M15 25.833c-5.973 0-10.833-4.86-10.833-10.833S9.027 4.167 15 4.167c.305 0 .605.02.902.045a.834.834 0 01-.138 1.66A9.254 9.254 0 0015 5.833c-5.054 0-9.167 4.113-9.167 9.167 0 5.054 4.113 9.167 9.167 9.167 5.054 0 9.167-4.113 9.167-9.167a9.1 9.1 0 00-1.527-5.055.833.833 0 111.387-.924A10.753 10.753 0 0125.833 15c0 5.973-4.86 10.833-10.833 10.833z" fill="#8d6c9f"/></svg>',
  pawn: '<svg id="theId" height="8px" stroke-miterlimit="1" version="1.1" viewBox="0 0 21.19 30" width="5px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><path d="M10.5938 0C7.66989 0 5.3125 2.35739 5.3125 5.28125C5.3125 7.13635 6.37095 8.64316 7.8125 9.59375L5.3125 9.59375C3.97917 9.59375 3.97917 11.5937 5.3125 11.5938C5.68058 11.5938 7.14582 11.5937 8.25 11.5938C7.45361 17.3952 6.15271 20.8363 5.6875 21.9375L5.3125 21.9375C4.37089 21.9375 4.14292 22.9139 4.53125 23.5C2.49275 24.1726 0 25.7456 0 30L21.1875 30C21.1875 25.7456 18.6947 24.1726 16.6562 23.5C17.0446 22.9139 16.8166 21.9375 15.875 21.9375L15.5 21.9375C15.0348 20.8363 13.7339 17.3952 12.9375 11.5938C14.0417 11.5938 15.5069 11.5937 15.875 11.5938C17.2083 11.5938 17.2083 9.59375 15.875 9.59375L13.375 9.59375C14.8165 8.64316 15.875 7.13635 15.875 5.28125C15.875 2.35739 13.5176 0 10.5938 0Z" fill-rule="nonzero" opacity="1" stroke="none"/></svg>',
  house1:
    '<svg height="8" style="fill:theColor;" stroke-miterlimit="10" width="8" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 17.25h6v10.5h-6v-10.5zm22.5-4.5H15L7.5 2.25h15l7.5 10.5z"/><path d="M12 2.25H7.5L0 12.75h4.5L12 2.25zm4.5 15h6v6h-6v-6z"/><path d="M27 12.18v15.57H3V12.18" fill="none" stroke="theColor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2"/></svg>',
  house2:
    '<svg height="8" stroke-miterlimit="10" width="8" xmlns="http://www.w3.org/2000/svg" style="fill:theColor;" viewBox="0 0 30 30"><path d="M9.224 12.273L15 9.385l5.776 2.888H30l-6.015-9.546H6.01L0 12.273h9.224zM24.546 15v9.546h-2.728V15h-1.685L15 12.434 9.867 15H8.182v9.546H5.455V15H2.727v9.546a2.73 2.73 0 002.728 2.727h8.181v-4.091a1.364 1.364 0 012.728 0v4.09h8.181a2.73 2.73 0 002.728-2.726V15h-2.727zM15 19.09a1.364 1.364 0 11.001-2.727A1.364 1.364 0 0115 19.09z"/></svg>',
  house3:
    '<svg height="8" stroke-miterlimit="10" width="8" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" style="fill:theColor;stroke:theColor;" viewBox="0 0 30 30"><path d="M27.604 28.75H2.396V3.542A2.293 2.293 0 014.688 1.25h20.625a2.293 2.293 0 012.291 2.292V28.75z" fill="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2.5"/><path d="M12.708 23.02h4.584v5.73h-4.584v-5.73z" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2.5"/><path d="M10.417 24.167H5.833m11.459-4.584h-4.584m-2.291 0H5.833M24.167 15h-4.584m4.584 4.583h-4.584m4.584 4.584h-4.584M17.292 15h-4.584m-2.291 0H5.833m18.334-4.583h-4.584m-2.291 0h-4.584m-2.291 0H5.833m18.334-4.584h-4.584m-2.291 0h-4.584m-2.291 0H5.833" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="2.5"/></svg>',
};
//颜色对应码
const colors = { red: '#FF3B30', blue: '#007AFF', yellow: '#E4AF0A', green: '#34C759' };
//缩放棋盘大小
function updateSize() {
  document.body.style.transform = `scale(${window.innerWidth / 434 > window.innerHeight / 350 ? window.innerHeight / 350 : window.innerWidth / 434})`;
}
window.addEventListener('resize', updateSize);
window.addEventListener('DOMContentLoaded', updateSize);
//城市地点数据
var places = {
  '湖北-武汉': newPlace(18, 22),
  '湖南-长沙': newPlace(17, 21),
  '广东-广州': newPlace(30, 35),
  '广西-南宁': newPlace(15, 18),
  '海南-海口': newPlace(18, 22),
  重庆: newPlace(20, 24),
  '四川-成都': newPlace(22, 26),
  '贵州-贵阳': newPlace(16, 20),
  '云南-昆明': newPlace(20, 24),
  '西藏-拉萨': newPlace(14, 18), //row0,10个城市
  上海: newPlace(60, 70),
  '江苏-南京': newPlace(25, 30),
  '浙江-杭州': newPlace(30, 35),
  '安徽-合肥': newPlace(20, 24),
  '福建-福州': newPlace(22, 26),
  '江西-南昌': newPlace(18, 22),
  '山东-济南': newPlace(22, 26), //row1,7个城市
  北京: newPlace(80, 90),
  天津: newPlace(35, 40),
  '河北-石家庄': newPlace(18, 22),
  '山西-太原': newPlace(16, 20),
  '辽宁-沈阳': newPlace(18, 22),
  '吉林-长春': newPlace(17, 21),
  '黑龙江-哈尔滨': newPlace(17, 21),
  '内蒙古-呼和浩特': newPlace(16, 20),
  '陕西-西安': newPlace(24, 28), //row2,9个城市
  '甘肃-兰州': newPlace(16, 20),
  '青海-西宁': newPlace(14, 18),
  '宁夏-银川': newPlace(15, 19),
  '新疆-乌鲁木齐': newPlace(18, 22),
  香港: newPlace(150, 200),
  澳门: newPlace(100, 150),
  '台湾-台北': newPlace(60, 70), //row3,7个城市
};
//地点对象
function newPlace(low, high) {
  return { price: Math.floor(Math.random() * (high - low + 1) + low) * 10, max: high * 10, min: low * 10, owner: null, grade: 0, skill: [] };
}
/*-------------------------------------起始界面---------------------------------------*/
//选择棋子显示
for (let color in colors) {
  newRegularPawn(document.getElementById(color + 'ChooseLabel'), color, '20px', '15px');
}
//生成棋盘
let placeIndex = 0;
[
  ['湖北-武汉', '湖南-长沙', '特大新闻', '广东-广州', '广西-南宁', '海南-海口', '公司', '重庆', '四川-成都', '贵州-贵阳', '云南-昆明', '西藏-拉萨'],
  ['上海', '江苏-南京', '特大新闻', '浙江-杭州', '安徽-合肥', '飞机场', '福建-福州', '江西-南昌', '山东-济南'],
  ['北京', '天津', '河北-石家庄', '特大新闻', '山西-太原', '辽宁-沈阳', '飞机场', '吉林-长春', '黑龙江-哈尔滨', '监狱', '内蒙古-呼和浩特', '陕西-西安'],
  ['甘肃-兰州', '青海-西宁', '宁夏-银川', '新疆-乌鲁木齐', '飞机场', '香港', '澳门', '神秘海滩', '台湾-台北'],
].forEach(function (rowElement, rowIndex) {
  rowElement.forEach(function (element) {
    placeIndex++;
    //创建主要div
    const mainDiv = document.createElement('div');
    mainDiv.className = 'grid';
    mainDiv.dataset.idx = placeIndex;
    //创建p容器
    const pContainer = document.createElement('div');
    pContainer.className = 'container';
    mainDiv.appendChild(pContainer);
    //创建p
    const p = document.createElement('p');
    p.innerHTML = element.replace(/-/, '<br>');
    pContainer.appendChild(p);
    //如果是地方
    if (Object.keys(places).some((key) => key === element)) {
      //创建价格div
      const priceDiv = document.createElement('div');
      priceDiv.className = 'price';
      mainDiv.appendChild(priceDiv);
      //创建金币图案svg
      newCoin(priceDiv, '12px', '5px');
      //创建价格范围p
      const range = document.createElement('p');
      range.id = 'range' + placeIndex;
      range.className = 'range';
      range.textContent = places[element].min + '-' + places[element].max;
      priceDiv.appendChild(range);
      //创建当前价格p
      const current = document.createElement('p');
      current.id = 'current' + placeIndex;
      current.className = 'current';
      current.textContent = places[element].price;
      priceDiv.appendChild(current);
      //创建房子div
      const houseDiv = document.createElement('div');
      houseDiv.className = 'houseDiv';
      houseDiv.id = 'houseDiv' + placeIndex;
      mainDiv.appendChild(houseDiv);
    } else {
      //创建空行div
      if (rowIndex % 2 === 1) {
        const brDiv = document.createElement('div');
        brDiv.className = 'brDiv';
        mainDiv.appendChild(brDiv);
      }
    }
    //创建棋子div
    const pawnDiv = document.createElement('div');
    pawnDiv.className = 'pawnDiv';
    pawnDiv.id = 'pawnDiv' + placeIndex;
    pawnDiv.dataset.placeName = element;
    mainDiv.appendChild(pawnDiv);
    document.getElementById('row' + rowIndex).appendChild(mainDiv);
  });
  placeIndex++;
});
/*-------------------------------------游戏开始---------------------------------------*/
var pawns = {};
document.getElementById('startButton').addEventListener('click', function () {
  const startDiv = document.getElementById('startDiv');
  document.getElementById('pawnsDiv').style.display = 'block';
  for (const choose of document.getElementsByName('choose')) {
    if (choose.checked) {
      pawns[choose.value] = { place: 0, coin: parseInt(document.getElementById('cionRange').value), bank: 0 };
      newPawn(document.getElementById('pawnDiv0'), choose.value);
      const mainDiv = document.createElement('div');
      mainDiv.id = choose.value + 'card';
      newRegularPawn(mainDiv, choose.value, '12px', '11px');
      newCoin(mainDiv, '11px', '11px');
      const coinSpan = document.createElement('span');
      coinSpan.textContent = pawns[choose.value].coin;
      coinSpan.id = choose.value + 'Coin';
      mainDiv.appendChild(coinSpan);
      /*mainDiv.appendChild(document.createElement("br"));
      const skillSvg = document.createElement("object");
      skillSvg.type = "image/svg+xml";
      skillSvg.data = "skill.svg";
      skillSvg.width = "11px";
      skillSvg.height = "12px";
      mainDiv.appendChild(skillSvg);*/
      const skillSpan = document.createElement('span');
      skillSpan.textContent = pawns[choose.value].skill;
      skillSpan.id = choose.value + 'Skill';
      mainDiv.appendChild(skillSpan);
      document.getElementById('pawnsDiv').appendChild(mainDiv);
    }
  }
  startDiv.parentNode.removeChild(startDiv);
  if (diceNum) document.getElementById('dice1').remove();
  newTurn();
});
/*-------------------------------------游戏运行---------------------------------------*/
//新的一天
var day = 0,
  turn = -1;
function newDay() {
  for (let element in places) {
    places[element].price = Math.floor((Math.random() * (places[element].max - places[element].min)) / 10 + 1) * 10 + places[element].min;
    document.getElementById('current' + document.querySelector(`div[data-place-name=${element}]`).id.replace('pawnDiv', '')).textContent = places[element].price;
  }
  //更新银行钱数
  for (let pawn in pawns) {
    pawns[pawn].bank += pawns[pawn].bank * 0.03;
  }
  day++;
  turn = -1;
  newTurn();
}
//骰子
var diceTimer, step, act, testStep;
function rollDice() {
  step = Math.floor(Math.random() * 6);
  document.getElementById('dice0').textContent = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][step];
  if (!diceNum) {
    const step1 = Math.floor(Math.random() * 6);
    document.getElementById('dice1').textContent = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][step1];
    step += step1 + 1;
  }
  if (testStep !== undefined) {
    step = testStep - 1;
  }
}
document.getElementById('diceDiv').addEventListener('click', function () {
  if (diceTimer) {
    clearInterval(diceTimer);
    //移动
    diceTimer = setInterval(function () {
      if (step < 0) {
        clearInterval(diceTimer);
        document.getElementById('diceAndBank').style.display = 'none';
        document.getElementById('actDiv').style.display = 'block';
        document.querySelectorAll('.showingButtons').forEach(function (element) {
          element.className = '';
        });
        //显示按钮
        if (document.getElementById('houseDiv' + Object.values(pawns)[turn].place)) {
          switch (places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner) {
            case null:
              if (Object.values(pawns)[turn].coin >= places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * 1) {
                document.getElementById('sure').className = 'showingButtons';
              } else {
                document.getElementById('sure').className = 'hidingButtons';
              }
              document.getElementById('cancel').className = 'showingButtons';
              document.getElementById('question').innerHTML = `是否以${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * 1}${newCoinInline()}购买${
                document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName
              }？<br>（范围${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].min * 1}~${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].max * 1}）`;
              act = 'buy';
              break;
            case Object.keys(pawns)[turn]:
              if (places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].grade < 3) {
                if (Object.values(pawns)[turn].coin >= places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * 1) {
                  document.getElementById('sure').className = 'showingButtons';
                } else {
                  document.getElementById('sure').className = 'hidingButtons';
                }
                document.getElementById('cancel').className = 'showingButtons';
                document.getElementById('question').innerHTML = `是否以${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * 1}${newCoinInline()}升级${
                  document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName
                }？<br>（范围${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].min * 1}~${places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].max * 1}`;
              } else {
                document.getElementById('cancel').className = 'showingButtons';
                document.getElementById('question').innerHTML = `${document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName}已满级`;
              }
              act = 'upgrade';
              break;
            default:
              document.getElementById('sure').className = 'showingButtons';
              document.getElementById('question').innerHTML = `你要向${document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName}的地主${newRegularPawnInline(places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner)}支付${
                places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].grade
              }${newCoinInline()}`;
              act = 'pay';
              break;
          }
        } else if (document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName === 'GO') {
          act = 'go';
          document.getElementById('sure').className = 'showingButtons';
          document.getElementById('cancel').className = 'hidingButtons';
          document.getElementById('question').innerHTML = `经过起点，获得200${newCoinInline()}`;
        } else {
          act = 'news';
          specialNews();
        }
      } else {
        Object.values(pawns)[turn].place = (Object.values(pawns)[turn].place + 1) % stepRange;
        document.getElementById(Object.keys(pawns)[turn]).remove();
        newPawn(document.getElementById('pawnDiv' + Object.values(pawns)[turn].place), Object.keys(pawns)[turn]);
        step--;
      }
    }, 200);
  } else {
    //投骰子
    diceTimer = setInterval(rollDice, 100);
  }
});
//新的回合
function newTurn() {
  if (gameOver) return;
  turn++;
  document.getElementById('actDiv').style.display = 'none';
  // 跳过破产玩家
  while (turn < Object.keys(pawns).length && document.getElementById(Object.keys(pawns)[turn] + 'card').classList.contains('bankrupt')) {
    turn++;
  }
  if (turn === Object.keys(pawns).length) {
    newDay();
  } else {
    if (document.getElementsByClassName('turn')[0]) {
      document.getElementsByClassName('turn')[0].className = '';
    }
    document.getElementById(Object.keys(pawns)[turn] + 'card').className = 'turn';
    document.getElementById('diceAndBank').style.display = 'flex';
    //更新银行钱数
    document.getElementById('bankMoney').textContent = Math.floor(Object.values(pawns)[turn].bank);
    diceTimer = undefined;
  }
}
/*-------------------------------------按钮检测---------------------------------------*/
//确定
document.getElementById('sure').addEventListener('click', function () {
  switch (act) {
    case 'buy':
    case 'upgrade':
      Object.values(pawns)[turn].coin -= places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * 1;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
      places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner = Object.keys(pawns)[turn];
      places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].grade += 1;
      newHouse(document.getElementById('houseDiv' + Object.values(pawns)[turn].place), Object.keys(pawns)[turn], places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].grade);
      checkBankrupt(Object.keys(pawns)[turn]);
      break;
    case 'pay':
      const pricePay = places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].price * places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].grade;
      Object.values(pawns)[turn].coin -= pricePay;
      pawns[places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner].coin += pricePay;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
      document.getElementById(places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner + 'Coin').textContent = pawns[places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner].coin;
      checkBankrupt(Object.keys(pawns)[turn]);
      checkBankrupt(places[document.getElementById('pawnDiv' + Object.values(pawns)[turn].place).dataset.placeName].owner);
      break;
    case 'news':
      thisEvent.effect(pawns, turn);
      checkBankrupt(Object.keys(pawns)[turn]);
      break;
    case 'go':
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
      break;
  }
  newTurn();
});
//取消
document.getElementById('cancel').addEventListener('click', function () {
  newTurn();
});
/*------------------------------------特殊机制----------------------------------------*/
var thisEvent, randKey;
//特大新闻函数
function specialNews() {
  const idx = Math.floor(Math.random() * events.length);
  thisEvent = events[idx];
  document.getElementById('question').innerHTML = '特大新闻：' + thisEvent.text(pawns, turn);
  document.getElementById('sure').className = 'showingButtons';
  document.getElementById('cancel').className = 'hidingButtons';
}
//膨胀银行
//存钱
document.getElementById('bankIn').addEventListener('click', function () {
  const playerKey = Object.keys(pawns)[turn];
  if (pawns[playerKey].coin >= 100) {
    pawns[playerKey].coin -= 100;
    pawns[playerKey].bank += 100;
    document.getElementById(playerKey + 'Coin').textContent = pawns[playerKey].coin;
    document.getElementById('bankMoney').textContent = Math.floor(pawns[playerKey].bank);
  }
});
//取钱
document.getElementById('bankOut').addEventListener('click', function () {
  const playerKey = Object.keys(pawns)[turn];
  if (pawns[playerKey].bank >= 100) {
    pawns[playerKey].coin += 100;
    pawns[playerKey].bank -= 100;
    document.getElementById(playerKey + 'Coin').textContent = pawns[playerKey].coin;
    document.getElementById('bankMoney').textContent = Math.floor(pawns[playerKey].bank);
  }
});
/*------------------------------------检测函数----------------------------------------*/
var gameOver = false;
function checkBankrupt(playerKey) {
  if (pawns[playerKey].coin < 0) {
    document.getElementById(playerKey + 'card').className = 'bankrupt';
    alert(`玩家${playerKey}破产！退出游戏。`);
    //如果全部破产
    if (document.getElementsByClassName('bankrupt').length === Object.keys(pawns).length) {
      alert('所有玩家破产，游戏结束！');
      gameOver = true;
    }
    // 清除棋子
    const pawnElem = document.getElementById(playerKey);
    if (pawnElem) pawnElem.remove();
    // 清除房产
    for (let place in places) {
      if (places[place].owner === playerKey) {
        places[place].owner = null;
        places[place].grade = 0;
        // 清空房子显示
        const idx = document.querySelector(`div[data-place-name="${place}"]`).id.replace('pawnDiv', '');
        const houseDiv = document.getElementById('houseDiv' + idx);
        if (houseDiv) houseDiv.innerHTML = '';
      }
    }
  }
}
/*------------------------------------后台函数----------------------------------------*/
//金币范围数字调整
function updateCoinRange() {
  document.getElementById('cionRangeNumber').textContent = document.getElementById('cionRange').value;
}
//步数区域范围数字调整
var stepRange = 46;
function updateStepRange() {
  stepRange = document.getElementById('stepRange').value;
  document.getElementById('stepRangeNumber').textContent = stepRange;
  //遍历所有grid，超过范围的加上.banned类
  document.querySelectorAll('.grid').forEach(function (element) {
    if (parseInt(element.dataset.idx) > parseInt(document.getElementById('stepRange').value) - 1) {
      element.classList.add('banned');
    } else {
      element.classList.remove('banned');
    }
  });
}
//骰子数量改变
var diceNum = true;
function updateDiceNum() {
  diceNum = document.getElementById('diceNum').value === '0';
  document.getElementById('diceNumShow').textContent = diceNum ? '单骰' : '双骰';
}
//显示svg
function newPawn(content, color) {
  content.insertAdjacentHTML('beforeend', svgCache.pawn.replace('theId', color));
  const element = document.getElementById(color);
  element.style = `fill: ${colors[color]};`;
}
function newHouse(content, color, grade) {
  if (grade > 1) {
    content.removeChild(content.firstElementChild);
  }
  content.insertAdjacentHTML('beforeend', svgCache['house' + grade].replace(/theColor/g, colors[color]));
}
function newRegularPawn(content, color, height, width) {
  content.insertAdjacentHTML('beforeend', svgCache.pawn.replace('id="theId" ', `style="fill: ${colors[color]};"`).replace('5px', width).replace('8px', height));
}
function newCoin(content, height, width) {
  content.insertAdjacentHTML('beforeend', svgCache.coin.replace('theWidth', width).replace('theHeight', height));
}
function newCoinInline() {
  return svgCache.coin.replace('theWidth', '21px').replace('theHeight', '20px').replace(' ', ' class="svgDown" ');
}
function newRegularPawnInline(color) {
  return svgCache.pawn.replace('id="theId" ', `style="fill: ${colors[color]};" class="svgDown" `).replace('5px', '15px').replace('8px', '20px');
}
//监测键盘
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    if (document.getElementById('actDiv').style.display === 'block' && document.getElementById('sure').className === 'showingButtons') {
      document.getElementById('sure').click();
    } else if (document.getElementById('diceAndBank').style.display === 'flex') {
      document.getElementById('diceDiv').click();
    } else if (document.getElementById('startDiv')) {
      document.getElementById('startButton').click();
    } else if (document.getElementById('pawnsDiv').style.display === 'block') {
      newTurn();
    }
  } else if (event.key === 'Backspace') {
    if (document.getElementById('actDiv').style.display === 'block' && document.getElementById('cancel').className === 'showingButtons') {
      document.getElementById('cancel').click();
    }
  } else if (event.key === 'PageUp') {
    if (document.getElementById('diceAndBank').style.display === 'flex') {
      document.getElementById('bankIn').click();
    }
  } else if (event.key === 'PageDown') {
    if (document.getElementById('diceAndBank').style.display === 'flex') {
      document.getElementById('bankOut').click();
    }
  }
});
