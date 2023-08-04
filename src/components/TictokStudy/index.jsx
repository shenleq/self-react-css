import { React, useState, useEffect, useRef } from "react";
import { Button, Input, ColorPicker, Space } from "antd";
import "./index.scss";

import IMG1 from "../../assets/picture/1.png";
import IMG3 from "../../assets/picture/3.png";
import QiQiu from "../../assets/picture/qiqiu.png";

import initShader from "../../config/webgl.config";
import initmap from "../../config/map-echaerts";
import config from "../../config/charter.config";

const TicTokStudy = () => {
  //控制文字交融效果展示
  const [textUp, setTextUp] = useState(false);
  const [textUp2, setTextUp2] = useState("sword art online");
  const [textNum, setTextNum] = useState(0);
  //整数转罗马数字的整数
  const [romaNum, setRomaNum] = useState("");
  //计数
  const tetxCo = [
    "you have changed!",
    "you have changed..",
    "哎呦~ 你干嘛",
    "别点了，再点也没啥了。",
    "真的！真的！再也没有了！",
    "你真执着啊。。。",
    "死机..死机..死机..",
  ];
  //1000个耗时任务进行渲染卡顿
  const timeOff = (times = 0) => {
    if (times == 1000) {
      return;
    }
    console.log(times);
    return timeOff(times + 1);
  };
  requestIdleCallback(() => {});
  /** 一些知识 * 1
   * Vue setup 语法糖自动使用了 expose() 没有传递任何参数，也因此实例上不会有任何数据，可通过defendExpose({...}) 来暴露数据
   * setup函数会暴露所有数据，可以通过expose来限制数据暴露
   */
  //文字交融按钮函数
  const textClick = () => {
    if (textUp == true) {
      return;
    }
    setTextUp(true);
    setTimeout(() => {
      setTextUp(false);
    }, 5000);
  };

  //函数拷贝
  const copyObj = (obj = {}) => {
    //变量先置空
    let newobj = null;
    //判断是否需要继续进行递归
    if (typeof obj == "object" && obj !== null) {
      newobj = obj instanceof Array ? [] : {};
      //进行下一层递归克隆
      for (var i in obj) {
        newobj[i] = copyObj(obj[i]);
      }
      //如果不是对象直接赋值
    } else newobj = obj;

    return newobj;
  };
  //模拟对象
  let obj = {
    numberParams: 1,
    functionParams: () => {
      console.log("昨天基金全是绿的，只有我的眼睛是红的");
    },
    objParams: {
      a: 1,
      b: 2,
    },
  };

  const newObj = copyObj(obj); //这样就完成了一个对象的递归拷贝

  obj.numberParams = 100; //更改第一个对象的值
  console.log(newObj.numberParams); //输出依然是1 不会跟随obj去改变

  //toFixed()函数问题, 由于数据存储的不精确，运算也可能导致不精确, 并且浏览器显示也存在不精确的情况，会做近似处理
  // 尝试 0.1.toString(2)， 0.2.toString(2), 0.3...., 0.5.... ------转化为二进制。 2.45.toFixed（1） = 2.5 2.55.toFixed(1) = 2.5 2.555.toFixed(1) = 2.6

  //（无痕浏览）浏览器指纹------->  利用设备环境生成的标识（比如： navigator 内的数据）  例如 canvas指纹   把浏览器等等信息收集后生成一个标识，不能做到完全唯一，但是100万里面可能只有百来个相同的，保证大概率唯一、
  // 应用场景： 广告投放， 视频防止刷播放量     但是有指纹浏览器来应对这个限制（此类浏览器大概率收费）  ***fingerprintjs库可以用来读取此类指纹***

  //字符串的异步替换

  //console导致的内存泄漏，是因为控制台要保持打印的数据的话就要保持该数据在存在内存当中不被销毁，如果打印太多了就会占用内存太多，导致页面卡顿

  //右键菜单

  //文字特效
  const textC = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    let duration = 0.8;
    let delay = 0.3;
    let revealText = document.querySelector(".reveal");
    let letters = revealText.textContent.split("");
    revealText.textContent = "";
    let middle = letters.filter((e) => e !== " ").length / 2;
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
      revealText.append(span);
    });
  };
  //文字特效按钮函数
  const textClick2 = () => {
    if (textUp2 == "") {
      return;
    }
    setTextUp("");
    setTimeout(() => {
      if (textNum >= 6) {
        setTextUp2(tetxCo[6]);
        textC();
        return;
      }
      setTextUp2(tetxCo[textNum]);
      textC();
      setTextNum(textNum + 1);
    }, 2000);
  };
  //鼠标悬停菜单
  const menuAnd = () => {
    let navtab = document.querySelector("nav.navtab");
    let navtabItems = document.querySelectorAll("li.navtab-item");
    navtabItems.forEach((navtabItem, activeIndex) =>
      navtabItem.addEventListener("click", () => {
        navtabItems.forEach((navtabItem) =>
          navtabItem.classList.remove("active")
        );
        navtabItem.classList.add("active");
        navtab.style.setProperty("--active-index", `${activeIndex}`);
      })
    );
  };
  //Symbol类型和函数
  const setSymmbol = () => {
    const sy = Symbol.for("崩坏");
    console.log(sy.valueOf());
    console.log(sy.toString());
    console.log(Symbol.keyFor(sy));
  };
  //文本分割
  const textSplit = () => {
    const $menu = document.getElementsByClassName("Menu-list");
    const $item = document.getElementsByClassName("Menu-list-item");
    const con = document.getElementsByClassName("Menu");
    const w = con[0].style.width;
    const h = con[0].style.height;
    con[0].addEventListener("mousemove", function (e) {
      let offsetX = 0.5 - e.pageX / w;
      let offsetY = 0.5 - e.pageY / h;
      let dy = e.pageY - h / 2;
      let dx = e.pageX - w / 2;
      let theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;
      let offsetPoster = $menu[0].style.offset;
      let transformPoster =
        "translate3d(0, " +
        -offsetX * offsetPoster +
        "px, 0) rotateX(" +
        -offsetY * offsetPoster +
        "deg) rotateY(" +
        offsetX * (offsetPoster * 2) +
        "deg)"; //poster transform

      //get angle between 0-360
      if (angle < 0) {
        angle = angle + 360;
      }

      //poster transform
      $menu[0].style.transfrom = transformPoster;
      for (let i = 0; i < 3; i++) {
        let offsetLayer = $item[i].style.offset || 0;
        let transformLayer =
          "translate3d(" +
          offsetX * offsetLayer +
          "px, " +
          offsetY * offsetLayer +
          "px, 20px)";
        $item[i].style.transform = transformLayer;
      }
    });
  };

  //按钮点击动画特效
  const btnClick = () => {
    const heroBtn = document.getElementsByClassName("hero-btn")[0];
    const vASlign = document.getElementsByClassName("v-align")[0];
    console.log(vASlign.classList.value);
    if (vASlign.classList.value.indexOf("active") == -1) {
      vASlign.classList.value = "v-align active";
      setTimeout(() => {
        vASlign.classList.value = "v-align";
      }, 2000);
    }
  };

  //获取设备电池信息进行一些操作
  const beatry = () => {
    navigator.getBattery().then(function (battery) {
      // 添加事件，当设备电量改变时触发
      battery.addEventListener("levelchange", function () {
        console.log("电量改变: " + battery.level);
      });

      // 添加事件，当设备充电状态改变时触发
      battery.addEventListener("chargingchange", function () {
        console.log("充电状态改变: " + battery.charging);
      });

      // 添加事件，当设备完全充电需要时间改变时触发
      battery.addEventListener("chargingtimechange", function () {
        console.log("完全充电需要时间: " + battery.chargingTime);
      });

      // 添加事件，当设备完全放电需要时间改变时触发
      battery.addEventListener("dischargingtimechange", function () {
        console.log("完全放电需要时间: " + battery.dischargingTime);
      });
    });
  };

  //webgl init
  const gl1 = () => {
    const ctx = document.getElementById("canvas");
    const gl = ctx.getContext("webgl");

    //着色器： 通过程序用固定的渲染管线，来处理图像的渲染，着色器分为两种,顶点着色器：顶点理解为坐标，片元着色器：像素

    //顶点着色器源码
    const VERTEX_SHADER_SOURCE = `
      void main() {
        gl_Position = vec4(1.0, 2.0, 0.0, 2.0);
        gl_PointSize = 100.0;
      }  
    `;
    //片元着色器源码
    const FRAGMENT_SHADER_SOURCE = `
      void main() {
        gl_FragColor = vec4(2.0, 0.0, 0.0, 2.0);
      }   
    `;
    //创建着色器
    const program = initShader(
      gl,
      VERTEX_SHADER_SOURCE,
      FRAGMENT_SHADER_SOURCE
    );

    //执行绘制
    gl.drawArrays(gl.POINTS, 0, 1);
    // gl.drawArrays(gl.LINES, 0, 1)
    // gl.drawArrays(gl.TRIANGLES, 0, 1)
  };

  //3D-echarts地图
  const map = () => {
    return initmap(document.getElementById("e-map"));
  };

  //cookies SameSite属性，默认值（Lax）， 用于限制跨站请求 None： 不做任何跨请求限制 Lax: 阻止发送cookie，但不限制超链接 Strict：阻止所有跨站
  //a.do.com/cn b.do.com/cn --- 同站   a.fo.com/cn a.do.com/cn --- 不同站  例外： a.do.io b.do.io ---  不同站

  //从一个文字转语音体现的知识
  const yuyin = {
    1: "根据文字获取语音--使用过自己的或者其他公司的语音合成服务--web页面发送文本到自己的服务器， 服务器处理文返回base64数据（为了统一格式使用base64）",
    2: "优化： 断句-- 某些标点进行切割以及（）”“ 中间的文字 ， 可以使用栈(键值对的形式)来记录断句结果",
    3: "传输： 一个接一个发送或者并发请求()",
  };
  //
  const textChose = () => {
    const container = document.getElementsByClassName("body");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const parentRect = container.getBoundingClientRect();
    const clientRects = range.getClientRects();

    for (let i = 0; i < clientRects.length; i++) {
      const rect = clientRects[i];
      const x = rect.left - parentRect.left;
      const y = rect.top - parentRect.top;
      const width = rect.right - rect.left;
      const height = rect.bottom - rect.top;

      // canvas 绘制
      ctx.fillRect(x, y, width, height);
    }
  };

  /** .child {
  overscroll-behavior-y: contain;
  overflow-y: auto;
}
overscroll-behavior 属性有 3 个值：

auto - 默认。元素的滚动会传播给祖先元素。

contain - 阻止滚动链接。滚动不会传播给祖先，但会显示元素内的原生效果。例如，Android 上的炫光效果或 iOS 上的回弹效果，当用户触摸滚动边界时会通知用户。注意：overscroll-behavior: contain 在 html 元素上使用可防止滚动导航操作。

none - 和 contain 一样，但它也可以防止节点本身的滚动效果（例如 Android 炫光或 iOS 回弹）。
*/

  //整数转罗马数字
  const roma = (val) => config.roma(val);

  //初始化
  useEffect(() => {
    textC();
    menuAnd();
    textSplit();
    beatry();
    gl1();
    map();
  }, []);

  return (
    <>
      <div className="home">
        <div className="home-div">
          <div className="home-item">
            <div className="circleCon">
              <Button
                onClick={() => {
                  timeOff(0);
                }}
              >
                渲染1000
              </Button>
              <div />
            </div>
          </div>
          <div className="home-item">
            <div className="left">
              <div>文字交融展开</div>
              <Button
                onClick={() => {
                  textClick();
                }}
              >
                点击交互
              </Button>
            </div>
            <div className="right">
              <div className="text-con">
                <span
                  className={
                    textUp ? "text-con-span text-up-ani" : "text-con-span"
                  }
                >
                  Yisa Education
                </span>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">3D卡片效果</div>
            <div className="right">
              <div className="D-img">
                <img className="img-1 cover" src={IMG1} alt="" />
                <img className="img-2 hero" src={IMG3} alt="" />
                {/* <img src="" alt="标题" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">自定义右键菜单</div>
            <div className="right">
              <div></div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">按钮手风琴</div>
            <div className="right">
              <div className="shoufeng">
                <div>
                  <img src={QiQiu} />
                  <span>这是气球</span>
                </div>
                <div>
                  <img src={QiQiu} />
                  <span>这是气球</span>
                </div>
                <div>
                  <img src={QiQiu} />
                  <span>这是气球</span>
                </div>
                <div>
                  <img src={QiQiu} />
                  <span>这是气球</span>
                </div>
                <div>
                  <img src={QiQiu} />
                  <span>这是气球</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">创意边框</div>
            <div className="right">
              <div className="changyi">
                <p>
                  Education is an essential part of our lives. It shapes the way
                  we think, the way we act, and the way we interact with the
                  world around us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">延迟动画</div>
            <div className="right">
              <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">
              <div>文字特效</div>
              <Button
                onClick={() => {
                  textClick2();
                }}
              >
                点击交互
              </Button>
            </div>
            <div className="right">
              <div className="reveal">{textUp2}</div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">动态栅格</div>
            <div className="right">
              <div className="shange change1">mui</div>
              <div className="shange">koenkk</div>
              <div className="shange change2">louislam</div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">按钮光效</div>
            <div className="right">
              <div className="zhezhao">
                <button className="btn btn-primary btn-ghost btn-shine">
                  hover me
                </button>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">安卓菜单</div>
            <div className="right">
              <nav className="navtab">
                <ul>
                  <li className="navtab-item active">
                    <svg
                      t="1580196202692"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="781"
                      width="36"
                      height="36"
                    >
                      <path
                        d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z"
                        p-id="782"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>首页</span>
                  </li>
                  <li className="navtab-item">
                    <svg
                      t="1580196351612"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1159"
                      width="36"
                      height="36"
                    >
                      <path
                        d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m149.162667 222.901334L444.16 386.357333a96 96 0 0 0-57.802667 57.813334l-78.122666 216.992a42.666667 42.666667 0 0 0 54.602666 54.602666l217.002667-78.122666a96 96 0 0 0 57.802667-57.813334l78.122666-216.992a42.666667 42.666667 0 0 0-54.602666-54.602666zM512 565.333333a53.333333 53.333333 0 1 0 0-106.666666 53.333333 53.333333 0 0 0 0 106.666666z"
                        p-id="1160"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>热点</span>
                  </li>
                  <li className="navtab-item">
                    <svg
                      t="1580196428669"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2609"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z"
                        p-id="2610"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>收藏</span>
                  </li>
                  <li className="navtab-item">
                    <svg
                      t="1580196480651"
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2891"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 586.666667a32 32 0 1 0 0 64 32 32 0 0 0 0-64z m-2.517333-373.333333c-48.416 0-92.746667 24.16-118.613334 63.413333a137.088 137.088 0 0 0-15.978666 33.237333 32 32 0 0 0 60.906666 19.690667c2.016-6.24 4.885333-12.202667 8.522667-17.717333C458.4 375.914667 482.709333 362.666667 509.482667 362.666667 552.277333 362.666667 586.666667 396.266667 586.666667 437.333333s-34.4 74.666667-77.194667 74.666667a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-35.584C603.946667 558.197333 650.666667 503.232 650.666667 437.333333c0-76.757333-63.381333-138.666667-141.194667-138.666666z"
                        p-id="2892"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>帮助</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="home-item">
            <div className="left">海洋</div>
            <div className="right">
              <video
                className="video-ocean"
                src="http://localhost:8000/ocean"
                autoPlay
                muted
                loop
                preload={true}
                poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
              ></video>
              <h1 className="h1-ocean">ocean</h1>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">悬停动画</div>
            <div className="right">
              <ul className="ul-move">
                <li>
                  <a href="javascript:;">
                    <i className="fa-brands fa-facebook-f"></i>云之家
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa-brands fa-twitter"></i>企业微信
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa-brands fa-google"></i>E-HR
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa-brands fa-linkedin"></i>一周小结
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <i className="fa-brands fa-instagram"></i>签到
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-item">
            <div className="left">飞鸟</div>
            <div className="right">
              <div className="container">
                <h1 className="h1-bird">飞鸟</h1>
                <div className="bird-container bird-container--one">
                  <div className="bird bird--one"></div>
                </div>
                <div className="bird-container bird-container--two">
                  <div className="bird bird--two"></div>
                </div>
                <div className="bird-container bird-container--three">
                  <div className="bird bird--three"></div>
                </div>
                <div className="bird-container bird-container--four">
                  <div className="bird bird--four"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">文本分割动画</div>
            <div className="right">
              <div className="Menu">
                <ul className="Menu-list" data-offset="10">
                  <li className="Menu-list-item" data-offset="20">
                    首页
                    <span className="Mask">
                      <span>首页</span>
                    </span>
                    <span className="Mask">
                      <span>首页</span>
                    </span>
                  </li>
                  <li className="Menu-list-item" data-offset="16">
                    关于
                    <span className="Mask">
                      <span>关于</span>
                    </span>
                    <span className="Mask">
                      <span>关于</span>
                    </span>
                  </li>
                  <li className="Menu-list-item" data-offset="12">
                    记录
                    <span className="Mask">
                      <span>记录</span>
                    </span>
                    <span className="Mask">
                      <span>记录</span>
                    </span>
                  </li>
                  <li className="Menu-list-item" data-offset="8">
                    热点
                    <span className="Mask">
                      <span>热点</span>
                    </span>
                    <span className="Mask">
                      <span>热点</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">按钮点击特效</div>
            <div className="right">
              <div className="v-align">
                <div className="hero-btn" onClick={() => btnClick()}>
                  <button className="btn">Click</button>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                  <span className="particles-circle"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">特效卡片</div>
            <div className="right">
              <div className="container-card">
                <div className="card">
                  <h2>North</h2>
                  <i className="fas fa-arrow-right"></i>
                  <p>a lonely trip.</p>
                  <div className="pic"></div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                  </div>
                  <button></button>
                </div>
                <div className="card card2">
                  <h2>Vauxhall</h2>
                  <i className="fas fa-arrow-right"></i>
                  <p>a lonely trip.</p>
                  <div className="pic"></div>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                  </div>
                  <button></button>
                </div>
              </div>
              <a
                href="https://dribbble.com/YancyMin"
                className="dr-url"
                target="_blank"
              >
                <img
                  className="dr"
                  src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="home-item">
            <div className="left">WebGl-1</div>
            <div className="right">
              <canvas id="canvas" width="100%" height="100%">
                不支持canvas
              </canvas>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">echarts3D地图</div>
            <div className="right">
              <div id="e-map"></div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">整数转罗马数字</div>
            <div className="right">
              <Input
                placeholder="请输入整数"
                onChange={(e) => {
                  setRomaNum(roma(e.target.value));
                }}
              ></Input>
              <div>
                <span>罗马数字：</span>
                <span>{romaNum}</span>
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">网格布局</div>
            <div className="right">
              <div className="div-grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">文字标注拼音</div>
            <div className="right">
              <ruby>
                一<rt>yi</rt>
              </ruby>
              <ruby>
                虎<rt>hu</rt>
              </ruby>
              <ruby>
                杀<rt>sha</rt>
              </ruby>
              <ruby>
                两<rt>liang</rt>
              </ruby>
              <ruby>
                羊<rt>yang</rt>
              </ruby>
            </div>
          </div>
          <div className="home-item">
            <div className="left">Antd颜色选择器</div>
            <div className="right">
              <Space>
                <Space direction="vertical">
                  <ColorPicker size="small" />
                  <ColorPicker />
                  <ColorPicker size="large" />
                </Space>
                <Space direction="vertical">
                  <ColorPicker size="small" showText />
                  <ColorPicker showText />
                  <ColorPicker size="large" showText />
                </Space>
              </Space>
            </div>
          </div>
          <div className="home-item">
            <div className="left">
              clip-path动画
            </div>
            <div className="right">
              <div class="container-u">
                <div class="letter u-u"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTokStudy;
