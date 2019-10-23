/**
 * 
 * @param fn 要执行的函数
 * @param timer 防抖的时间 默认是2000毫秒
 */
export function debounce(fn: Function = function() {}, timer: number = 2000) {
    let timeout: any
    return (...args: any) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(args)
        }, timer)
    }
}


function say() {
    console.log('防抖成功')
}
setInterval(() => {
    debounce(say,2000)
},1000)