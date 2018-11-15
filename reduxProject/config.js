/**
 * Created by dingding on 2018/11/13.
 */
module.exports = {
    "name": "fis-receiver",  // 应用名称
    "script": "./bin/www",  // 实际启动脚本
    "cwd": "./",  // 当前工作路径
    "watch": [  // 监控变化的目录，一旦变化，自动重启
        "bin",
        "routers"
    ],
    "ignore_watch": [  // 从监控目录中排除
        "node_modules",
        "logs",
        "public"
    ],
    "watch_options": {
        "followSymlinks": false
    },
    "error_file": "./logs/app-err.log",  // 错误日志路径
    "out_file": "./logs/app-out.log",  // 普通日志路径
    "env": {
        "NODE_ENV": "production"  // 环境参数，当前指定为生产环境
    }
}