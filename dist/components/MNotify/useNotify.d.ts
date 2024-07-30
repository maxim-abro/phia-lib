import { App } from 'vue';
import { INotifyPosition, INotifyProps } from './Type';

export default function useNotify(): {
    openNotify: (props: Partial<INotifyProps>) => void;
    closeNotify: (id: string, position: INotifyPosition) => void;
};
export declare const install: (app: App) => void;
//# sourceMappingURL=useNotify.d.ts.map