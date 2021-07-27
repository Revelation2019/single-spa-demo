import { addErrorHandler, getAppStatus, LifeCycles, registerApplication, setBootstrapMaxTime, setMountMaxTime, setUnmountMaxTime, start } from 'single-spa';
import axios from 'axios';
import { routerConfig } from './router-config';

interface IImports {
  imports: {
    [key: string]: string;
  }
}

let styleTag: any = {};

/** 插入新的importMap */
const insertNewImportMap = (newMapJSON: IImports) => {
  return new Promise<void>(resolve => {
      const newScript = document.createElement('script');
      newScript.type = 'systemjs-importmap';
      newScript.text = JSON.stringify(newMapJSON);
      document.head.appendChild(newScript);
      resolve()
  })
}

/** 使用原生script加载子应用脚本 */
// const insertScript = (src: string) => {
//   return new Promise<void>((resolve, reject) => {
//     const script = document.createElement('script');
//     script.charset = 'utf-8';
//     script.async = true;
//     script.crossOrigin = 'anonymous';
//     script.onload = () => {
//       document.head.removeChild(script);
//       resolve();
//     };
//     script.onerror = reject;
//     script.src = src;
//     document.head.appendChild(script);
//   }) 
// }

/** 匹配路由 */
const pathPrefix = (prefix: string) => {
  return (location: Location) => location.hash.startsWith(prefix);
}

/** 获取构建后生成的资源清单asset-manifest.json */
const fetchAssets = (url: string) => {
  return new Promise<string[]>(async (resolve) => {
    const mainfest = 'asset-manifest.json';
    const { data } = await axios.get(`${url}/${mainfest}?version=${Date.now()}`);
    const { files } = data;
    console.log('data', data)
    resolve(Object.values(files as string[]).filter(s => /\^*.(js|css)$/.test(s)));
  });
}

/** 根据路由加载子应用 */
const applicationOrLoadingFn = async (url: string, appName: string): Promise<LifeCycles> => {
  /** 获取mainfest */
  const files = await fetchAssets(url);
  /** 获取JS脚本，并出入到importsmap中，后续通过systemjs获取 */
  // const maps: IImports = { imports: {} } as IImports;
  let styleText: string = '';
  const JSList = files.filter(s => /\^*.js$/.test(s));
  
  await Promise.all(JSList.map((file: string) => axios.get(`${url}${file}?version=${Date.now()}`))).then(res => {
    res.forEach(r => {
      // new Function(r.data)();
      eval.call(null, r.data);
    })
  })
  
  // JSList.forEach(async (file: string) => {
  //   maps.imports[`@${appName}${file}`] = `${url}${file}?version=${Date.now()}`
  // });
  // await insertNewImportMap(maps);
  // await Promise.all(Object.keys(maps.imports).map((key: string) => (window as any).System.import(key)))

  /** 注入style */
  const CSSList = files.filter(s => /\^*.css$/.test(s));
  await Promise.all(CSSList.map((file: string) => axios.get(`${url}${file}?version=${Date.now()}`))).then(res => {
    styleText = res.map(r => r.data).join('\n');
    const style = document.createElement('style');
    style.id = appName;
    styleTag[appName] = style;
    style.appendChild(document.createTextNode(styleText));
    document.head.appendChild(style);
  })

  console.log('appName', appName, (window as any)[appName])
  return (window as any)[appName];
}

/** 注册single-spa应用 */
routerConfig.forEach((item) => {
  const { appName, hash, url } = item;
  registerApplication(appName, ({ name }) => applicationOrLoadingFn(url, name), pathPrefix(hash), (name) => ({
    appName: name,
    styleTag
  }));
})

// 生命周期函数发生错误
addErrorHandler(function (err) {
  console.log('err:', err);
  console.log(getAppStatus(err.appOrParcelName));
});
setUnmountMaxTime(3000);
setMountMaxTime(3000);
setBootstrapMaxTime(3000);


start();