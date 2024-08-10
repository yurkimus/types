declare module "index" {
    export function type(value: any): string;
    export function is(string: string, value: any): boolean;
    export function isLike(string: 'Promise' | 'Array' | 'URL' | 'Function' | 'Iterable', value: any): boolean;
}
