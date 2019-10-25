namespace Utility {
    export function log(msg: any):void {
        console.log(msg)
    }
    export function error(msg:any): void {
        console.log(msg)
    }
}

Utility.log("log test")

Utility.error("error test")