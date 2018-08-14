export default {
	// 列表配置
	// 菜单列表
	menu: [
		{
			title: '主菜单1',            // 一级菜单名称
			icon: 'el-icon-location',   // 一级菜单 icon
			menuId: '1',                // 索引(必须唯一，是字符串)
			sub: [                      // 子菜单(二级菜单)
				{
					title: '子菜单1-1',      // 菜单名称
					component: 'hello1',    // 点击菜单打开的组件名称
					menuId: '1-1'           // 索引 (用于识别当前打开的tab,必须唯一，是字符串)
				},
				{title: '子菜单1-2', component: 'index', menuId: '1-2'},
				{title: '子菜单1-3', component: 'hello3', menuId: '1-3'}
			]
		},

		{
			title: '主菜单2',
			icon: 'el-icon-menu',
			menuId: '2',
			sub: [
				{title: '子菜单2-1', component: 'hello1', menuId: '2-1'},
				{title: '子菜单2-2', component: 'hello2', menuId: '2-2'},
				{title: '子菜单2-3', component: 'hello3', menuId: '2-3'}
			]
		},

		{
			title: '主菜单3',
			icon: 'el-icon-document',
			menuId: '3',
			sub: [
				{title: '子菜单3-1', component: 'hello1', menuId: '3-1'},
				{title: '子菜单3-2', component: 'hello2', menuId: '3-2'},
				{title: '子菜单3-3', component: 'hello3', menuId: '3-3'}
			]
		},

		{
			title: '主菜单4',
			icon: 'el-icon-setting',
			menuId: '4',
			sub: [
				{title: '子菜单4-1', component: 'hello1', menuId: '4-1'},
				{title: '子菜单4-2', component: 'hello2', menuId: '4-2'},
				{title: '子菜单4-3', component: 'hello3', menuId: '4-3'}
			]
		},
	],
	// 收藏列表  字段说明同 [菜单列表]
	favor: [
		{title: '子菜单1-1', component: 'hello1', menuId: '1-1'},
		{title: '子菜单1-2', component: 'hello2', menuId: '1-2'},
		{title: '子菜单1-3', component: 'hello3', menuId: '1-3'},
		{title: '子菜单2-1', component: 'hello1', menuId: '2-1'},
		{title: '子菜单2-2', component: 'hello2', menuId: '2-2'},
		{title: '子菜单2-3', component: 'hello3', menuId: '2-3'}
	],

	// 应用列表
	application: [
		{
			title: '应用1：组件管理',
			divided: false,
			url: '/',
		},
		{
			title: '应用2：注册证管理',
			divided: false,
			url: '/',
		},
		{
			title: '应用3：产品管理',
			divided: false,
			url: '/',
		},
		{
			title: '返回应用中心',        // 显示名称
			divided: true,              // 分割线
			url: 'http://www.baidu.com', // 跳转地址
			icon: 'el-icon-arrow-left'  // 图标（可选）
		}
	],

	// 主页 tab 配置
	homeTab: {
		title: '首页',                     //  tab 显示标题
		menuId: 'home',                   //  tab 内部名称(用来识别当前打开的tab)
		components: [{path: 'home'}],     //  tab 对应的组件
	}
}
