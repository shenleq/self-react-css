import { React, useEffect, useState } from "react";
import { Input, Button } from "antd";
import {THREE} from "three.js"
import "css-doodle";
import "./index.css";
import "./mask.css";
import { useRef } from "react";
import I1 from "../../assets/picture/1.png"
import I2 from "../../assets/picture/2.png"
import I3 from "../../assets/picture/3.png"

export default function StudyCss() {
  //关于==判断的小知识
  let a = {
    n: 1,
    valueOf: function () {
      //对象内部的函数使用对象的属性最好不用箭头函数
      return this.n++;
    },
  };

  // console.log(a === 1 && a === 2 && a=== 3);如果是===那是肯定不行的，因为会从内存来比较
  // console.log(a == 1 && a == 2 && a == 4);
  //void 表达式,undefined是window.undefined,是一个window的属性(算是个bug),是一个只读属性，
  // let undefined = 1;a2 = undefined;console.log(a2);//会输出1,这就是存在的问题
  let a2 = void 0;
  // console.log(a2);

  //递归求和
  function sum(nums) {
    //从数组的第几位加到结束
    function f(i) {
      return i >= nums.length ? 0 : nums[i] + f(i + 1);
    }
    //从第0位
    return f(0);
  }
  // console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]))

  //零宽字符
  let account1 =
      "随风而#8205;&#8205;&#8203;&#8205;&#8205;&#8205;&#8203;&#8204;&#8205;&#8204;&#8203;&#8204;&#8204;&#8204;&#8203;&#8204;3去",
    account2 = "随风而去";

  //生成彩色文字
  const [colorfullText, setColorfullText] = useState("");
  const [colorfullTextDoc, setColorfullTextDoc] = useState();
  const $colorTextSpan = function (e) {
    colorfullTextDoc[0].innerHTML = null;
    for (let i = 0; i < e.length; i++) {
      let span = [];
      span[i] = document.createElement("span");
      span[i].innerText = e[i];
      span[i].style.animationDelay = `${0.2 * i}s`;
      colorfullTextDoc[0].appendChild(span[i]);
    }
  };
  const $clearTextSpan = () => {
    setColorfullText("");
    colorfullTextDoc[0].innerHTML = null;
  };
  const [lizi, setLizi] = useState();

  //屏幕
  const [scene, setScene] = useState(new THREE.Scene());
  //相机
  const [camera, setCamera] = useState();
  //渲染
  const [renderer, setRenderer] = useState(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  //控制
  const [controls, setControls] = useState(new OrbitControls(camera, renderer.domElement));
  const canvas = useRef()

  // 初始化相机
  const initCamera = () => {
   this.camera = new THREE.PerspectiveCamera(
     65,
     window.innerWidth / window.innerHeight,
     0.1,
     1000
   );
   this.camera.position.set(-5, 0, 15);
  }
  //初始化场景
  const  initScene = () => {
    scene.background = new THREE.CubeTextureLoader().load([
      I1,
      I2,
      I3,
      I1,
      I2,
      I3,
    ]);
  }
  // 初始化渲染器
  const  initRenderer = () => {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    renderer.setClearColor(0xeeeeee);
    //告诉渲染器需要阴影效果
    renderer.shadowMap.enabled = true;
    // 将场景添加到页面中
    canvas.current.appendChild(this.renderer.domElement);
  };
  //初始化控制器
  const  initControls = () => {
    //关闭左键拖拽（修改OrbitControls源码版本）
    controls.enablePan = false;
    //关闭可以缩放
    this.controls.enableZoom = false;
  }
  //初始化动画函数
  const  animate = () => {
   requestAnimationFrame(animate);
   this.renderer.render(scene, camera);
  };
  useEffect(() => {
    setColorfullTextDoc(document.getElementsByClassName("colorfullText"));
    //特效
    setLizi  (document.getElementById("lizi")[0]);

    initScene();
    initCamera();
    initRenderer();
    initControls();
    animate();
  }, []);

  return (
    <div className="study-css">
      <div className="img-wai">
        <div className="img-container">
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
          <div className="img-item"></div>
        </div>
      </div>
      <div className="img-wai">
        <div className="header">
          <Input
            placeholder="说点什么吧"
            value={colorfullText}
            onChange={(e) => {
              setColorfullText(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="colorfullText"></div>
          <Button onClick={() => $colorTextSpan(colorfullText)}>确定</Button>
          <Button onClick={$clearTextSpan}>清除</Button>
        </div>
        <div>
          <h1 contentEditable className="text3D">
            这里是立体文字
          </h1>
        </div>
      </div>
      <div className="img-wai">
        {/* img-mask遮罩层配合动画实现隐藏特效 --- https://juejin.cn/post/7178791075652321336*/}
        <div className="img-mask"></div>
      </div>
      <div className="img-wai">
        <css-doodle click-to-update use="var(--rule1)"></css-doodle>
      </div>
      <div className="img-wai">
        <div
          ref={this.canvas}
          style={{ width: "780px", height: "720px" }}
        ></div>  
      </div>
    </div>
  );
}
