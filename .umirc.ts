import { defineConfig } from 'umi';
import routes from '@/routes';

const BASE_PATH = '/template/'; // your project name or other...

const paths = ['/api']; // your request prefix name
interface Proxy {
  [key: string]: {
    target: string;
    changeOrigin: boolean;
  };
}

const getProxy = () => {
  const map: Proxy = {};
  paths.forEach((path) => {
    map[path] = {
      target: 'http://192.168.190.177:8222', // real request ip
      changeOrigin: true,
    };
  });
  return map;
};

export default defineConfig({
  title: 'your document title',
  favicon: BASE_PATH + 'favicon.ico',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  antd: {},
  mfsu: {},
  proxy: {
    ...getProxy(),
  },
  chainWebpack(config) {
    config.module
      .rule('fonts')
      .test(/\.(otf|ttc|ttf|eot|svg|woff(2)?)(\?[a-z\d]+)?$/)
      .use('file-loader')
      .loader('file-loader');
  },
});
