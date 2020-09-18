declare module 'app/features/i18n' {
    export function setI18n(obj: any, label: string, value: any, lang: string): void;
    export function getI18n(obj: any, label: string, lang: string): any;
    export function initI18n(obj: any, lang: string, depth?: number): void;
    export function initAttrI18n(obj: any, label: string, lang: string): void;
    export function initAttrArrayI18n(obj: any, labels: string[], lang: string): void;
}