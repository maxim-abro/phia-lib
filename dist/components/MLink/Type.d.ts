export interface ILinkProps {
    type?: ILinkType;
    underline?: boolean;
    disabled?: boolean;
    target?: IlinkTarget;
    href: string;
}
type ILinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
type IlinkTarget = '_blank' | '_parent' | '_self' | '_top';
export {};
//# sourceMappingURL=Type.d.ts.map