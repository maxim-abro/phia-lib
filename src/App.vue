<template>
  <div>
    <m-button style="margin: 30px">default button</m-button>
    <m-button
      type="primary"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      type="success"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      type="info"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      type="warning"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      type="danger"
      style="margin: 30px"
      >default button</m-button
    >
  </div>
  <div>
    <m-button
      plain
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      plain
      type="primary"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      plain
      type="success"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      plain
      type="info"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      plain
      type="warning"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      plain
      type="danger"
      style="margin: 30px"
      >default button</m-button
    >
  </div>
  <div>
    <m-button
      round
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      round
      type="primary"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      round
      type="success"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      round
      type="info"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      round
      type="warning"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      round
      type="danger"
      style="margin: 30px"
      >default button</m-button
    >
  </div>
  <div>
    <m-button
      disabled
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      disabled
      type="primary"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      disabled
      type="success"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      disabled
      type="info"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      disabled
      type="warning"
      style="margin: 30px"
      >default button</m-button
    >
    <m-button
      disabled
      type="danger"
      style="margin: 30px"
      >default button</m-button
    >
  </div>
  <div>
    <m-button @click="notify.openNotify(propsNotify)"> get notify </m-button>
  </div>
  <div>
    <m-link
      style="margin: 30px"
      href="/"
      >link</m-link
    >
    <m-link
      style="margin: 30px"
      type="primary"
      href="/"
      >link</m-link
    >
    <m-link
      style="margin: 30px"
      type="success"
      href="/"
      >link</m-link
    >
    <m-link
      style="margin: 30px"
      type="info"
      href="/"
      >link</m-link
    >
    <m-link
      style="margin: 30px"
      type="warning"
      href="/"
      >link</m-link
    >
    <m-link
      style="margin: 30px"
      type="danger"
      href="/"
      >link</m-link
    >
  </div>
  <div>
    <m-link
      disabled
      style="margin: 30px"
      href="/"
      >link</m-link
    >
    <m-link
      disabled
      style="margin: 30px"
      type="primary"
      href="/"
      >link</m-link
    >
    <m-link
      disabled
      style="margin: 30px"
      type="success"
      href="/"
      >link</m-link
    >
    <m-link
      disabled
      style="margin: 30px"
      type="info"
      href="/"
      >link</m-link
    >
    <m-link
      disabled
      style="margin: 30px"
      type="warning"
      href="/"
      >link</m-link
    >
    <m-link
      disabled
      style="margin: 30px"
      type="danger"
      href="/"
      >link</m-link
    >
  </div>
  <div style="margin: 30px">
    <m-input
      v-model="testVal"
      :max-length="4"
      placeholder="placeholder"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px">
    <m-input
      v-model="testVal"
      clearable
      placeholder="clearable"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px">
    <m-input
      v-model="testVal"
      disabled
      placeholder="clearable"
    />
    {{ testVal }}
  </div>
  <div style="margin: 30px">
    <m-badge
      value="100"
      :max="99"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge
      show-zero
      :value="0"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge is-dot>
      <m-button> badge </m-button>
    </m-badge>
  </div>
  <div style="margin: 30px">
    <m-badge
      is-dot
      type="primary"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="success"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="info"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="warning"
    >
      <m-button> badge </m-button>
    </m-badge>
    <m-badge
      is-dot
      type="danger"
    >
      <m-button> badge </m-button>
    </m-badge>
  </div>
  <div style="margin: 30px">
    <m-input-number v-model="testValNumber" />
    <m-input-number
      v-model="testValNumber"
      :steps="5"
    />
    <m-input-number
      v-model="testValNumber"
      :min="-5"
      :max="5"
    />
    <m-input-number
      v-model="testValNumber"
      disabled
      :min="-5"
      :max="5"
    />
  </div>
  <div style="margin: 30px">
    <m-dropdown>
      <template #default="{ props }">
        <m-button v-bind="props">open dropdown</m-button>
      </template>

      <template #menu>
        <m-dropdown-menu>
          <m-dropdown-menu-item>1asdsadd asdasd aadsa</m-dropdown-menu-item>
          <m-dropdown-menu-item>2asddsadsasadda</m-dropdown-menu-item>
          <m-dropdown-menu-item disabled>3a sdasd asdsadasd as</m-dropdown-menu-item>
        </m-dropdown-menu>
      </template>
    </m-dropdown>
  </div>
  <div style="margin: 30px">
    <m-card> body </m-card>
    <m-card
      header="header"
      footer="footer"
    >
      body
    </m-card>
    <m-card>
      <template #header> header </template>
      <template #footer> footer </template>
      body
    </m-card>
    <m-card>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem delectus
      deserunt dolor dolores doloribus harum maxime minus, neque odio perferendis, quas qui quis
      recusandae rem sed veniam voluptatum? Adipisci, alias aut cum cupiditate dolor eaque neque
      obcaecati, officiis optio reiciendis tempora voluptas voluptatibus! Ab alias beatae deserunt
      ducimus et facere fuga fugit, inventore maiores necessitatibus nulla officia quo sit.
      Accusantium adipisci alias asperiores earum. Aliquam, amet delectus dicta eveniet
      exercitationem fugit inventore, iste molestias nemo quaerat quod sit temporibus ullam voluptas
      voluptatem. At enim fuga necessitatibus, nostrum quis sint sunt vero vitae. Alias dicta
      ducimus ea eligendi error id itaque, laudantium, numquam quaerat quas quidem quis rerum
      similique! Amet aut consectetur dolores earum eius expedita explicabo, fugit iure libero,
      maiores neque numquam rerum similique soluta totam velit, voluptate voluptates. Adipisci
      laborum provident voluptates! Expedita labore magni molestias quidem. Adipisci aspernatur
      atque corporis cum cumque eligendi facilis iure laborum magnam magni numquam pariatur, porro,
      quae saepe, tenetur voluptatem voluptates. Ad adipisci alias at, beatae consequatur dolorem
      eos et incidunt, laboriosam laudantium maxime minima nobis officia quae quis reiciendis sequi,
      suscipit totam ullam voluptas. Animi assumenda cupiditate dolor doloremque ea eligendi
      excepturi, illum maxime, modi nesciunt nihil nostrum odio placeat quis reiciendis sit
      voluptatibus? Assumenda aut blanditiis consequatur cupiditate, debitis delectus esse, eum ex
      explicabo facilis illo impedit laboriosam molestias nulla obcaecati perspiciatis praesentium
      quasi qui quidem ratione repellat soluta veritatis. Ad aliquid, assumenda doloremque esse
      excepturi fugit neque quasi quo, similique tenetur veritatis voluptas! A accusamus architecto
      assumenda at atque cupiditate delectus dolore ea eligendi, error eveniet illo inventore ipsum
      itaque natus nobis placeat quasi quia quibusdam quos reiciendis repellendus rerum saepe
      tenetur unde vel veritatis voluptas voluptate voluptates voluptatibus. Accusamus amet culpa
      dicta dolorem eligendi fugit illo, magni maxime nesciunt odit officia placeat reiciendis
      reprehenderit sapiente, sint voluptatem?
    </m-card>
    <m-collapse style="margin-bottom: 100px">
      <template #default="{ toggleCollapse }">
        <div @click="toggleCollapse">collapse 1</div>
      </template>
      <template #expand>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda at,
        consequatur corporis delectus dignissimos doloremque fuga inventore magnam nostrum odit
        optio tenetur. Commodi doloremque ipsa nostrum possimus vel.
      </template>
    </m-collapse>
    <m-select
      v-model="selectedValue"
      :values="valuesSelect"
      style="width: 255px; margin-bottom: 300px"
    />

    <div style="margin-bottom: 300px">
      <m-tag>default</m-tag>
      <m-tag type="primary">primary</m-tag>
      <m-tag type="success">success</m-tag>
      <m-tag type="info">info</m-tag>
      <m-tag type="danger">danger</m-tag>
      <m-tag type="warning">warning</m-tag>
    </div>
  </div>

  <m-tree
    style="margin-bottom: 300px"
    :data="dataTree"
    @node-click="test"
  />

  <div style="margin-bottom: 300px">
    <MIcon icon="mdi-account" />
  </div>

  <div style="margin-bottom: 300px">
    <MTimeSelect
      v-model="selectTime"
      style="width: 255px; margin-bottom: 300px"
      step="0:12"
    />
    select time: {{ selectTime }}
  </div>

  <div style="margin-bottom: 300px">
    <MDataTransfer
      v-model="selectedValues"
      :items="valuesSelect"
      left-button-text="удалить"
      right-button-text="добавить"
      filterable
    />
  </div>
</template>

<script lang="ts" setup>
import {
  MButton,
  MLink,
  MInput,
  MBadge,
  MInputNumber,
  MDropdown,
  MDropdownMenu,
  MDropdownMenuItem,
  MCard,
  MCollapse,
  MSelect,
  MTag,
  MTree,
  MIcon,
  MTimeSelect
} from '@/components';
import useNotify from '@/components/MNotify/useNotify';
import type { INotifyProps } from '@/components/MNotify/types';
import { ref } from 'vue';
import { IMTree } from '@/components/MTree/types';
import MDataTransfer from '@/components/MDataTransfer/index.vue';
const propsNotify: INotifyProps = {
  title: 'title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, harum?'
};
const testVal = ref('');
const testValNumber = ref(0);
const notify = useNotify();

const selectTime = ref(null);

const selectedValue = ref<string | null>(null);
const valuesSelect = ref([
  {
    title: 'Moscow',
    value: 'msk'
  },
  {
    title: 'Saint Petersburg',
    value: 'spb'
  },
  {
    title: 'Kazan',
    value: 'kzn'
  },
  {
    title: 'KazanKazan KazanKazan KazanKazanKazan Kazan',
    value: 'kzn2'
  }
]);

const dataTree: IMTree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
];

const selectedValues = ref([]);

function test(val: unknown): void {
  console.log(val);
}
</script>

<style lang="scss" scoped>
h1 {
  span {
    color: red;
  }
}
</style>
