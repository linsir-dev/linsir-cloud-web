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

export { getSysTenantList };
