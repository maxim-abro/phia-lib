<template>
  <div>
    <m-button style="margin: 30px">default button</m-button>
    <m-button type="primary"
style="margin: 30px">default button</m-button>
    <m-button type="success"
style="margin: 30px">default button</m-button>
    <m-button type="info"
style="margin: 30px">default button</m-button>
    <m-button type="warning"
style="margin: 30px">default button</m-button>
    <m-button type="danger"
style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button plain
style="margin: 30px">default button</m-button>
    <m-button plain
type="primary"
style="margin: 30px">default button</m-button>
    <m-button plain
type="success"
style="margin: 30px">default button</m-button>
    <m-button plain
type="info"
style="margin: 30px">default button</m-button>
    <m-button plain
type="warning"
style="margin: 30px">default button</m-button>
    <m-button plain
type="danger"
style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button round
style="margin: 30px">default button</m-button>
    <m-button round
type="primary"
style="margin: 30px">default button</m-button>
    <m-button round
type="success"
style="margin: 30px">default button</m-button>
    <m-button round
type="info"
style="margin: 30px">default button</m-button>
    <m-button round
type="warning"
style="margin: 30px">default button</m-button>
    <m-button round
type="danger"
style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button disabled
style="margin: 30px">default button</m-button>
    <m-button disabled
type="primary"
style="margin: 30px">default button</m-button>
    <m-button disabled
type="success"
style="margin: 30px">default button</m-button>
    <m-button disabled
type="info"
style="margin: 30px">default button</m-button>
    <m-button disabled
type="warning"
style="margin: 30px">default button</m-button>
    <m-button disabled
type="danger"
style="margin: 30px">default button</m-button>
  </div>
  <div>
    <m-button
      @click="notify.openNotify(propsNotify)"
    >
      get notify
    </m-button>
  </div>
  <div>
    <m-link style="margin: 30px"
href="/">link</m-link>
    <m-link style="margin: 30px"
type="primary"
href="/">link</m-link>
    <m-link style="margin: 30px"
type="success"
href="/">link</m-link>
    <m-link style="margin: 30px"
type="info"
href="/">link</m-link>
    <m-link style="margin: 30px"
type="warning"
href="/">link</m-link>
    <m-link style="margin: 30px"
type="danger"
href="/">link</m-link>
  </div>
  <div>
    <m-link disabled
style="margin: 30px"
href="/">link</m-link>
    <m-link disabled
style="margin: 30px"
type="primary"
href="/">link</m-link>
    <m-link disabled
style="margin: 30px"
type="success"
href="/">link</m-link>
    <m-link disabled
style="margin: 30px"
type="info"
href="/">link</m-link>
    <m-link disabled
style="margin: 30px"
type="warning"
href="/">link</m-link>
    <m-link disabled
style="margin: 30px"
type="danger"
href="/">link</m-link>
  </div>
  <div style="margin: 30px;">
    <m-input
      v-model="testVal"
      :max-length="4"
      placeholder="placeholder"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px;">
    <m-input
      v-model="testVal"
      clearable
      placeholder="clearable"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px;">
    <m-input
      v-model="testVal"
      disabled
      placeholder="clearable"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px;">
    <m-badge
      value="100"
      :max="99"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      show-zero
      :value="0"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      is-dot
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
  </div>
  <div style="margin: 30px;">
    <m-badge
      is-dot
      type="primary"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="success"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="info"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="warning"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="danger"
    >
      <m-button>
        badge
      </m-button>
    </m-badge>
  </div>
</template>

<script lang="ts" setup>
import { MButton, MLink, MInput, MBadge } from '@/components';
import useNotify from '@/components/MNotify/useNotify';
import type { INotifyProps } from '@/components/MNotify/Type';
import { ref } from 'vue';

const propsNotify: INotifyProps = {
  title: 'title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, harum?',
};
const testVal = ref('');
const notify = useNotify();
</script>

<style lang="scss" scoped>
h1 {
  span {
    color: red;
  }
}
</style>
