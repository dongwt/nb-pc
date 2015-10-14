/**
 * created by:dongwt
 * create date:2015/10/14
 * module:js依赖配置
 */
require.config({
    baseUrl:"/js",
    paths: {
        "jquery": "lib/jquery/dist/jquery.min",
        "bootstrap": "lib/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});
