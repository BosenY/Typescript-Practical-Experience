/**
 *
 * @param fn 要执行的函数
 * @param timer 防抖的时间 默认是2000毫秒
 */
declare function debounce(fn: Function, timer?: number): (...args: any) => void;
