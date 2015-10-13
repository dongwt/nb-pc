require.config({
    baseUrl:"/",
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
