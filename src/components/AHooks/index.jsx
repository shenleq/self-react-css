import { React, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Input, message } from "antd";
import { 
  useRequest, 
  useToggle, 
  useSetState, 
  useBoolean, 
  useCookieState, 
  useLocalStorageState,
  useSessionStorageState ,
  useDebounce
} from "ahooks";
import useUrlState from '@ahooksjs/use-url-state';
import Mock from "mockjs";
import "./index.css";

const location = useLocation

/**
 * @description ahooks学习
 * @private useBoolean 管理boolean类型额state
 * @private const [state, { toggle(切换), set(设置值), setLeft(设置第一个值), setRight(设置第二个值) }] = useToggle('Hello', 'World'); 接受两个可选参数，在它们之间进行切换。
 * @private 
 */

//API
// const {
//   loading: boolean,
//   data?: TData,
//   error?: Error,
//   params: TParams || [],
//   run: (...params: TParams) => void,
//   runAsync: (...params: TParams) => Promise<TData>,
//   refresh: () => void,
//   refreshAsync: () => Promise<TData>,
//   mutate: (data?: TData | ((oldData?: TData) => (TData | undefined))) => void,
//   cancel: () => void,
// } = useRequest<TData, TParams>(
//   service: (...args: TParams) => Promise<TData>,
//   {
//     manual?: boolean,
//     defaultParams?: TParams,
//     onBefore?: (params: TParams) => void,
//     onSuccess?: (data: TData, params: TParams) => void,
//     onError?: (e: Error, params: TParams) => void,
//     onFinally?: (params: TParams, data?: TData, e?: Error) => void,
//   }
// );

const reg = /^[0-9]*$/;

const AHooks = () => {
  const [name, setName] = useState();
  const [mutateName, setMutateName] = useState();
  //触发函数，一般写网络请求，这里用定时器模拟
  const editName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        1;
        if (!reg.test(name)) {
          resolve();
        } else {
          setName("");
          reject(new Error("失败修改"));
        }
      }, 1000);
    });
  };
  //mutate函数
  const getUsername = () => {
    console.log("立即");
    return new Promise((resolve) => {
      setTimeout(() => {
        setMutateName(name);
      }, 1000);
    });
  };

  //refresh使我们可以使用上一次的参数，重新发起请求。 适和复杂参数场景
  //refreshAsync使我们可以使用上一次的参数，重新发起请求。当然 refresh 和 refreshAsync 的区别和 run 和 runAsync 是一致的。

  const { loading, run, runAsync, refresh, refreshAsync, cancel } = useRequest(
    editName,
    {
      manual: true, //控制是否自动执行
      loadingDelay: 300,
      //请求之前触发
      onBefore: () => {
        message.info("开始更改");
      },
      //使用run同步函数的情况
      onSuccess: (result, params) => {
        console.log(result);
        console.log(params);
        message.success(`成功修改为 "${name}" !`);
      },
      onError: (error) => {
        //error是edditName中的reject
        message.error(error.message);
      },
      //请求完成触发
      onFinally: () => {
        name === ""
          ? setTimeout(() => {
              message.error("最终更名失败");
            }, 1000)
          : setTimeout(() => {
              message.success("最终成功");
            }, 1000);
      },
    }
  );
  //mutate立即更改,我们修改了用户名，但是我们不希望等编辑接口调用成功之后，才给用户反馈。而是直接修改页面数据，同时在背后去调用修改接口，等修改接口返回之后，另外提供反馈
  const { data: username, mutate } = useRequest(getUsername, { manual: true });
  //使用runAsyn异步函数
  const onClick = async () => {
    try {
      await runAsync(name); //name是onSuccess中的params
    } catch (error) {
      message.error("异步失败修改");
    }
  };
  //重发
  const reOnClick = () => {
    //同步
    refresh();
  };
  //异步
  const reOnClick2 = async () => {
    try {
      await refreshAsync(); //name是onSuccess中的params
    } catch (error) {
      message.error("重发异步失败修改");
    }
  };
  //取消
  const nameCancle = () => {
    cancel;
    setName("");
  };
  /**
   * ------------------------------------------- Loading Delay使用 part2--------------------------------------------------------
   */
  function commonGetUsername() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock("@name"));
      }, 200);
    });
  }
  const action = useRequest(commonGetUsername);

  //设置300ms，如果300ms内有新的数据返回不会改变数据，返回最后一次更新的数据
  const withLoadingDelayAction = useRequest(commonGetUsername, {
    loadingDelay: 300, //可以延迟 loading 变成 true 的时间，有效防止闪烁
    pollingInterval: 3000, //轮询 通过设置 options.pollingInterval，进入轮询模式，useRequest 会定时触发 service 执行。
  });

  const [ready, { toggle }] = useToggle(false);

  const { data, readyLoading } = useRequest(commonGetUsername, {
    ready,
  });

  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
  };

  //使用ahooks的useSetState
  const [state, setState] = useSetState({
    hello: "",
    count: 0,
  });


  /**
   * --------------------------------------其他ahooks状态-------------------------------------------------------------------------------------------------
   */
  //toggle2函数切换toodleState为useToggle中的值 set相当于 setState setLeft 设置值为 Hello setRight 设置值为World
  const [toogleState, { toggle2, set, setLeft, setRight }] = useToggle('Hello', 'World'); 
  //触发后会在url后面添加一个键值对 这个例子是 count=1 url变成  http://localhost:3000/AHooks?count=1
  const [urlState, setUrlState] = useUrlState({ count: '1' });
  //触发后添加或改变自定义名字的cookies的值
  const [cookiesMessage, setCookiesMessage] = useCookieState('useCookieStateString');  //useCookieStateString为cookies的key， cookiesMessage为值， setCookiesMessage改变这个值
  //与useCookieState相似
  const [localMessage, setLocalMessage] = useLocalStorageState(
    'use-local-storage-state-demo1', //locaStorage的key
    {
      defaultValue: 'Hello~', //配置默认值Hello~
    },)
  //与useLocalStorageState用法一致
  const [sessionMessage, setSessionMessage] = useSessionStorageState(
    'use-session-storage-state-demo1', //locaStorage的key
    {
      defaultValue: 'Hello~', //配置默认值Hello~
    },
  );
  //防抖操作变量
  const [debouncedvalue, setDebouncedValue] = useState()
  //处理数据更新时的防抖问题，适用于输入、实时搜索等操作
  const debouncedValue = useDebounce(debouncedvalue, { wait: 500, maxWait: 1000 });  //wait等待时间 maxWait最大等待时间 trailing 	是否在延迟开始后调用函数  leading 是否在延迟开始前调用函数
  //节流操作变量
  const [throttledvalue, setThrottledValue] = useState()
  //节流的数据更新 trailing 是否在延迟开始后调用函数  leading 是否在延迟开始前调用函数
  const throttledValue = useThrottle(throttledvalue, { wait: 500 });
 
  useEffect(() => {
    console.log(location)
    setUrlState({acount: 3}) //添加query => http://localhost:3000/AHooks?count=3
    setLocalMessage({'use-session-storage-state-demo1': "巴拉巴拉"})
    setSessionMessage("哔哩哔哩")
  },[])
   
  return (
    <div className="name-div">
      <div className="name-div-item">
        <div>
          <Input
            className="nameInput"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="输入姓名"
            style={{ width: 240, marginRight: 16 }}
          />
          {/* <Button disabled={loading} onClick={run(name)}>{loading ? "loading" : "更改名字"}</Button></div> */}
          <Button disabled={loading} onClick={onClick}>
            {loading ? "loading" : "更改名字"}
          </Button>
          <Button onClick={nameCancle}>取消</Button>
        </div>
        <div>
          <span className="name-span">姓名：{name}</span>
        </div>
        <div>
          <Button onClick={reOnClick2}>重发</Button>
          <Button onClick={() => mutate(name)}>立即更改</Button>
        </div>
        <div>
          <span>立即改名为：{username}</span>
        </div>
        <div>
          <Button type="button" onClick={trigger}>
            运行
          </Button>
          <div style={{ margin: "24px 0", width: 300 }}>
            Username: {action.loading ? "Loading..." : action.data}
          </div>
          <div>
            Username:{" "}
            {withLoadingDelayAction.loading
              ? "Loading..."
              : withLoadingDelayAction.data}
          </div>
        </div>
      </div>
      {/* 从part2开始 */}
      <div className="name-div-item">
        <div>
          <p>
            Ready: {JSON.stringify(ready)}
            <button onClick={toggle} style={{ marginLeft: 16 }}>
              Toggle Ready
            </button>
          </p>
          <p>Username: {loading ? "Loading" : data}</p>
        </div>
        <div>
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <p>
            <button type="button" onClick={() => setState({ hello: "world" })}>
              set hello
            </button>
            <button
              type="button"
              onClick={() => setState({ foo: "bar" })}
              style={{ margin: "0 8px" }}
            >
              set foo
            </button>
            <button
              type="button"
              onClick={() => setState((prev) => ({ count: prev.count + 1 }))}
            >
              count + 1
            </button>
          </p>
        </div>
      </div>
      <div className="name-div-item"></div>
    </div>
  );
};

export default AHooks;
