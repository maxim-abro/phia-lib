export interface ITagProps {
    /** Цвет тега  */
    type?: TTagType;
    /** Размер тега  */
    size?: TTagSize;
    /** активность тега  */
    closable?: boolean;
    /** Округлые края */
    round?: boolean;
}
type TTagSize = 'large' | 'default' | 'small';
type TTagType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export interface ITagSlots {
    /** Стандартный слот  */
    default(props: object): unknown;
}
export {};
//# sourceMappingURL=types.d.ts.map