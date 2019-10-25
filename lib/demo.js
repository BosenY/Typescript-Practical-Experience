/**
 *
 * @param fn 要执行的函数
 * @param timer 防抖的时间 默认是2000毫秒
 */
function debounce(fn, timer = 2000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(args);
        }, timer);
    };
}
