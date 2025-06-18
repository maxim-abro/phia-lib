export interface IDataTransferProps extends IDataTransferAbstractProps {
  modelValue: (string | number)[];
}

export interface IDataTransferEmits {
  (e: 'update:modelValue', value: (string | number)[]): void;
}

export interface IDataTransferPanelProps extends IDataTransferAbstractProps {
  activeItems: (string | number)[];
  titlePanel?: string;
}

export interface IDataTransferPanelEmits {
  (e: 'update:activeItems', value: (string | number)[]): void;
}

interface IDataTransferAbstractProps {
  items: Record<string, any>[];
  filterPlaceholder?: string;
  filterable?: boolean;
  leftTitle?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  rightTitle?: string;
  itemValue: string;
  itemTitle: string;
}