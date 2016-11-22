#目录结构说明

api 接口资源
dist 打包输出的目录
src 项目目录
    base 放置各种继承模块(基础模块必须在app.js中导入)
    lib 放置第三方插件
        anijs 模版事件动画插件(参考地址:http://anijs.github.io/#documentation)
    module 放置各个模块
        demo 详情查看demo目录结构说明
    util 工具类模块


#demo目录结构说明 （生成一个模块的时候请将init.js 导入至app.js）
controller 放置本模块的所有控制器
    pageCtrl1.js 最基本的写法
    pageCtrl2.js 接收外部传递参数的写法    参照网址：http://www.cnblogs.com/jager/p/5293225.html
    testCtrl.js  使用继承的基本写法，还演示了 利用$state.go 传递参数或跳转的方式
    testCtrl2.js 调用接口的基本写法

service 放置本模块的所有接口服务
    testSer.js 基础接口写法

template 放置本模块的所有模版文件
    page1.html
    page2.html
    page3.html
    testTpl2.html
    以上4个模版 访问 #/test2 会展现tab的功能
    加入了使用ui-sref进行参数传递的写法
    testTpl.html 展示anijs动画插件模版的写法

demo.scss 放置本模块所有css样式
guidance.js 引导器 请将所有的 controller,service,template 按照引导器指定要求进行书写
init.js 进行模块初始化，以及路由配置