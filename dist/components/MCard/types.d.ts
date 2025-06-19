export interface ICardProps {
    /** Шапка карточки */
    header?: string;
    /** Подвал карточки */
    footer?: string;
}
export interface ICardSlots {
    /** Тело карточки */
    default(props: object): unknown;
    /** Шапка карточки */
    header(props: object): unknown;
    /** Подвал карточки */
    footer(props: object): unknown;
}
//# sourceMappingURL=types.d.ts.map