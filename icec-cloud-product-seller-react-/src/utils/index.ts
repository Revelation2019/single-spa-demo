import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react';

const domElementGetter = () => {
  let el = document.getElementById("micro-content");
  if (!el) {
    el = document.createElement('div');
    el.id = 'micro-content';
    document.body.appendChild(el);
  }

  return el;
}

class DiffSandbox {
  name: any;
  modifyMap: any;
  windowSnapshot: any;
  constructor(name: any) {
    this.name = name;
    this.modifyMap = {}; // 存放修改的属性
    this.windowSnapshot = {};
  }

  active() {
    // 缓存active状态的沙箱
    this.windowSnapshot = {};
    for (const item in window) {
      this.windowSnapshot[item] = window[item];
    }
    Object.keys(this.modifyMap).forEach((p: any) => {
      window[p] = this.modifyMap[p];
    })
  }

  inactive() {
    for (const item in window) {
      if (this.windowSnapshot[item] !== window[item]) {
        // 记录变更
        this.modifyMap[item] = window[item];
        // 还原window
        window[item] = this.windowSnapshot[item];
      }
    }
  }
}

/** single-spa应用包装器 */
export const singleSpaPacker = (rootComponent: React.FC<any>) => {

  const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter,
  })

  const diffSandbox = new DiffSandbox('');
  
  const bootstrap = (props: any) => {
    console.log('bootstrp', props.styleTag)
    
    diffSandbox.active();
    return reactLifecycles.bootstrap(props);
  }

  const mount = (props: any) => {
    console.log('mount', props.styleTag)
  
    document.head.appendChild(props.styleTag[props.name]);
    return reactLifecycles.mount(props);
  }

  const unmount = (props: any) => {
    console.log('unmount', props.styleTag)
   
    props.styleTag[props.appName].remove();
    diffSandbox.inactive();
    return reactLifecycles.unmount(props);
  }

  return { bootstrap, mount, unmount };
}
