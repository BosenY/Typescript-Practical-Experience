/**
 * 
 * @param fn 要执行的函数
 * @param timer 防抖的时间 默认是2000毫秒
 */
function debounce(fn: Function, timer: number = 2000) {
    let timeout: any
    return (...args: any) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(args)
        }, timer)
    }
}

