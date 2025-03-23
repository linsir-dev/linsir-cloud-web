import { requestClient } from '#/api/request';

const tenantUrl = 'linsir-saas-server/sysTenant/';

export namespace TenantApi {
  export interface PageFetchParams {
    [key: string]: any;
    page: number;
    pageSize: number;
  }

  export interface SysTenant {
    id: string;
    tenantCode: string;
    name: string;
    tel: string;
    phone: string;
    fax: string;
    address: string;
    enable: boolean;
    timeExpiration: string;
    description: string;
  }

  export interface SysTenantVo {
    id: string;
    tenantCode: string;
    name: string;
    tel: string;
    phone: string;
    fax: string;
    address: string;
    enable: boolean;
    timeExpiration: string;
    description: string;
    sysTenantExtWeb: {
      domainName: string;
      enableGuidePage: string;
      guidePageBackground: string;
      inset: string;
      loginBackground: string;
      logo: string;
      slogan: string;
      title: string;
    };
    sysTenantExtBusiness: {
      administrativeDivision: string;
      bankAccountPerson: string;
      businessArea: string;
      businessHead: string;
      creditCode: string;
      firmName: string;
      legalPerson: string;
      openBank: string;
      openBankAccount: string;
    };
    types: Array<string>;
  }
}

// 列表
async function getSysTenantList(params: TenantApi.PageFetchParams) {
  return requestClient.get<Array<TenantApi.SysTenantVo>>(`${tenantUrl}list`, {
    params,
  });
}

/**
 * 创建应用
 * @param data 应用数据
 */
async function createTenant(data: Omit<TenantApi.SysTenant, 'id'>) {
  return requestClient.post(`${tenantUrl}add`, data);
}

async function updateTenant(
  id: string,
  data: Omit<ApplicationApi.SysApplication, 'id'>,
) {
  return requestClient.put(`${tenantUrl}update/${id}`, data);
}

/**
 * 删除应用
 * @param id
 * @returns
 */
async function deleteTenant(id: string) {
  return requestClient.delete(`${tenantUrl}update/${id}`);
}
export { createTenant, deleteTenant, getSysTenantList, updateTenant };
