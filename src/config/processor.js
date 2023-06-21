const processor = {};
// import * as fs from 'fs'

processor.doLoad = function doLoad() {
  const video = document.getElementById('video');
  this.imgUrl = '';
  this.video = video;
  this.c = document.getElementById('canvas');
  this.ctx = this.c.getContext('2d');
  // this.c2 = document.getElementById('c2');
  // this.ctx2 = this.c2.getContext('2d');
  video.addEventListener('play', () => {
      let w = video.videoWidth / 2.4;
      let h = video.videoHeight / 2.3;
      console.log(w, h)
      this.timerCallback(w, h);
  }, 20);
};
processor.timerCallback = function timerCallback(w, h) {
  if (this.video.paused || this.video.ended) {
    return;
  }
  this.computeFrame(w, h);
  setTimeout(() => {
      this.timerCallback(w, h);
    }, 0);
};
processor.computeFrame = function computeFrame(w, h) {
  this.ctx.drawImage(this.video, 0, 0, w, h);
};

processor.cut = function cut(){
  this.imgUrl = this.c.toDataURL('png');
  // let arr = this.imgUrl.split(",")
  // let name = "cober.png"; // 定义文件名字（例如：cober.png）
  // const type = "png";
  // let mime = arr[0].match(/:(.*?);/)[1] || type;
  //   // 去掉url的头，并转化为byte
  //   let bytes = window.atob(arr[1]);
  //   // 处理异常,将ascii码小于0的转换为大于0
  //   let ab = new ArrayBuffer(bytes.length);
  //   // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  //   let ia = new Uint8Array(ab);
  //   for (let i = 0; i < bytes.length; i++) {
  //       ia[i] = bytes.charCodeAt(i);
  //   }
  //   return new Blob([ab], {
  //       type: mime
  //   });
  return this.imgUrl
};



export default processor