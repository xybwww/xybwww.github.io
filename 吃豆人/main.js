$(function () {
  // 更新窗口大小的函数
  function updateSize() {
    if (window.innerWidth / $('#game').width() > window.innerHeight / $('#game').height()) {
      $('#game').css('transform', `scale(${window.innerHeight / $('#game').height()})`);
      $('#game').css('margin-top', 0);
      $('#game').css('margin-left', (window.innerWidth - $('#game').width() * window.innerHeight / $('#game').height()) / 2);
    } else {
      $('#game').css('transform', `scale(${window.innerWidth / $('#game').width()})`);
      $('#game').css('margin-left', 0)
      $('#game').css('margin-top', (window.innerHeight - $('#game').height() * window.innerWidth / $('#game').width()) / 2);
    }
  }
  $(window).resize(updateSize);
  updateSize();

  //吃豆人运动
  let pacmanChangeIndex = 0
  let pacmanChangeDirection = 1
  setInterval(function () {
    $('#pacmanSample' + pacmanChangeIndex).removeClass("show");
    pacmanChangeIndex += pacmanChangeDirection
    if (pacmanChangeIndex === 0 || pacmanChangeIndex === 5) {
      pacmanChangeDirection = -pacmanChangeDirection
    }
    $('#pacmanSample' + pacmanChangeIndex).addClass("show")
  }, 100)
  let pacmanStart = { x: 450, y: 310 }
  function pacmanMoveAnywhere() {
    const pacmanEnd = { x: Math.random() * $('#game').width() - 50, y: Math.random() * $('#game').height() - 50 }
    const d = { x: pacmanStart.x - pacmanEnd.x, y: pacmanStart.y - pacmanEnd.y }
    $("#pacmanSample object").css('transform', 'rotate(' + (Math.atan2(d.y, d.x) * (180 / Math.PI) + 360) % 360 + 'deg)')
    setTimeout(function () {
      $("#pacmanSample").animate({ left: pacmanEnd.x, top: pacmanEnd.y },
        Math.sqrt(d.x * d.x + d.y * d.y) * 5, pacmanMoveAnywhere)
      pacmanStart = pacmanEnd
    }, 1000)
  }
  pacmanMoveAnywhere()

  //鬼魂展示
  //显示与隐藏
  $("#introduction div").append($("#ghostSample svg.ghost0").clone().attr("class", "hide").css("margin-left", "-70px"))
  $("#introduction div").append($("#ghostSample svg.ghost1").clone().attr("class", "show"))
  //上色
  const ghostsAndColors = { blinky: "#CE2E59" ,pinky:"#FFA9DE",inky:"#1991E8",clyde:"#FF7E27"}
  $("#introduction div svg").each(function () {
    $(this).attr("fill", ghostsAndColors[$(this).parent().attr("id").replace("Sample", "")])
  })
  //脚动画
  setInterval(function () {
    $("#introduction div svg.hide").attr("class", "toShow")
    $("#introduction div svg.show").attr("class", "hide")
    $("#introduction div svg.toShow").attr("class", "show")
  }, 500)
})