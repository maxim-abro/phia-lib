import { IMTree } from '@/components/MTree/types';
import { ComputedRef } from 'vue';

export interface IChooseElementInject {
  choseElement: ComputedRef<number | string>;
  onChooseElement: (id: number | string) => void;
  onChooseTitle: (title: string) => void;
}

export interface ICascaderItemProps {
  items: IMTree[];
  isFirstLevel?: boolean;
}

export interface ICascaderProps {
  modelValue: string | number | null;
  items: IMTree[];
  disabled?: boolean;
  placeholder?: string;
}
export interface ICascaderEmits {
  (e: 'update:modelValue', value: string | number | null): void;
}
