import {React, useEffect, useState} from 'react'
import { Input , Button} from 'antd'
import "./index.css"

export default function StudyCss() {
  //关于==判断的小知识
  let a = {
    n: 1,
    valueOf: function () {    //对象内部的函数使用对象的属性最好不用箭头函数
      return this.n++
    }
  }

  // console.log(a === 1 && a === 2 && a=== 3);如果是===那是肯定不行的，因为会从内存来比较
  console.log(a == 1 && a == 2 && a == 4);
  //void 表达式,undefined是window.undefined,是一个window的属性(算是个bug),是一个只读属性，
  // let undefined = 1;a2 = undefined;console.log(a2);//会输出1,这就是存在的问题
  let a2 = void 0
  console.log(a2);

  //递归求和
  function sum(nums) {
    //从数组的第几位加到结束
    function f(i) {
      return i >= nums.length ? 0 : nums[i] + f(i + 1)
    }
    //从第0位
    return f(0)
  }
  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]))

  //零宽字符
  let account1 = "随风而#8205;&#8205;&#8203;&#8205;&#8205;&#8205;&#8203;&#8204;&#8205;&#8204;&#8203;&#8204;&#8204;&#8204;&#8203;&#8204;3去", account2 = "随风而去"

  //生成彩色文字
  const [colorfullText,setColorfullText] = useState()
  const [deleteKey, setDeleteKey] = useState()
  useEffect(() => {
    setColorfullText(document.getElementsByClassName('colorfullText'))
    setDeleteKey(document.getElementsByClassName('ant-input'))
  },[])
  const $colorTextSpan = function(e){
    let Span = document.createElement('span')
    deleteKey[0].onKeyUp = (e) => {
      if(e.keyCode == 46){
        Array.from(e.target.value).map((n) => {
          Span.innerText = n
          colorfullText[0].appendChild(Span)
        })
      }else if(e.keyCode == 13){

      }
    }
  }
  const $clearTextSpan = () => {
    colorfullText[0].innerHTML = ''
  }


  return (
    <div className='study-css'>
      <div className='img-wai'>
        <div className='img-container'>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
          <div className='img-item'></div>
        </div>
      </div>
      <div className='img-wai'>
        <div className='header'>
          <Input
            placeholder='说点什么吧'
            onChange={(e) => {$colorTextSpan(e)}}
          />
        </div>
        <div className='colorfullText'>
          <span>&nbsp;</span>
        </div>
        <Button
          onClick={$clearTextSpan}
        >清除</Button>
      </div>
    </div>
  )
}
