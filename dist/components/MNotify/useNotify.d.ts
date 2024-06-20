import { type App } from 'vue';
import type { INotifyPosition, INotifyProps } from '@/components/MNotify/Type';
export default function useNotify(): {
    openNotify: (props: Partial<INotifyProps>) => void;
    closeNotify: (id: string, position: INotifyPosition) => void;
};
export declare const install: (app: App) => void;
//# sourceMappingURL=useNotify.d.ts.map