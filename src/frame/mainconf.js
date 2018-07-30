export default {
  logoUrl:'./src/images/logo.png',     // 注意，这个路径必须是webpack打包后的路径。
  projectName:'耗材联采限价采购-宁德耗材联合谈判' ,  // 顶部栏左侧显示的 项目名称
  menu: [
    {
      name: '主菜单1',
      icon:'el-icon-location',
      index:'1',
      sub:[
        {name:'子菜单1-1',component: 'hello1',index: '1-1'},
        {name:'子菜单1-2',component: 'hello2',index: '1-2'},
        {name:'子菜单1-3',component: 'hello3',index: '1-3'}
      ]
    },

    {
      name: '主菜单2',
      icon:'el-icon-menu',
      index:'2',
      sub:[
        {name:'子菜单2-1',component: 'hello1',index: '2-1'},
        {name:'子菜单2-2',component: 'hello2',index: '2-2'},
        {name:'子菜单2-3',component: 'hello3',index: '2-3'}
      ]
    },

    {
      name: '主菜单3',
      icon:'el-icon-document',
      index:'3',
      sub:[
        {name:'子菜单3-1',component: 'hello1',index: '3-1'},
        {name:'子菜单3-2',component: 'hello2',index: '3-2'},
        {name:'子菜单3-3',component: 'hello3',index: '3-3'}
      ]
    },

    {
      name: '主菜单4',
      icon:'el-icon-setting',
      index:'4',
      sub:[
        {name:'子菜单4-1',component: 'hello1',index: '3-1'},
        {name:'子菜单4-2',component: 'hello2',index: '3-2'},
        {name:'子菜单4-3',component: 'hello3',index: '3-3'}
      ]
    },
  ],
  favor:[
    {name:'子菜单1-1',component: 'hello1',index: '1-1'},
    {name:'子菜单1-2',component: 'hello2',index: '1-2'},
    {name:'子菜单1-3',component: 'hello3',index: '1-3'},
    {name:'子菜单2-1',component: 'hello1',index: '2-1'},
    {name:'子菜单2-2',component: 'hello2',index: '2-2'},
    {name:'子菜单2-3',component: 'hello3',index: '2-3'}
  ],
}