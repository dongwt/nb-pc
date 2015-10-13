/**
 * created by:dongwt
 * create date:2015/10/13
 * module:项目整体配置
 */
var env = "dev";
var config;

switch(env){
    //开发阶段
    case 'dev':
        config = {
            evn:"dev",
            dataServiceUrl:""
        }
        break;
    //测试阶段
    case 'test': break;
    //生产阶段
    case 'production': break;
    //发布阶段
    case 'pro': break;
    default : ;
}

module.exports = config;