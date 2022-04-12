"use strict"
// var  window = globalThis;
/**
 * node环境使用的common.js的规范，在终端运行使用window对象，cjs会报错
 * window环境下浏览器下遵循es模块
 */ 

//window对象打开一个url网址(打开一个新的窗口)
/**
 * window.open(URL, name, features, replace)
 * url 字符串 网址
 * name _blank新窗口 _parent父级窗口 _self自身窗口 _top顶级窗口
 * features 窗口特征
 * 参数有：
 * channelmode=yes|no|1|0   是否使用剧院模式显示窗口。默认为 no。
 * directories=yes|no|1|0   是否添加目录按钮。默认为 yes。
 * fullscreen=yes|no|1|0    是否使用全屏模式显示浏览器。默认是 no。处于全屏模式的窗口必须同时处于剧院模式。
 * height=pixels            窗口文档显示区的高度。以像素计。
 * width=pixels             窗口文档显示区的宽度。以像素计。
 * left=pixels              窗口的 x 坐标。以像素计。
 * top=pixels               窗口的 y 坐标。
 * location=yes|no|1|0      是否显示地址字段。默认是 yes。
 * menubar=yes|no|1|0       是否显示菜单栏。默认是 yes。
 * resizable=yes|no|1|0     窗口是否可调节尺寸。默认是 yes。
 * scrollbars=yes|no|1|0    是否显示滚动条。默认是 yes。
 * status=yes|no|1|0        是否添加状态栏。默认是 yes。
 * titlebar=yes|no|1|0      是否显示标题栏。默认是 yes。
 * toolbar=yes|no|1|0       是否显示浏览器的工具栏。默认是 yes。
 * */ 
window.open("https://juejin.im");
window.open("https://juejin.im","_blank");
window.open("https://juejin.im","_parent");
window.open("https://juejin.im","_self");
window.open("https://juejin.im","_top");

window.open("https://juejin.im","_blank", "channelmode=yes");//多弹出一个devtools窗口
window.open("https://juejin.im","_blank", "directories=yes");//多弹出一个devtools窗口
window.open("https://juejin.im", "fullscreen=yes");//多弹出一个devtools窗口

window.open("https://juejin.im", "_blank","channelmode=yes,modal=ture,height=300,width=300");
window.open("https://juejin.im", "_blank","channelmode=yes,modal=ture,height=300,width=300,left=100,top=100");
window.open("https://juejin.im", "_blank","channelmode=yes,modal=ture,height=300,width=300,left=300,top=100");
window.open("https://juejin.im", "_blank","status=no,channelmode=yes,modal=ture,height=300,width=300,left=300,top=100");

window.open("https://juejin.im", "_blank","status=no,menubar=no,titlebar=no,toolbar=no,directories=no,width=800,height=600,top=0,left=0");
window.open("https://juejin.im", "_blank","status=no,menubar=no,titlebar=no,toolbar=no,directories=no,width=800,height=600,top=0,left=0,location=yes");



// window.open("https://juejin.im","_blank","scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");
window.open("https://juejin.im","_blank","scrollbars=yes,resizable=1,modal=ture,alwaysRaised=yes");

window.open("https://juejin.im","_parent","scrollbars=no,resizable=no,modal=ture,alwaysRaised=yes,status=no,location=no,menubar=no,titlebar=no");
window.open("https://juejin.im","_blank","scrollbars=no,resizable=no,modal=ture,alwaysRaised=yes,status=no,location=no,menubar=no,titlebar=no,width=600,height=600,top=10,left=10");
window.open("https://juejin.im","_blank","menubar=yes,scrollbars=no,resizable=no,modal=ture,alwaysRaised=yes,status=no,location=no,menubar=no,titlebar=no,width=600,height=600,top=10,left=10");



/***
 * window.open与location.href的用法和区别
 * 
 * self.location.href="/url" 当前页面打开URL页面
 *location.href="/url" 当前页面打开URL页面
 *windows.location.href="/url" 当前页面打开URL页面，前面三个用法相同。
 *this.location.href="/url" 当前页面打开URL页面
 *parent.location.href="/url" 在父页面打开新页面
 *top.location.href="/url" 在顶层页面打开新页面
 * 
 */ 
window.open("https://juejin.im");// 是一个方法，默认打开一个新窗口
window.location.href = "https://juejin.im";// 是一个字符串类型 ，默认是在当前url跳转到特定url，打开方法是当前窗口
self.location.href = "https://juejin.im";
location.href = "https://juejin.im";
this.location.href = "https://juejin.im";
parent.location.href = "https://juejin.im";
top.location.href = "https://juejin.im";


/**
 * callPhone() {
 * 
 *      window.location.href = "tel://" + 18970987576
 * }
 * 
 * 
 */ 

 window.location.href = "tel://" + 18970987576;
 window.open("tel://18970987576");
 window.location.href = "http://mail.heathy1514@163.com";


 window.close();//关闭当前窗口

 navigator.appName;//Netscape
 navigator.appCodeName;//Mozilla
 navigator.product;//Gecko
 navigator.appVersion;//5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36
 navigator.userAgent;//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36 //区分移动设备机型
 navigator.platform;//Win32
 navigator.language;//zh-CN
 navigator.onLine;//true 监听设备在线离线状态
 navigator.cookieEnabled;//true
 navigator.hardwareConcurrency;//8


//  电池状态getBattery 会返回一个 BatteryManager 对象。
 navigator.getBattery();
/***
 *  [[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: BatteryManager

*/  
//onchargingchange 	电池充电状态更新时触发此事件。
//onchargingtimechange 	电池充电时间更新时触发此事件。
//ondischargingtimechange 	电池放电时间更新时触发此事件。
//onlevelchange 	电池电量更新时触发此事件。
navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', updateChargeInfo);
    function updateChargeInfo(){
      console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
    }
  
    battery.addEventListener('levelchange', updateLevelInfo);
    function updateLevelInfo(){
      console.log(`Battery level: ${battery.level * 100}%`);
    }
  
    battery.addEventListener('chargingtimechange', updateChargingInfo);
    function updateChargingInfo(){
      console.log(`Battery charging time: ${battery.chargingTime} seconds`);
    }
  
    battery.addEventListener('dischargingtimechange', updateDischargingInfo);
    function updateDischargingInfo(){
      console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
    }
  
  });
  


// 网络状态：connection
navigator.connection || navigator.mozConnection || navigator.webkitConnection
/***
 * downlink: 1.75
effectiveType: "4g"
onchange: null
rtt: 150
saveData: false
[[Prototype]]: NetworkInformatio
 * 
 */ 
navigator.connection.downlink;//网络下行速度，单位 M/s ;;;   1.75
navigator.connection.effectiveType;//网络类型，常见的值有 4g/3g/2g 等。 4g
navigator.connection.onchange;//有值代表网络状态变化，默认为 null
navigator.connection.rtt;//	往返时间（round-trip time）的缩写，单位是毫秒，表示从发送端发送数据开始，到发送端收到来自接收端的确认（接收端收到数据后便立即发送确认，不包含数据传输时间）总共经历的时间。
navigator.connection.saveData;//	false  打开/请求数据保护模式

geolocation;

/**
 * 这个 API 只能在 https 协议下才可以使用，它可以获取地理位置。
    但这个 API 的位置偏移较为严重，容易产生定位不精准的问题
 * 
 */ 

    const options = {
        enableHighAccuracy: true,// 高精确度
        timeout: 5 * 1000,// 等待响应的最长时间 单位：毫秒
        maximumAge: 0// 应用程序愿意接受的缓存位置的最长时间
      }
      
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(console.log, console.log, options)
      } else {
          console.log('Geolocation is not supported in your browser')
      }

/***
 * 
 */ 
 export default class Utils {
    getCurrentPosition(){
      let mapObj = new AMap.Map('GaoDe', {}) // html 中定义的 id 值
      let geolocation;
      mapObj.plugin(['AMap.Geolocation'], function () {
          geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 60000,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: false,        //显示定位按钮，默认：true
              buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
              buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              useNative:true
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', function(res){
              console.log(res)
          });//返回定位信息
          AMap.event.addListener(geolocation, 'error', function(err){
              console.log(err)
          });      //返回定位出错信息
      })
    }
   }
  

   
//    ****

navigator.geolocation.getCurrentPosition(console.log, console.log, {
    enableHighAccuracy: true,// 高精确度
    timeout: 5 * 1000,// 等待响应的最长时间 单位：毫秒
    maximumAge: 0// 应用程序愿意接受的缓存位置的最长时间
  })
/**
 * GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1649750835840}
    coords: GeolocationCoordinates {latitude: 22.536743000000005, longitude: 114.05084199999997, altitude: null, accuracy: 56, altitudeAccuracy: null, …}
    timestamp: 1649750835840
    [[Prototype]]: GeolocationPosition
    coords: (...)
    timestamp: (...)
    constructor: ƒ GeolocationPosition()
    Symbol(Symbol.toStringTag): "GeolocationPosition"
    get coords: ƒ coords()
    get timestamp: ƒ timestamp()
    [[Prototype]]: Object
 * 
 */   

    /***
     * latitude: 22.536743000000005
        longitude: 114.05084199999997
     */ 
        // 打开摄像头
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        // 打开声卡
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });


        navigator.mediaDevices.getUserMedia()
        //获取摄像头输入流

    

    // screen 表示当前窗口所在的屏幕,提供了显示设备的信息
/***
 * height  Number，屏幕高度，单位像素。通常是常量，缩放网页不会发生变化。但调整屏幕分辨率会影响它
 * width  屏幕宽度，其他特性同 height。
 * availHeight 	Number，屏幕可用高度，单位像素。即屏幕总高度减掉系统的任务栏或者其它系统组件的高度。
 * availWidth 屏幕宽度，其他特性同 availHeight。
 * pixelDepth  	屏幕色彩位数，比如 24 表示 24 位色彩。
 * colorDepth 表示颜色深度。和 pixelDepth 的区别是 colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度。绝大多数情况下是一样的。
 * orientation 表示屏幕方向，是个对象。
 * orientation.angle Number，屏幕旋转角度。
 * orientation.type String，屏幕方向，landscape-primary 横放、landscape-secondary 颠倒的横放、portrait-primary 竖放。
 */    

 screen.width; // 1200
 screen.height; // 700
 screen.availHeight;// 672
 screen.availWidth;//1280
 screen.pixelDepth;// 24
 screen.colorDepth;// 24
 screen.orientation;// angle: 0 onchange: null type: "landscape-primary"
 screen.orientation.angle = 180;
 screen.orientation.type;// landscape-primary


//  location 记录当前URL信息，并提供了一系列对当前URL的操作方法
/***
 * href  整个URL
 * protocol 当前URL的协议,包括冒号
 * host 主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。
 * hostname 主机名，不包括端口
 * port 端口号
 * portname URL的路径部分，从问号？开始
 * hash 片段字符串部分，从#开始。
 * username 域名前面的用户名
 * password  域名前面的密码
 * origin URL的协议,主机名和端口
 */ 

 location.assign('http://www.baidu.com');
 location.replace('http://www.baidu.com');
 location.reload();