const pages = {
  "start": {
    "img": "assets/app_content/01-start.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "guide1": {
    "img": "assets/app_content/02-guide-1.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "guide2": {
    "img": "assets/app_content/03-guide-2.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "guide3": {
    "img": "assets/app_content/04-guide-3.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "survey": {
    "img": "assets/app_content/05-survey.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "login": {
    "img": "assets/app_content/06-login.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "register": {
    "img": "assets/app_content/07-register.png",
    "w": 750,
    "h": 1624,
    "contentH": 1624,
    "hasNav": false
  },
  "device": {
    "img": "assets/app_content/08-device.png",
    "navImg": "assets/nav/navigation-device-custom.png",
    "w": 750,
    "h": 1624,
    "contentH": 1446,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1410,
    "hasNav": true
  },
  "home": {
    "img": "assets/app_content/09-home.png",
    "navImg": "assets/nav/navigation-home-long.png",
    "w": 750,
    "h": 2360,
    "contentH": 2182,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 2052,
    "hasNav": true
  },
  "plan": {
    "img": "assets/app_content/10-plan.png",
    "navImg": "assets/nav/10-plan.png",
    "w": 750,
    "h": 1624,
    "contentH": 1446,
    "navBarH": 178,
    "navVisualH": 308,
    "navVisualTop": 1316,
    "hasNav": true
  },
  "songs": {
    "img": "assets/app_content/11-songs.png",
    "navImg": "assets/nav/navigation-songs-custom.png",
    "w": 750,
    "h": 1903,
    "contentH": 1725,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1689,
    "hasNav": true
  },
  "actions": {
    "img": "assets/app_content/12-actions.png",
    "navImg": "assets/nav/12-actions.png",
    "w": 750,
    "h": 1628,
    "contentH": 1450,
    "navBarH": 178,
    "navVisualH": 308,
    "navVisualTop": 1320,
    "hasNav": true
  },
  "skins": {
    "img": "assets/app_content/13-skins.png",
    "navImg": "assets/nav/13-skins.png",
    "w": 750,
    "h": 1630,
    "contentH": 1452,
    "navBarH": 178,
    "navVisualH": 308,
    "navVisualTop": 1322,
    "hasNav": true
  },
  "recordDay": {
    "img": "assets/app_content/14-record-day.png",
    "navImg": "assets/nav/navigation-record-long.png",
    "w": 750,
    "h": 2094,
    "contentH": 1916,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1786,
    "hasNav": true
  },
  "recordWeek": {
    "img": "assets/app_content/15-record-week.png",
    "navImg": "assets/nav/navigation-record-long.png",
    "w": 750,
    "h": 2092,
    "contentH": 1916,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1786,
    "hasNav": true
  },
  "recordMonth": {
    "img": "assets/app_content/16-record-month.png",
    "navImg": "assets/nav/navigation-record-long.png",
    "w": 750,
    "h": 2088,
    "contentH": 1918,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1788,
    "hasNav": true
  },
  "recordDetail": {
    "img": "assets/app_content/17-record-month-detail.png",
    "navImg": "assets/nav/navigation-record-long.png",
    "w": 750,
    "h": 2088,
    "contentH": 1918,
    "navBarH": 178,
    "navVisualH": 214,
    "navVisualTop": 1788,
    "hasNav": true
  },
  "achievements": {
    "img": "assets/app_content/18-achievements.png",
    "navImg": "assets/nav/18-achievements.png",
    "w": 750,
    "h": 1624,
    "contentH": 1446,
    "navBarH": 178,
    "navVisualH": 308,
    "navVisualTop": 1316,
    "hasNav": true
  },
  "profile": {
    "img": "assets/app_content/19-profile.png",
    "navImg": "assets/nav/19-profile.png",
    "w": 750,
    "h": 1624,
    "contentH": 1446,
    "navBarH": 178,
    "navVisualH": 308,
    "navVisualTop": 1316,
    "hasNav": true
  }
};

pages.start.auto = 'guide1';
pages.start.autoDelay = 900;

const px = (x,y,w,h,to, opts={}) => ({ x,y,w,h,to,...opts });
const url = (x,y,w,h,href, opts={}) => ({ x,y,w,h,url:href,...opts });
const msg = (x,y,w,h,message, opts={}) => ({ x,y,w,h,message,...opts });
const back = (x,y,w,h,opts={}) => ({ x,y,w,h,action:'back',...opts });
const tv = (x,y,w,h,opts={}) => url(x,y,w,h,'tv/index.html',opts);

const common = {
  backHome: px(34,92,96,96,'home'),
  settings: msg(637,90,78,84,'设置功能为演示入口，当前暂不展开'),
};

const spots = {
  start:[px(0,0,750,1624,'guide1')],
  guide1:[px(165,1400,180,86,'survey',{label:'跳过'}), px(570,1390,105,105,'guide2',{label:'下一步'})],
  guide2:[px(165,1400,180,86,'survey',{label:'跳过'}), px(570,1390,105,105,'guide3',{label:'下一步'})],
  guide3:[px(165,1400,180,86,'survey',{label:'跳过'}), px(570,1390,105,105,'survey',{label:'下一步'})],
  survey:[
    back(38,104,88,88), px(616,121,96,96,'login',{label:'跳过'}),
    msg(48,600,654,128,'已选择：仅闻其名'), msg(48,750,654,128,'已选择：略知一二'),
    msg(48,904,654,128,'已选择：如数家珍'), msg(48,1058,654,128,'已选择：颇有研究'),
    px(205,1392,340,118,'login',{label:'进入'})
  ],
  login:[
    px(64,478,622,136,'login',{label:'邮箱输入'}), px(64,675,622,134,'login',{label:'密码输入'}),
    msg(58,823,130,70,'已保持 30 天登录'), px(64,924,622,120,'device',{label:'登录'}),
    px(260,1095,240,76,'register',{label:'注册'}), msg(285,1160,180,60,'忘记密码演示'),
    px(52,1347,646,112,'device',{label:'Apple登录'}), px(52,1472,646,112,'device',{label:'Google登录'})
  ],
  register:[
    px(64,478,622,112,'register',{label:'姓名输入'}), px(64,600,622,112,'register',{label:'邮箱输入'}), px(64,724,622,112,'register',{label:'密码输入'}),
    px(64,924,622,120,'device',{label:'注册'}), px(282,1080,190,76,'login',{label:'登录'}),
    px(52,1347,646,112,'device',{label:'Apple登录'}), px(52,1472,646,112,'device',{label:'Google登录'})
  ],
  device:[
    px(88,1115,574,112,'home',{label:'连接设备'}), px(88,1250,574,112,'home',{label:'切换设备'})
  ],
  home:[
    msg(32,100,600,104,'搜索曲目功能演示'), common.settings,
    px(32,490,202,78,'songs',{label:'随机曲目'}), px(288,490,202,78,'plan',{label:'你的计划'}),
    tv(532,1170,156,156,{label:'开始训练'}), px(28,1416,686,570,'actions',{label:'今日训练'}),
    px(28,2028,316,98,'skins',{label:'进入商城'}), px(396,2028,316,98,'songs',{label:'查看曲库'})
  ],
  plan:[
    common.backHome, tv(245,470,505,610,{label:'训练计划卡片'}),
    msg(24,510,88,132,'已筛选：Active'), msg(24,690,88,132,'已筛选：Draft'), msg(24,868,88,132,'已筛选：Done')
  ],
  songs:[
    px(30,72,98,96,'home',{label:'返回首页'}), common.settings, msg(38,178,674,116,'搜索曲目功能演示'),
    px(28,340,332,430,'actions',{label:'牡丹亭游园·皂罗袍·杜丽娘'}), px(390,340,332,430,'actions',{label:'牡丹亭·惊梦'}),
    px(28,805,332,430,'actions',{label:'牡丹亭·魂游'}), px(390,805,332,430,'actions',{label:'长生殿·惊变'}),
    px(28,1268,332,430,'actions',{label:'桃花扇·辞院'}), px(390,1268,332,430,'actions',{label:'玉簪记'})
  ],
  actions:[
    px(24,102,96,96,'songs',{label:'返回曲库'}), common.settings,
    tv(68,235,256,500,{label:'动作步骤1'}), tv(405,300,270,440,{label:'动作步骤2'}),
    tv(66,802,270,475,{label:'动作步骤3'}), tv(410,826,270,456,{label:'动作步骤4'}),
    tv(56,1320,280,126,{label:'动作步骤5'}), tv(408,1320,280,126,{label:'动作步骤6'})
  ],
  skins:[
    common.backHome, common.settings,
    msg(28,220,330,320,'已预览：游梦·蝶影'), msg(392,220,330,320,'已预览：寻梅·春踪'),
    msg(28,565,330,320,'已预览：烟柳·花痕'), msg(392,565,330,320,'已预览：荷风·倩影'),
    msg(28,910,330,320,'已预览：扇底·云光'), msg(392,910,330,320,'已预览：曲阑·月隐'),
    msg(28,1250,330,195,'已预览：水袖·风回'), msg(392,1250,330,195,'已预览：粉靥·春醒')
  ],
  recordDay:[
    common.backHome, common.settings,
    px(32,202,224,108,'recordDay',{label:'日'}), px(258,202,235,108,'recordWeek',{label:'周'}), px(494,202,224,108,'recordMonth',{label:'月'}),
    px(510,392,76,76,'recordWeek',{label:'上一个'}), px(598,392,76,76,'recordWeek',{label:'下一个'}),
    px(32,1148,686,136,'achievements',{label:'达成成就'}), msg(32,1388,686,128,'已查看：60分记录'),
    msg(32,1540,686,128,'已查看：20分记录'), msg(32,1708,686,128,'已查看：45分记录')
  ],
  recordWeek:[
    common.backHome, common.settings,
    px(32,202,224,108,'recordDay',{label:'日'}), px(258,202,235,108,'recordWeek',{label:'周'}), px(494,202,224,108,'recordMonth',{label:'月'}),
    px(510,384,76,76,'recordDay',{label:'上一个'}), px(598,384,76,76,'recordMonth',{label:'下一个'}),
    px(32,1148,686,136,'achievements',{label:'达成成就'}), msg(32,1394,686,128,'已查看：60分记录'),
    msg(32,1546,686,128,'已查看：20分记录'), msg(32,1714,686,128,'已查看：45分记录')
  ],
  recordMonth:[
    common.backHome, common.settings,
    px(32,202,224,108,'recordDay',{label:'日'}), px(258,202,235,108,'recordWeek',{label:'周'}), px(494,202,224,108,'recordMonth',{label:'月'}),
    px(45,390,662,612,'recordDetail',{label:'月历详情'}), px(32,1148,686,136,'achievements',{label:'达成成就'}),
    msg(32,1402,686,128,'已查看：60分记录'), msg(32,1554,686,128,'已查看：20分记录'), msg(32,1722,686,128,'已查看：45分记录')
  ],
  recordDetail:[
    px(34,92,96,96,'recordMonth',{label:'返回月记录'}), common.settings,
    px(32,202,224,108,'recordDay',{label:'日'}), px(258,202,235,108,'recordWeek',{label:'周'}), px(494,202,224,108,'recordMonth',{label:'月'}),
    msg(35,1075,680,120,'日期备注编辑演示'), px(32,1258,686,136,'achievements',{label:'达成成就'}),
    msg(32,1410,686,128,'已查看：60分记录'), msg(32,1562,686,128,'已查看：20分记录'), msg(32,1730,686,128,'已查看：45分记录')
  ],
  achievements:[
    back(34,92,96,96,{label:'返回'}), common.settings,
    msg(30,196,330,376,'徽章：初识水袖'), msg(392,196,330,376,'徽章：梦里游园'),
    msg(30,615,330,376,'徽章：一眼入戏'), msg(392,615,330,376,'徽章：曲尽其妙'),
    msg(30,1036,330,376,'徽章：千年剧目传灯人'), msg(392,1036,330,376,'徽章：听懂一折')
  ],
  profile:[
    px(64,486,622,120,'achievements',{label:'查看成就'}),
    msg(48,790,320,290,'目标卡片演示'), msg(382,790,320,290,'曲目掌握度演示'),
    px(70,1140,610,118,'songs',{label:'我运动过的曲目'}), msg(620,690,88,88,'更多目标设置')
  ]
};

const pageImage = document.getElementById('pageImage');
const navImage = document.getElementById('navImage');
const fixedTop = document.getElementById('fixedTop');
const topImage = document.getElementById('topImage');
const screenScroll = document.getElementById('screenScroll');
const imageStage = document.getElementById('imageStage');
const hotspotsEl = document.getElementById('hotspots');
const fixedNav = document.getElementById('fixedNav');
const bottomPad = document.getElementById('bottomPad');
const toastEl = document.getElementById('toast');
let current = 'start';
let previousPage = 'home';
let timer = null;
let toastTimer = null;

function getInitialPage(){
  const hash = (location.hash || '').replace('#','');
  return pages[hash] ? hash : 'start';
}
function showToast(message){
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add('show');
  toastTimer = setTimeout(()=>toastEl.classList.remove('show'), 1200);
}
function setTopGeometry(config){
  const phoneW = document.getElementById('phone').clientWidth || 375;
  const topBarH = config.topBarH || 76;
  fixedTop.style.height = `${phoneW * topBarH / config.w}px`;
  topImage.src = config.img;
}
function setNavGeometry(config){
  if(!config.hasNav){
    fixedNav.classList.add('hidden');
    bottomPad.style.height = '0px';
    return;
  }
  fixedNav.classList.remove('hidden');
  navImage.src = config.navImg;
  const phoneW = document.getElementById('phone').clientWidth || 375;
  const navVisualH = phoneW * config.navVisualH / config.w;
  const navBarH = phoneW * config.navBarH / config.w;
  fixedNav.style.height = `${navVisualH}px`;
  bottomPad.style.height = `${navBarH}px`;
  const barTopPct = ((config.navVisualH - config.navBarH) / config.navVisualH) * 100;
  document.querySelectorAll('.nav-home,.nav-device,.nav-record,.nav-profile').forEach(btn=>{
    btn.style.top = `${barTopPct}%`;
    btn.style.height = `${100 - barTopPct}%`;
  });
}
function go(page, push=true){
  if(!pages[page]) page = 'home';
  if(page !== current) previousPage = current;
  current = page;
  clearTimeout(timer);
  const config = pages[page];
  pageImage.src = config.img;
  pageImage.alt = `昆曲韵动APP页面：${page}`;
  imageStage.style.height = 'auto';
  setTopGeometry(config);
  setNavGeometry(config);
  screenScroll.scrollTo({ top:0, left:0, behavior:'instant' });
  renderHotspots(page);
  if(push && location.hash.replace('#','') !== page){
    history.replaceState(null,'',`#${page}`);
  }
  if(config.auto){
    timer = setTimeout(()=>go(config.auto), config.autoDelay || 1200);
  }
}
function renderHotspots(page){
  hotspotsEl.innerHTML = '';
  const config = pages[page];
  const contentH = config.contentH;
  (spots[page] || []).forEach((s)=>{
    const b = document.createElement('button');
    b.className = 'hotspot';
    b.type = 'button';
    b.style.left = `${(s.x / config.w) * 100}%`;
    b.style.top = `${(s.y / contentH) * 100}%`;
    b.style.width = `${(s.w / config.w) * 100}%`;
    b.style.height = `${(s.h / contentH) * 100}%`;
    b.setAttribute('aria-label', s.label || (s.to ? `前往${s.to}` : s.url ? '打开关联页面' : '演示反馈'));
    b.addEventListener('click', (e)=>{
      e.preventDefault();
      clearTimeout(timer);
      if(s.message) showToast(s.message);
      if(s.action === 'back'){
        const fallback = ['recordDay','recordWeek','recordMonth','recordDetail','profile'].includes(previousPage) ? previousPage : 'recordDay';
        go(fallback);
      }
      if(s.to) go(s.to);
      if(s.url) window.location.href = s.url;
    });
    hotspotsEl.appendChild(b);
  });
}
fixedNav.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-nav]');
  if(!btn) return;
  const nav = btn.dataset.nav;
  if(nav === 'tv') window.location.href = 'tv/index.html';
  else go(nav);
});
window.addEventListener('resize', ()=>{ setTopGeometry(pages[current]); setNavGeometry(pages[current]); });
document.getElementById('guideStart')?.addEventListener('click', ()=>go('start'));
document.getElementById('guideHome')?.addEventListener('click', ()=>go('home'));
window.addEventListener('hashchange', ()=>{
  const hash = location.hash.replace('#','');
  if(pages[hash] && hash !== current) go(hash, false);
});
go(getInitialPage(), false);
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{ navigator.serviceWorker.register('sw.js').catch(()=>{}); });
}
