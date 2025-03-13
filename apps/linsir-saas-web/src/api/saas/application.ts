import { requestClient } from '#/api/request';

const applicationUrl = 'linsir-saas-server/sysApplication/';

export namespace ApplicationApi {
  export interface PageFetchParams {
    [key: string]: any;
    page: number;
    pageSize: number;
  }

  export interface SysApplication {
    id: string;
    name: string;
    englishName: string;
    ver: string;
    business: string;
    ico: string;
    intoLink: string;
    loginImg: string;
    logo: string;
  }
}

/**
 * 获取示例表格数据
 */
async function getApplicationList(params: DemoTableApi.PageFetchParams) {
  return requestClient.get<Array<ApplicationApi.SysApplication>>(
    `${applicationUrl}list`,
    { params },
  );
}

/**
 * 创建应用
 * @param data 应用数据
 */
async function createApplication(
  data: Omit<ApplicationApi.SysApplication, 'id'>,
) {
  return requestClient.post(`${applicationUrl}add`, data);
}

/**
 * 更新应用
 * @param id
 * @param data
 * @returns
 */
async function updateApplication(
  id: string,
  data: Omit<ApplicationApi.SysApplication, 'id'>,
) {
  return requestClient.put(`${applicationUrl}update/${id}`, data);
}

/**
 * 删除应用
 * @param id
 * @returns
 */
async function deleteApplition(id: string) {
  return requestClient.delete(`${applicationUrl}update/${id}`);
}

export {
  createApplication,
  deleteApplition,
  getApplicationList,
  updateApplication,
};
