# 项目名称

## 启动方式

下载依赖,

```bash
$ npm i
```

启动服务,

```bash
$ npm run start
```

## 打包配置
```bash
$ npm run build
```

## 接口地址

## 服务器信息

## 部署信息

## 目录结构
```text
// src 目录介绍
.
├── assets // 静态资源文件
│   ├── fonts // 字体
│   └── images // 图片
├── common // 公有模块
│   ├── styles // 公有样式
│   └── utils // 工具包
├── components // 全局组件
├── hooks // 全局hooks
├── interface // 接口定义
├── models // 全局数据流
├── pages // 页面
│   ├── backstage // 后台页面
│   │   ├── common // 后台页面公有资源
│   │   │   ├── components // 后台页面公有组件
│   │   │   └── style // 后台页面公有样式
│   │   ├── comprehensiveManagement // 综合管理
│   │   ├── monitoringManagement // 设备监控
│   │   ├── overview // 概览
│   │   ├── resourceManagement // 资源管理 
│   │   ├── systemInformation // 系统管理
│   │   │   ├── dictionary // 数据字典
│   │   │   │   └── [id] // 字典详情
│   │   │   └── userManagement // 用户管理
│   │   │       └── [type]
│   │   └── trainingManagement // 实训管理
│   │       └── teachingPlan // 教学计划
│   │           └── [teachingType]
│   └── portal // 前台界面
│       ├── article // 文章
│       │   ├── [type] // 文章类型
│       │   │   └── [id] // 文章详情
│       │   └── hooks // 文章hooks
│       ├── components // 前台公有组件
│       ├── detail // 详情
│       │   └── [id]
│       ├── home // 首页
│       │   └── [rankType] // 排行
│       ├── newsAnnouncement // 新闻公告
│       │   └── hooks
│       ├── personal // 个人中心
│       │   ├── [id]
│       │   │   ├── social
│       │   │   └── teacher
│       │   └── components
│       ├── resourceCenter // 资源中更新
│       │   └── [type] // 资源类型
│       │       └── [id] // 资源ID
│       │           └── [name] // 资源类型名称，如：doc、video、audio
│       ├── shared // 开放共享
│       ├── trainingCenter // 实训中心
│       │   └── [id]
│       │       └── [type]
│       │           └── hooks
│       └── trainingLaboratory // 实验室
│           └── [id]
├── routes // 路由信息
└── services // 接口配置信息
    └── api
```
## 注意事项

### 分支提交流程
1. 从dev获取最新的代码
2. 提交代码直接推送自己的分支即可
3. 在coding上提交合并分支请求，你的分支 -> dev

## 接口对接情况
详见根目录 TASKLIST.md

