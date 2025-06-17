export interface IMTree {
  id?: number | string;
  label: string;
  children?: IMTree[];
}

export interface ITreeProps {
  /** Дата */
  data: IMTree[];
  // todo
  load?: boolean;
  // todo
  showCheckbox?: boolean;
}

export interface ITreeEmits {
  (e: 'node-click', value: number | string): void;
}

export interface MTreeWithToggle extends IMTree {
  collapse: boolean;
}
