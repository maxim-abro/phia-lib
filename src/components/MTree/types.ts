export interface MTree {
  id?: number | string;
  label: string;
  children?: MTree[];
}

export interface ITreeProps {
  /** Дата */
  data: MTree[];
  // todo
  load?: boolean;
  // todo
  showCheckbox?: boolean;
}

export interface ITreeEmits {
  (e: 'node-click', value: number | string): void;
}

export interface MTreeWithToggle extends MTree {
  collapse: boolean;
}
