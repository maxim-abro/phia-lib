export interface INotifyProps {
    title: string;
    message: string;
    type?: INotifyType;
    position?: INotifyPosition;
    onClose?: () => void;
    onClick?: () => void;
}
type INotifyType = 'success' | 'warning' | 'info' | 'error' | '';
type INotifyPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export {};
//# sourceMappingURL=Type.d.ts.map