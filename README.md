这是在Vue3上的操作方法
```sh
这是安装所有的依赖
npm install
```
```sh
这是本地运行服务器
npm run dev
```
```sh
这是进行打包
npm run build
```


第一次提交时
1.在github上点击加号，选择New repository
2.写上名字
3.点击创建新项目

4.先初始化仓库 git init
5.再添加git add .(这里是我在.gitgnore上添加了其他不需要上传的文件的文件名，就会被忽视)
6.git commit -m "此次提交的原因"
7.git remote add origin （git@github.com:kkokoo/GroupWeb.git这个是远程仓库的地址）
8.git push -u origin master（添加到主分支上）
9.git subtree push --prefix dist origin gh-pages（将主分支上的dist文件添加到gh-pages上）

再次提交
1.git add .
2.git commit -m "再次提交的原因"
3.git subtree push --prefix dist origin gh-pages