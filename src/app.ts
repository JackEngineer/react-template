import { RequestConfig } from 'umi';
import { message } from 'antd';

const SUCCESS = 200; // request success status code
const TIMEOUT = 15000 * 4; // request timeout

const isHttpError = async (status: number) => {
  if (status !== SUCCESS) {
    const statusCodeMessage: { [key: number]: string } = {
      401: '未登录',
      403: '拒绝访问',
      404: '请求资源未找到',
      500: '服务端内部错误',
      501: '服务器不支持请求的功能',
      502: '网关错误',
      503: '服务不可用，服务器暂时过载或维护',
      504: '网关超时',
    };
    await message.error(statusCodeMessage[status]);
    return false;
  }
  return true;
};

const isServerError = (data: any) => {
  switch (data.code) {
    case 20000:
      // do something
      return true;
    case 28004:
      // do something
      return true;
    default:
      return true;
  }
};

export const request: RequestConfig = {
  timeout: TIMEOUT,
  prefix: '/api',
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData?.ActionStatus === 'OK' || resData?.success,
        errorMessage:
          resData.ErrorInfo ||
          resData?.msg ||
          resData?.message ||
          resData?.data,
        showType: 2,
        errorCode: resData.ErrorCode || resData?.code,
      };
    },
  },
  requestInterceptors: [
    (url, options) => {
      const token = ''; // your token
      const ops: any = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        ...options,
      };
      if (token) {
        ops.headers['token'] = token;
      }
      return {
        url,
        options: ops,
      };
    },
  ],
  responseInterceptors: [
    async (response) => {
      const data = await response.clone().json();
      const message = data?.message || data?.data || '未知错误';
      const is200 = await isHttpError(response.status);
      if (is200) {
        const isOk = isServerError(data);
        if (isOk) {
          return response;
        }
        return Promise.reject(new Error(message));
      }
      return Promise.reject(new Error(message));
    },
  ],
};

export async function getInitialState() {
  // user info
  const user = {};
  return user;
}
