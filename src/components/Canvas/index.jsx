import { React, useState, useEffect } from "react";
import { Button } from "antd";

//判断设备
const mobileStatus = /Mobile|Android|iPhone/i.test(navigator.userAgent);
let ctx
let ctxcanvas
const Canvas = () => {

  // 配置内容
  const config = {
    width: 400, // 宽度
    height: 200, // 高度
    lineWidth: 5, // 线宽
    strokeStyle: "red", // 线条颜色
    lineCap: "round", // 设置线条两端圆角
    lineJoin: "round", // 线条交汇处圆角
  };
  const client = {
    offsetX: 0, // 偏移量
    offsetY: 0,
    endX: 0, // 坐标
    endY: 0,
  };
  const cancle = () => {
    ctx.clearRect(0, 0, config.width, config.height)
  };
  const save = () => {};
  // 绘制
  const draw = (event) => {
    // 获取当前坐标点位
    const { pageX, pageY } = mobileStatus ? event.changedTouches[0] : event;
    // 修改最后一次绘制的坐标点
    client.endX = pageX;
    client.endY = pageY;

    // 根据坐标点位移动添加线条
    ctx.lineTo(pageX, pageY);

    // 绘制
    ctx.stroke();
  };

  // 初始化
  const init = (event) => {
    console.log(ctx.fillStyle)
    // 设置填充背景色
    ctx.fillStyle = "transparent";
    // 绘制填充矩形
    ctx.fillRect(
      0, // x 轴起始绘制位置
      0, // y 轴起始绘制位置
      config.width, // 宽度
      config.height // 高度
    );
    // 获取偏移量及坐标
    const { offsetX, offsetY, pageX, pageY } = mobileStatus
      ? event.changedTouches[0]
      : event;

    // 修改上次的偏移量及坐标
    client.offsetX = offsetX;
    client.offsetY = offsetY;
    client.endX = pageX;
    client.endY = pageY;

    // 清除以上一次 beginPath 之后的所有路径，进行绘制
    ctx.beginPath();

    // 根据配置文件设置进行相应配置
    ctx.lineWidth = config.lineWidth;
    ctx.strokeStyle = config.strokeStyle;
    ctx.lineCap = config.lineCap;
    ctx.lineJoin = config.lineJoin;

    // 设置画线起始点位
    ctx.moveTo(client.endX, client.endY);

    // 监听 鼠标移动或手势移动
    ctxcanvas.addEventListener(mobileStatus ? "touchmove" : "mousemove", draw);
  };
  // 结束绘制
  const cloaseDraw = () => {
    // 结束绘制
    ctx.closePath()
    // 移除鼠标移动或手势移动监听器
    ctxcanvas.removeEventListener("mousemove", draw)
  }

  useEffect(() => {
    let canvas1 = document.getElementById("canvas1");
    // 设置宽高
    canvas1.width = config.width;
    canvas1.height = config.height;
    // 设置一个边框，方便我们查看及使用
    canvas1.style.border = "1px solid #000";
    // 创建上下文
    ctx = canvas1.getContext("2d");
    ctxcanvas = canvas1
    // 创建鼠标/手势按下监听器
    canvas1.addEventListener(mobileStatus ? "touchstart" : "mousedown", init);
    // 创建鼠标/手势 弹起/离开 监听器
    canvas1.addEventListener(mobileStatus ? "touchend" :"mouseup", cloaseDraw)
  }, []);
  return (
    <>
      <canvas id="canvas1"></canvas>
      <Button
        onClick={() => {
          cancle;
        }}
      >
        取消
      </Button>
      <Button
        onClick={() => {
          save;
        }}
      >
        保存
      </Button>
    </>
  );
};

export default Canvas;
