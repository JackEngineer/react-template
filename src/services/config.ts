import { useRequest } from '@@/plugin-request/request';

export interface ServiceConfig {
  url: string;
  method: string;
  headers?: {
    'Content-Type'?: string;
    APK?: string;
    flag?: number;
  };
}

const commonOptions = { manual: true };

const service = (params: any, config: ServiceConfig) => {
  const path = params?.path;
  if (path) {
    for (const key in path) {
      if (Object.prototype.hasOwnProperty.call(path, key)) {
        config.url = config.url.replace('{' + key + '}', path[key]);
      }
    }
  }
  return { ...config, ...params };
};

export const pdAjax = (
  serviceConfig: ServiceConfig,
  options: any = {},
): any => {
  return useRequest((params?: any) => service(params, { ...serviceConfig }), {
    ...commonOptions,
    ...options,
  });
};
