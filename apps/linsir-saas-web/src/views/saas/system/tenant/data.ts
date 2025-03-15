import type { VxeTableGridOptions } from '@vben/plugins/vxe-table';

import type { VbenFormSchema } from '#/adapter/form';

import { z } from '#/adapter/form';
import { $t } from '#/locales';

/**
 * 列表查询表单
 */
export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: '名称',
    },
  ];
}
/**
 * 获取表格列配置
 * @description 使用函数的形式返回列数据而不是直接export一个Array常量，是为了响应语言切换时重新翻译表头
 * @param onActionClick 表格操作按钮点击事件
 */
export function useColumns(
  onActionClick?: OnActionClickFn<T>,
): VxeTableGridOptions['columns'] {
  return [
    { title: '序号', type: 'seq', width: 50 },
    // { field: 'id', title: 'ID' },
    { field: 'name', title: '租户名称', width: 250 },
    { field: 'tenantCode', title: '租户编码' },
    { field: 'tel', title: '联系方式' },
    { field: 'phone', title: '电话' },
    { field: 'fax', title: '传真' },
    { field: 'address', title: '简要地址' },
    {
      field: 'enable',
      title: '是否可用',
      slots: { default: 'enable' },
    },
    { field: 'timeExpiration', title: '到期时间' },
    { field: 'description', title: '描述' },
    {
      field: 'types',
      title: '网站标题',
      slots: { default: 'types' },
    },
    { field: 'createdTime', title: '创建时间' },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'name',
          nameTitle: 'name',
          onClick: onActionClick,
        },
        name: 'CellOperation',
        options: [
          'edit', // 默认的编辑按钮
          'delete', // 默认的删除按钮
        ],
      },
      field: 'operation',
      fixed: 'right',
      headerAlign: 'center',
      showOverflow: false,
      title: $t('system.operation'),
      width: 160,
    },
  ];
}

/**
 * 获取编辑表单的字段配置。如果没有使用多语言，可以直接export一个数组常量
 */
export function useSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'name',
      label: $t('system.tenant.name'),
      rules: z.string(),
    },
    {
      component: 'Input',
      fieldName: 'tel',
      label: $t('system.tenant.tel'),
      rules: z.string(),
    },
    {
      component: 'Input',
      fieldName: 'phone',
      label: $t('system.tenant.phone'),
      rules: z.string(),
    },
    {
      component: 'Input',
      fieldName: 'fax',
      label: $t('system.tenant.fax'),
    },
    {
      component: 'Input',
      fieldName: 'address',
      label: $t('system.tenant.address'),
      rules: z.string(),
    },
    {
      component: 'Switch',
      fieldName: 'enable',
      label: $t('system.tenant.enable'),
      rules: z.string(),
    },
    {
      component: 'DatePicker',
      fieldName: 'timeExpiration',
      label: $t('system.tenant.timeExpiration'),
    },
    {
      component: 'Input',
      fieldName: 'description',
      label: $t('system.tenant.description'),
    },
  ];
}
