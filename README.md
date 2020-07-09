> ## 114银行 loan web申请页面
>
> 运行步骤:

1. #### 安装依赖
    ```bash
    yarn
    ```
2. #### 修改文件

    - `src/libs/urls.ts`中 更换为实际开发环境服务器地址.
    - `vue.config.js` 文件修改代理地址

3. #### 运行

    ```bash
    yarn serve
    ```

4. #### 自动格式化代码

    ```bash
    yarn lint
    ```

5. #### 编译打包
    ```bash
    # 普通打包
    yarn build
    # 现代浏览器优化
    yarn build:modern
    ```

1.  目录含义:

```bash
   -src
     |__components
            |__base    #基础公共组件
     |__libs           #常用工具函数,项目开发时 urls 配置
     |__mock           #开发时使用的 mock 数据及方法
     |__plugins        #项目插件 如axios,element-ui
     |__types          #ts的类型定义文件 index.d.ts
     |__views
          |__common    #项目公共组件 如 Error.vue,Login.vue
          |__home      #项目首页
```

2. 本模板路由权限使用 code 控制,所有具有权限的页面 code 需写在`store.state.all_has_permission_router_code`中否则会跳转入 403

3. 所有接口调用成功/失败判断已在 axios 里完成,使用时直接写:
    ```javaScript
       api()
       .then(res=>{
         // 接口成功执行
       })
       .catch(e=>{
         // 接口失败执行
       })
       .finally(e=>{
         //可选 成功/失败后执行
       })
    ```
4. 接口调用尽量在 vuex 的 actios 中调用,进行`数据-视图`分类,集中管理数据.

5. 规范代码风格的配置文件:

-   **.vscode/settings.json** 编辑器配置
-   **.prettierrc** .prettier 格式化配置文件
-   **.eslintrc.js** eslint 代码检查配置文件
-   **tslint.json** ts 格式化检查配置文件
-   **tsconfig.json** 当前项目 ts 配置文件
