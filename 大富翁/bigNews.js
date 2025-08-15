var events = [
  {
    text: () => '陨石砸出温泉假象！勘探费 -180元，吸引游客 +220元，净赚 40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 180;
      Object.values(pawns)[turn].coin += 220;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '台风卷走招牌！赔偿 -300元。请做3个俯卧撑表决心！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let minKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin < pawns[b].coin ? a : b));
      return `斗鱼选美夺冠！奖金 +250元！<br>向当前现金最少的玩家 <b>${minKey}</b> 发50元“扶贫红包”！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 250;
      let minKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin < pawns[b].coin ? a : b));
      if (minKey !== Object.keys(pawns)[turn]) {
        Object.values(pawns)[turn].coin -= 50;
        pawns[minKey].coin += 50;
        document.getElementById(minKey + 'Coin').textContent = pawns[minKey].coin;
      }
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '邻居送饺子！获赠 +80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '股市小跌！资产 -4%现金 (最低扣40元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.04), 40);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '发明“防雾眼镜布”热卖！赚 +380元！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 380;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踩喷泉成落汤鸡！洗衣费 -120元。请快速眨眼10次！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '银行误操作补偿！+150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '摇社区幸运树！兑 +100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '被当探店博主免单！价值 +200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let minKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin < pawns[b].coin ? a : b));
      return `捐助流浪猫！-150元。<br>系统自动向现金最少玩家 <b>${minKey}</b> 资助100元！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 150;
      let minKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin < pawns[b].coin ? a : b));
      pawns[minKey].coin += 100;
      document.getElementById(minKey + 'Coin').textContent = pawns[minKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '冷笑话日历版税！+280元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 280;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let keys = Object.keys(pawns).filter((k) => k !== Object.keys(pawns)[turn]);
      randKey = keys[Math.floor(Math.random() * keys.length)];
      return `捡到绝版游戏卡！卖 +450元！<br>系统随机选一名玩家 <b>${randKey}</b>，您送TA 100元！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 450;
      Object.values(pawns)[turn].coin -= 100;
      pawns[randKey].coin += 100;
      document.getElementById(randKey + 'Coin').textContent = pawns[randKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '狗啃坏门框！维修 -200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '可乐速饮冠军！奖金 +120元！喝一口水庆祝！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '金价微升！现金 +6% (最低60元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.06), 60);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '卖发光气球亏本！-180元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '帮外卖小哥！获可乐 +15元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 15;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '手机进水维修！-400元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 400;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '广场舞亚军！奖金 +200元。原地跳3下！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '超市抽中二等奖！得水壶 +180元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let owner = places['湖北-武汉'].owner;
      return `挖断武汉网线！赔偿 -250元。<br>向网线所属地块的拥有者${owner ? ` <b>${owner}</b> 赔100元！` : '（无主则免）'}`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 250;
      let owner = places['湖北-武汉'].owner;
      if (owner && owner !== Object.keys(pawns)[turn]) {
        Object.values(pawns)[turn].coin -= 100;
        pawns[owner].coin += 100;
        document.getElementById(owner + 'Coin').textContent = pawns[owner].coin;
      }
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '违章停车拖车费！-300元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '星空照片获奖！+300元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '冲动买哑铃！-200元。举空气哑铃5次！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '物价上涨！全员 -3%现金 (最低30元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= Math.max(Math.floor(pawns[k].coin * 0.03), 30);
        document.getElementById(k + 'Coin').textContent = k.coin;
      });
    },
  },
  {
    text: () => '自制蜂蜜热销！+320元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 320;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '美容院套路消费！-350元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 350;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '发明“忘带提醒贴”大卖！+420元！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 420;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '撞柜门买药！-60元。揉头说“小心”！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      return `亲戚送特产转卖！+280元！<br>向所有玩家各发30元红包！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 280;
      let selfKey = Object.keys(pawns)[turn];
      Object.keys(pawns).forEach((k) => {
        if (k !== selfKey) {
          Object.values(pawns)[turn].coin -= 30;
          pawns[k].coin += 30;
          document.getElementById(k + 'Coin').textContent = pawns[k].coin;
        }
      });
      document.getElementById(selfKey + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '基金小跌！-5%现金 (最低50元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.05), 50);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '新发型加成！+100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '酒吧太吵！买耳塞 -120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '夜跑奖励！+100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '债券利息！+4%现金 (最低40元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.04), 40);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '煎蛋变炭叫外卖！-80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '捡漂流瓶好运！+150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '识破社保诈骗！获奖 +50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let selfKey = Object.keys(pawns)[turn];
      return `八哥说“恭喜赢钱”！<br>所有玩家各送你20元！`;
    },
    effect: function (pawns, turn) {
      let selfKey = Object.keys(pawns)[turn];
      Object.keys(pawns).forEach((k) => {
        if (k !== selfKey) {
          pawns[k].coin -= 20;
          pawns[selfKey].coin += 20;
          document.getElementById(k + 'Coin').textContent = pawns[k].coin;
        }
      });
      document.getElementById(selfKey + 'Coin').textContent = pawns[selfKey].coin;
    },
  },
  {
    text: () => '楼梯扭脚！医疗费 -280元。金鸡独立5秒！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 280;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '商家返现！全员 +3%现金 (最低30元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin += Math.max(Math.floor(pawns[k].coin * 0.03), 30);
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '网店退货潮！-220元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 220;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '旧外套摸出钱！+200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '咖啡泼电脑！维修 -500元。因“设备损坏”，进监狱1回合！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 500;
      // 可在此处设置监狱标记
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '出版儿童故事！稿费 +380元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 380;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '楼上装修吵！补偿 -100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '钓鱼比赛奖！+250元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 250;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '纸巾淋湿损失！-70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '抢消费券！+120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '网络套餐升级！-90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '鸽群轰炸阳台！清洗 -80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '环保袋爆款！赚 +520元！系统扣除100元作“公益捐赠”。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 520 - 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '撞玻璃门！买药 -60元。对空气鞠躬道歉！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '行业裁员潮！全员 -5%现金 (最低50元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= Math.max(Math.floor(pawns[k].coin * 0.05), 50);
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '泡菜坛爆炸！清理 -300元。因“安全事故”，进监狱1回合！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '牙医检查！-320元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 320;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '彩虹照片被转发！奖 +150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '蜥蜴越狱悬赏！-100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '跳绳参与奖！+80元。无绳跳绳10秒！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let keys = Object.keys(pawns);
      let neighborIdx = (turn + 1) % keys.length;
      let neighbor = keys[neighborIdx];
      return `后院挖出“恐龙蛋”！卖 +600元！<br>向右手边相邻玩家 <b>${neighbor}</b> 发100元红包！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 600;
      let keys = Object.keys(pawns);
      let neighborIdx = (turn + 1) % keys.length;
      let neighbor = keys[neighborIdx];
      Object.values(pawns)[turn].coin -= 100;
      pawns[neighbor].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
      document.getElementById(neighbor + 'Coin').textContent = pawns[neighbor].coin;
    },
  },
  {
    text: () => '软件更新补偿！-120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '旧书藏彩票中奖！+400元！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 400;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '网购盆栽枯死！-150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '逗笑经理获免单！价值 +90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '忘关空调电费！-200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '闭眼单脚站破纪录！奖金 +180元！挑战闭眼单脚站8秒！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '油价上涨！玩家 -150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '阳台番茄丰收！+220元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 220;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '诈骗未遂！影响心情 -50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '美食攻略稿费！+240元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 240;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踩狗屎捡钱！洗鞋 -50元，捡钱 +130元，净赚 80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let keys = Object.keys(pawns).filter((k) => k !== Object.keys(pawns)[turn]);
      randKey = keys[Math.floor(Math.random() * keys.length)];
      return `宠物狗直播打赏！+350元。<br>系统随机选一名玩家 <b>${randKey}</b>，您送TA 50元！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 350;
      Object.values(pawns)[turn].coin -= 50;
      pawns[randKey].coin += 50;
      document.getElementById(randKey + 'Coin').textContent = pawns[randKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '淘到复古相机！卖 +580元！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 580;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let keys = Object.keys(pawns).filter((k) => k !== Object.keys(pawns)[turn]);
      randKey = keys[Math.floor(Math.random() * keys.length)];
      return `踢球误伤路人！赔偿 -400元。<br>系统随机选一名玩家作为“路人” <b>${randKey}</b>，您赔TA 200元！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 400;
      Object.values(pawns)[turn].coin -= 200;
      pawns[randKey].coin += 200;
      document.getElementById(randKey + 'Coin').textContent = pawns[randKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '退税到账！+300元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '自制冰淇淋机故障！-180元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '指路获赠冰淇淋！+25元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 25;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '共享充电宝买断！-120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: (pawns, turn) => {
      let keys = Object.keys(pawns);
      let maxKey = keys.reduce((a, b) => (pawns[a].coin > pawns[b].coin ? a : b));
      return `翻出童年游戏机！卖 +650元！<br>向游戏中总资产最高的玩家 <b>${maxKey}</b> 发100元“致敬土豪红包”！`;
    },
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 650;
      let keys = Object.keys(pawns);
      let maxKey = keys.reduce((a, b) => (pawns[a].coin > pawns[b].coin ? a : b));
      if (maxKey !== Object.keys(pawns)[turn]) {
        Object.values(pawns)[turn].coin -= 100;
        pawns[maxKey].coin += 100;
        document.getElementById(maxKey + 'Coin').textContent = pawns[maxKey].coin;
      }
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '洗衣卡失效！损失 -220元。做2个俯卧撑表示懊恼！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 220;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '投资失误！-8%现金 (最低80元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.08), 80);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '辣酱餐馆订购！+450元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 450;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '电视购物交智商税！-200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '雪人创意奖！+150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踩口香糖清理！-30元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 30;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '手机支架热卖！+420元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 420;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '停水买桶装水！-80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '线上唱歌打赏！+180元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '流感囤药！全员 -150元。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= 150;
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '预言下雨成真！打赏 +200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '裤子穿反社死！赔偿 -100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '许愿池捞硬币！+88元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 88;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '绿萝净化获奖！+300元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '鸽子抢面包！-20元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 20;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '笑话冷场安慰奖！+50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '污损书籍赔偿！-40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '“外星主播”打赏！获 +800元！缴纳400元“星际税”给银行！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 800 - 400;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '终极胜利大奖！+888元！选做：A.5个俯卧撑 B.跳5次摸高 C.10秒说绕口令！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 888;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '后院挖出奇怪石头！奇石爱好者收购 +280元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 280;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '台风刮坏雨棚！修理费 -150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你养的乌龟散步大赛夺冠！奖金 +180元！请原地做3个俯卧撑庆祝！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '邻居烤饼干分享！获赠价值 +50元 饼干。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '股市小幅震荡！资产波动 -3%总现金 (最低扣30元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.03), 30);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '发明“自动浇花器”受欢迎！赚 +320元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 320;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  { text: () => '踩到松动的井盖！吓一跳，幸运无伤。请快速眨眼10次压惊！', effect: function (pawns, turn) {} },
  {
    text: () => '银行小额账户管理费返还！+40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '摇动社区幸运铃铛！象征性好运 +80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '被误认为老同学！请喝了杯咖啡，价值 +30元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 30;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '捐助社区图书角！爱心付出 -100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你写的旅游攻略被采用！稿费 +200元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 200;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '捡到限量版游戏币！收藏家收购 +220元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 220;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '家猫打翻调料瓶！清理+补充 -90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '喝豆浆速度赛第一！奖金 +100元！请快速喝一口水（真喝）！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '银价微涨！小银饰升值，现金 +5% (最低加50元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.05), 50);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '摆摊卖手工钥匙扣滞销！亏 -120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '帮快递员指路！获赠小包纸巾，价值 +10元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 10;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '手机充电线断裂！买新的 -60元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '广场合唱团表现优异！奖励 +90元。请原地轻跳3下！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '超市满额赠抽纸！价值 +25元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 25;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '后院挖坑想种树挖到水管！维修费 -180元 (哭笑不得)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '骑电动车未戴头盔！安全教育后罚款 -100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你拍的晚霞照片获赞！平台奖励 +110元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 110;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '冲动购买握力器！-80元。请立刻用力握紧拳头5秒！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '日用品小幅涨价！所有玩家现金 -2% (最低扣20元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= Math.max(Math.floor(pawns[k].coin * 0.02), 20);
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '自制面包受好评！收入 +160元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 160;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '被忽悠办会员卡！定金 -150元 (后悔中)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '发明“防丢钥匙扣”热卖！赚 +350元！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 350;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '被抽屉夹到手！买药 -40元。请对着手指吹口气！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '远方表姐寄来手工！转卖 +190元！但要求送现金最少玩家20元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 190;
      let minKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin < pawns[b].coin ? a : b));
      pawns[minKey].coin += 20;
      document.getElementById(minKey + 'Coin').textContent = pawns[minKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '理财收益未达预期！小失望，-4%总现金 (最低扣40元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.04), 40);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你的穿搭被朋友夸奖！心情好，运气 +70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '楼下烧烤店油烟飘入！买空气清新剂 -50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '完成晨跑打卡！奖励自己 +60元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '定期存款利息到账！+3%现金 (最低加30元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.03), 30);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '煮饭忘按开关变生米！外卖解决 -90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '河边捡到光滑鹅卵石！小孩喜欢买走 +70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '“快递丢失理赔”诈骗！警惕但损失时间，象征性 -50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你教鹦鹉说“谢谢”！逗乐客人获小费 +130元。请清晰说一遍绕口令：“四是四，十是十”！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 130;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  { text: () => '下楼梯踩空一级！幸无大碍。请单脚站立保持平衡3秒！', effect: function (pawns, turn) {} },
  {
    text: () => '反季促销捡漏！所有玩家现金 +2% (最低加20元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin += Math.max(Math.floor(pawns[k].coin * 0.02), 20);
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '网店遇到一个差评！影响销量，损失 -80元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 80;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '旧钱包里发现零钱！+55元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 55;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '水杯洒在键盘上！紧急抢救费 -350元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 350;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '你编的谜语被收录！稿费 +120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '隔壁深夜看球赛欢呼！买耳塞 -35元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 35;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '社区象棋比赛季军！奖金 +90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '囤的电池漏液！清理+更换 -60元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '抢到外卖红包！省下 +40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '手机流量超支！充值 -70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '鸟粪落在自行车座！清洗 -25元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 25;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '设计简约书签热卖！赚 +240元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 240;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '看路牌撞到路灯杆！额头微肿，买药 -45元。请揉揉额头说“注意看路”！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 45;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '行业小寒冬！所有玩家现金 -3% (最低扣30元)。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= Math.max(Math.floor(pawns[k].coin * 0.03), 30);
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '泡菜坛子密封圈老化！食材部分变质损失 -75元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 75;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '例行体检！自费部分 -280元 (健康重要)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 280;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '随手拍的路边小花被点赞！意外打赏 +85元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 85;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '宠物仓鼠越狱寻回！酬谢帮忙邻居 -50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '社区踢毽子活动！参与奖 +50元。请假装踢两下“空气毽子”！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '后院土质检测！费用 -120元 (结果：普通土)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '小程序小BUG补偿！-100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '衣柜深处找到旧红包！里面有钱 +180元 (意外之财)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 180;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '网购多肉植物状态差！部分退款，净损失 -70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '讲了个应景笑话！获得免费水果，价值 +35元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 35;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '出门忘关小台灯！电费 -45元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 45;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '闭眼单脚站挑战成功！奖金 +100元！请现场闭眼单脚站5秒！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '油价微调！玩家额外 -60元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '阳台薄荷疯长！分享泡茶收入 +90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '“学校捐款”诈骗未遂！但浪费了时间，象征性 -30元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 30;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '投稿生活小窍门被刊登！稿费 +110元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 110;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踩到狗屎！洗鞋 -50元，但捡到 +80元，净赚 30元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 30;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '直播时窗外有彩虹！观众打赏 +160元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 160;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '旧书市场淘到签名书！粉丝收购 +300元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 300;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踢球踢进别人院子！道歉并补偿 -100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '退税小额补发！+130元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 130;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '自制冰棍模具裂了！浪费果汁，损失 -60元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 60;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '指路获赠矿泉水！价值 +5元 (解渴)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 5;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '共享单车超时！调度费 -40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '翻出童年玻璃弹珠！怀旧收购 +150元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 150;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '办的洗衣卡余额不足！补充值 -120元。请做2个俯卧撑表示懊恼！',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '投资小亏损！损失 -6%总现金 (最低扣60元)。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= Math.max(Math.floor(Object.values(pawns)[turn].coin * 0.06), 60);
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '自制酸辣汤获好评！邻居求配方付费 +100元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 100;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '电视购物买“魔术毛巾”！智商税 -120元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 120;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '堆的雪人获“最努力奖”！奖金 +70元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 70;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '踩到口香糖！买清理剂 -20元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 20;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '设计简约帆布袋热卖！赚 +270元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 270;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '停水买瓶装水！-50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 50;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '线上K歌获好评！虚拟礼物折现 +90元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 90;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '换季鼻炎买药！所有玩家 -100元。',
    effect: function (pawns, turn) {
      Object.keys(pawns).forEach((k) => {
        pawns[k].coin -= 100;
        document.getElementById(k + 'Coin').textContent = pawns[k].coin;
      });
    },
  },
  {
    text: () => '猜中比赛结果！朋友打赏 +140元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 140;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '网购T恤缩水！勉强能穿，损失 -40元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 40;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '许愿池捞硬币！总计 +38元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 38;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '吊兰长出新枝！分享收入 +75元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 75;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '被广场鸽啄了面包！损失面包，价值 -15元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 15;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '讲的笑话反应平平！获“参与奖” +30元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 30;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '图书馆书页折角！爱护书籍捐款 -20元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin -= 20;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '拍的猫咪晒太阳视频获赞！平台奖励 +210元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 210;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '“星际游客”问路！送闪亮小石头，值 +350元！要求送现金最多玩家50元。',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 350;
      let maxKey = Object.keys(pawns).reduce((a, b) => (pawns[a].coin > pawns[b].coin ? a : b));
      pawns[maxKey].coin += 50;
      document.getElementById(maxKey + 'Coin').textContent = pawns[maxKey].coin;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
  {
    text: () => '游戏毅力勋章！恭喜获胜！奖励 +500元！请选择：A. 做5个俯卧撑 B. 跳跃5次 C. 10秒内眨眼20次！ (三选一)',
    effect: function (pawns, turn) {
      Object.values(pawns)[turn].coin += 500;
      document.getElementById(Object.keys(pawns)[turn] + 'Coin').textContent = Object.values(pawns)[turn].coin;
    },
  },
];
