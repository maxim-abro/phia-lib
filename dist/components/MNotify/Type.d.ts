import type { VNode } from 'vue';
export interface INotifyProps {
    title: string;
    message: string;
    type?: INotifyType;
    position?: INotifyPosition;
    id?: string;
    onClose?: () => void;
    onClick?: () => void;
}
export declare enum NotifyPositionMode {
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left"
}
export type INotifyType = 'success' | 'warning' | 'info' | 'error' | '';
export type INotifyPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export interface NotifyQueueItem {
    vm: VNode;
}
export type NotificationQueue = NotifyQueueItem[];
export interface IUseNotification {
    openNotify: (props: Partial<INotifyProps>) => void;
    closeNotify: (id: string, position: INotifyPosition) => void;
}
//# sourceMappingURL=Type.d.ts.map