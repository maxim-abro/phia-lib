export interface ITabsProps {
    modelValue: string | number;
}
export interface ITabsEmits {
    (e: 'update:modelValue', value: number): void;
    (e: 'tab-click', value: Event): void;
}
export interface ITabProps {
    activeIndex: number;
    index: number;
    title: string;
}
//# sourceMappingURL=types.d.ts.map