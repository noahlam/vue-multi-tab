export default {
  menu: [
    {
      name: '主菜单1',
      icon:'el-icon-location',
      index:'1',
      sub:[
        {name:'子菜单1',component: 'hello1',index: '1-1'},
        {name:'子菜单2',component: 'hello2',index: '1-2'},
        {name:'子菜单3',component: 'hello3',index: '1-3'}
      ]
    },

    {
      name: '主菜单2',
      icon:'el-icon-menu',
      index:'2',
      sub:[
        {name:'子菜单1',component: 'hello1',index: '2-1'},
        {name:'子菜单2',component: 'hello2',index: '2-2'},
        {name:'子菜单3',component: 'hello3',index: '2-3'}
      ]
    },

    {
      name: '主菜单3',
      icon:'el-icon-document',
      index:'3',
      sub:[
        {name:'子菜单1',component: 'hello1',index: '3-1'},
        {name:'子菜单2',component: 'hello2',index: '3-2'},
        {name:'子菜单3',component: 'hello3',index: '3-3'}
      ]
    },

    {
      name: '主菜单4',
      icon:'el-icon-setting',
      index:'4',
      sub:[
        {name:'子菜单1',component: 'hello1',index: '3-1'},
        {name:'子菜单2',component: 'hello2',index: '3-2'},
        {name:'子菜单3',component: 'hello3',index: '3-3'}
      ]
    },
  ],
}