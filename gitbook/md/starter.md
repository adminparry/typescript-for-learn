# 创建一个typescript项目

##### 首先需要拥有tsc的环境
``` bash 
npm install -g typescript

```

通过tsc --help 可以看到typescript 给我们带来的功能

通过tsc --init 来初始化一个tsconfig.json文件 所在的位置默认为当前文件下的所有文件 也可以通过指定include

``` json
{
  "include": [
    "src/**/*"
  ]
}

```

设置 baseUrl": "./src 入口文件用来执行

设置 输出目录 
``` json
{
    "outDir": "../dist",
}

```

typescript 给我们带来了最大的好处就是有前置的类型校验 指定类型文件所在的位置 然后直接使用就可以
``` json
{
     "paths": {
      "*": [
        "node_modules/*",
        "src/types/*"
      ]
    }
}

```
创建一个nodejs项目
``` bash
npm init
npm install --save @types/node
```
