interface IRouterConfig {
  appName: string;
  hash: string;
  url: string;
}

export const routerConfig: IRouterConfig[] = [
  {
    appName: 'icec-cloud-inquiry-mall-react',
    hash: '#/inquiry',
    url: 'http://localhost:8234'
  },
  {
    appName: 'icec-cloud-product-seller-react',
    hash: '#/product',
    url: 'http://localhost:8235'
  }
]
