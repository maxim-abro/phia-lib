<template>
  <div>
    <m-button style="margin: 30px">default button</m-button>
    <m-button type="primary" style="margin: 30px">default button</m-button>
    <m-button type="success" style="margin: 30px">default button</m-button>
    <m-button type="info" style="margin: 30px">default button</m-button>
    <m-button type="warning" style="margin: 30px">default button</m-button>
    <m-button type="danger" style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button plain style="margin: 30px">default button</m-button>
    <m-button plain type="primary" style="margin: 30px">default button</m-button>
    <m-button plain type="success" style="margin: 30px">default button</m-button>
    <m-button plain type="info" style="margin: 30px">default button</m-button>
    <m-button plain type="warning" style="margin: 30px">default button</m-button>
    <m-button plain type="danger" style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button round style="margin: 30px">default button</m-button>
    <m-button round type="primary" style="margin: 30px">default button</m-button>
    <m-button round type="success" style="margin: 30px">default button</m-button>
    <m-button round type="info" style="margin: 30px">default button</m-button>
    <m-button round type="warning" style="margin: 30px">default button</m-button>
    <m-button round type="danger" style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button disabled style="margin: 30px">default button</m-button>
    <m-button disabled type="primary" style="margin: 30px">default button</m-button>
    <m-button disabled type="success" style="margin: 30px">default button</m-button>
    <m-button disabled type="info" style="margin: 30px">default button</m-button>
    <m-button disabled type="warning" style="margin: 30px">default button</m-button>
    <m-button disabled type="danger" style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button
      @click="notify.openNotify(propsNotify)"
    >
      get notify
    </m-button>
  </div>
</template>

<script lang="ts" setup>

import { MButton } from '@/components'
import useNotify from '@/components/MNotify/useNotify'
import type { INotifyProps } from '@/components/MNotify/Type'

const propsNotify: INotifyProps = {
  title: 'title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, harum?',
  id: '1'
}
const notify = useNotify()
</script>

<style lang="scss" scoped>
h1 {
  span {
    color: red;
  }
}
</style>
