//地点对象
function newPlace(low, high) {
  return {price: Math.floor(Math.random() * (high - low + 1) + low) * 100, owner: null, grade: 0, card: []};
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
[
  ["湖北-武汉", "湖南-长沙", "特大新闻", "广东-广州", "广西-南宁", "海南-海口", "游乐场", "重庆", "四川-成都", "贵州-贵阳", "云南-昆明", "西藏-拉萨"],
  ["上海", "江苏-南京", "特大新闻", "浙江-杭州", "安徽-合肥", "飞机场", "福建-福州", "江西-南昌", "山东-济南"],
  ["北京", "天津", "河北-石家庄", "飞机场", "山西-太原", "辽宁-沈阳", "特大新闻", "吉林-长春", "黑龙江-哈尔滨", "监狱", "内蒙古-呼和浩特", "陕西-西安"],
  ["甘肃-兰州", "青海-西宁", "宁夏-银川", "新疆-乌鲁木齐", "飞机场", "香港", "澳门", "国际大酒店", "台湾-台北"]
].forEach(function (rowElement, rowIndex) {
  rowElement.forEach(function (element, index) {
    const div = document.createElement("div");
    div.className = "grid";
    const p = document.createElement("p");
    p.textContent = element;
    div.appendChild(p);
    document.getElementById("row" + rowIndex).appendChild(div);
  });
});

// 缩放棋盘大小
function updateSize() {
  document.body.style.transform = `scale(${window.innerWidth / 434 > window.innerHeight / 350 ? window.innerHeight / 350 : window.innerWidth / 434})`;
  console.log(places);
}
window.addEventListener("resize", updateSize);
window.addEventListener("DOMContentLoaded", updateSize);
