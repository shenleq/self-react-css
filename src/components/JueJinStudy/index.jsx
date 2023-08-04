import { React, useState, useEffect, useRef } from "react";
import { Button } from "antd";
import "./index.scss";

import jietu1 from "../../assets/picture/jietu1.png";
import jietu2 from "../../assets/picture/jietu2.png";

const JueJinStudy = (props) =>  {

  useEffect(() => {
    const buttonpop = document.getElementById("button")
    const pop = document.getElementById("pop")
    buttonpop.addEventListener('mouseenter', () => {
      pop.showPopover()
    })
    buttonpop.addEventListener('mouseleave', () => {
      pop.hidePopover()
    })
  },[])

  return (
    <>
      <div className="home">
        <div className="home-div">
          <div className="home-item">
            <div className="left">图片对比</div>
            <div className="right">
              <div className="wrap">
	              <img className="img" src={jietu1} />
                <input type="range" onInput={(e) => {
                  //变化给style添加--pos属性
                  e.target.parentNode.style.setProperty('--pos', e.target.value / 100)
                }} ></input>
	              <img className="img" src={jietu2} />
              </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">
               模拟文件结构
            </div>
            <div className="right">
            <div className="tree" id="tree">
              <details>
                <summary className="tree-item">
                  项目1
                </summary>
                <details>
                  <summary className="tree-item">
                    文件夹
                  </summary>
                  <details>
                    <summary className="tree-item">
                      sdd
                    </summary>
                  </details>
                </details>
                <details>
                  <summary className="tree-item">
                    chrome test
                  </summary>
                </details>
              </details>
              <details>
                <summary className="tree-item">
                  项目2
                </summary>
                <details>
                  <summary className="tree-item">
                    文件夹2-1
                  </summary>
                  <details>
                    <summary className="tree-item">
                      文件夹2-1-1
                    </summary>
                    <details>
                      <summary className="tree-item">
                        文件夹2-1-1-1
                      </summary>
                      <details>
                        <summary className="tree-item">
                          文件夹2-1-1-1-1
                        </summary>
                        <details>
                          <summary className="tree-item">
                            文件夹2-1-1-1-1-1
                          </summary>
                        </details>
                      </details>
                    </details>
                  </details>
                </details>
              </details>
            </div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">图片hover特效</div>
            <div className="right">
              <div className="img-hover">
                <img src={jietu1} alt="xboxyan" style={{'--n': 6}} />
              </div>
            </div>
          </div>
        </div>
        <div className="home-div">
          <div className="home-item">
            <div className="left">popover悬浮层</div>
            <div className="right">
              <div className="wrap-pop">
                <button id="button">hover 打开悬浮层</button>
                <button popovertarget="pop1">切换 auto 悬浮层</button>
                <button popovertarget="pop2">切换 manual 悬浮层</button>
              </div>
              <div id="pop" popover="manual">我是 hover 悬浮层</div>
              <div id="pop1" popover="auto">我是 auto 悬浮层，点击空白关闭</div>
              <div id="pop2" popover="manual">我是 manual 悬浮层</div>

              <div className="no-support"><p>🚨 你的浏览器不支持 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API" target="_top"><code>popover API</code></a>. 请尝试 Chrome 114+</p></div>
            </div>
          </div>
          <div className="home-item">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
        </div>        <div className="home-div">
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
        </div>        <div className="home-div">
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
        </div>        <div className="home-div">
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
        </div>        <div className="home-div">
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
          <div className="home-item">
            <div className="left"></div>
            <div className="right">
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default JueJinStudy