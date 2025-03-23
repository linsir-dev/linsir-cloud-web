import { requestClient } from '#/api/request';

const modelUrl = 'linsir-saas-server/sysProject/';

export namespace ProjectApi {
  export interface PageFetchParams {
    [key: string]: any;
    page: number;
    pageSize: number;
  }
  export interface Sysproject {
    name: string;
    link: string;
    intro: string;
    appId: string;
  }
}

/**
 * 获取示例表格数据
 */
async function getProjectList(params: ProjectApi.PageFetchParams) {
  return requestClient.get<Array<ProjectApi.Sysproject>>(`${modelUrl}list`, {
    params,
  });
}

/**
 * 创建应用
 * @param data 应用数据
 */
async function createProject(data: Omit<ApplicationApi.SysApplication, 'id'>) {
  return requestClient.post(`${modelUrl}add`, data);
}

export { createProject, getProjectList };
