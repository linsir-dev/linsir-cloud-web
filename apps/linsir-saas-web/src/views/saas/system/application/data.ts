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
    {
      component: 'Input',
      fieldName: 'englishName',
      label: '英文名称',
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
    { field: 'id', title: 'ID' },
    { field: 'name', title: '应用名称' },
    { field: 'englishName', title: '英文名称' },
    { field: 'ver', title: '版本' },
    { field: 'ico', title: 'ico' },
    { field: 'intoLink', title: '连接' },
    { field: 'loginImg', title: '登陆图片' },
    { field: 'logo', title: 'LOGO' },
    { field: 'createdTime', title: '创建时间' },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'name',
          nameTitle: 'xxx',
          onClick: onActionClick,
        },
        name: 'CellOperation',
        options: [
          {
            code: 'append',
            text: '新增下级',
          },
          'edit', // 默认的编辑按钮
          'delete', // 默认的删除按钮
        ],
      },
      field: 'operation',
      fixed: 'right',
      headerAlign: 'center',
      showOverflow: false,
      title: $t('system.menu.operation'),
      width: 130,
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
      label: $t('system.applicaiton.name'),
      rules: z
        .string()
        .min(
          2,
          $t('ui.formRules.minLength', [$t('system.applicaiton.name'), 2]),
        )
        .max(
          20,
          $t('ui.formRules.maxLength', [$t('system.applicaiton.name'), 20]),
        ),
    },
    {
      component: 'Input',
      fieldName: 'englishName',
      label: $t('system.applicaiton.englishName'),
      rules: z.string(),
    },
    {
      component: 'Input',
      fieldName: 'ver',
      label: $t('system.applicaiton.ver'),
      rules: z
        .string()
        .min(2, $t('ui.formRules.minLength', [$t('system.dept.deptName'), 2]))
        .max(
          20,
          $t('ui.formRules.maxLength', [$t('system.dept.deptName'), 20]),
        ),
    },
    {
      component: 'Input',
      fieldName: 'business',
      label: $t('system.applicaiton.business'),
    },
    {
      component: 'IconPicker',
      fieldName: 'ico',
      label: $t('system.applicaiton.ico'),
    },
    {
      component: 'Input',
      fieldName: 'intoLink',
      label: $t('system.applicaiton.intoLink'),
      rules: z.string(),
    },
    {
      component: 'Input',
      fieldName: 'loginImg',
      label: $t('system.applicaiton.loginImg'),
    },
    {
      component: 'Input',
      fieldName: 'logo',
      label: $t('system.applicaiton.logo'),
    },
  ];
}
