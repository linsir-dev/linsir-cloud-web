<script lang="ts" setup>
import type { ApplicationApi } from '#/api';

import { computed, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { createApplication, updateApplication } from '#/api';
import { $t } from '#/locales';

import { useSchema } from '../data';

const emits = defineEmits(['success']);
// 表单数据
const formData = ref<ApplicationApi.SysApplication>();

// 修改或新增表单
const [Form, formApi] = useVbenForm({
  commonConfig: {
    colon: true,
    formItemClass: 'col-span-2 md:col-span-1',
  },
  schema: useSchema(),
  showDefaultActions: false,
  wrapperClass: 'grid-cols-2 gap-x-4',
});

const id = ref();
// 抽屉设置
const [Drawer, drawerApi] = useVbenDrawer({
  async onConfirm() {
    const { valid } = await formApi.validate();
    if (!valid) return;
    const values = await formApi.getValues();
    drawerApi.lock();
    (id.value ? updateApplication(id.value, values) : createApplication(values))
      .then(() => {
        emits('success');
        drawerApi.close();
      })
      .catch(() => {
        drawerApi.unlock();
      });
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      const data = drawerApi.getData<ApplicaitonApi.SysApplication>();
      formApi.resetForm();
      if (data) {
        formData.value = data;
        id.value = data.id;
        formApi.setValues(formData.value);
      } else {
        id.value = undefined;
      }
    }
  },
});

function resetForm() {
  formApi.resetForm();
  formApi.setValues(formData.value || {});
}

// 标题

const getDrawerTitle = computed(() => {
  return formData.value?.id
    ? $t('ui.actionTitle.edit', [$t('system.applicaiton.title')])
    : $t('ui.actionTitle.create', [$t('system.applicaiton.title')]);
});
</script>

<template>
  <Drawer :title="getDrawerTitle">
    <Form class="mx-4" />
    <template #prepend-footer>
      <div class="flex-auto">
        <Button type="primary" danger @click="resetForm">
          {{ $t('common.reset') }}
        </Button>
      </div>
    </template>
  </Drawer>
</template>
