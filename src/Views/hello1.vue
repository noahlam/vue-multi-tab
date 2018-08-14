<template>
  <div class="wrap">
    <input type="text" value="测试刷新用的">
    <input type="button" value="跳转" @click="goto">
    <input type="button" value="替换" @click="replaceTo">
    <h3>跳转: this.$tab.push()</h3>
    <pre>
类似 vue 的 this.$router.push,可以在当前页签下跳转到另一个组件,且可以带参数

参数说明
第一个参数【必选】 可以是字符串，也可以是对象
1.字符串
1.1 字符串不带参数，就是一个组件名。打开对应的组件
1.2 字符串后带查询参数，会自动解析，并在目标组件可以通过 this.$tab.query() 获取
      需要注意的是 query() 是一个函数,这个跟vue-router不同,不过返回的数据格式跟vue一样

2.对象 第一个参数是一个对象的话，格式如下
{
path:'组件名称',  // 必选
query: {}        // 可选，Object类型，要带的查询参数,获取方式同上
}

第一个参数【可选】，是一个对象
也是查询参数，这个参数会上面参数合并，如果刚好有同名的参数，则会覆盖上面的参数
理论上，push()方法是可以在全局的任何地方使用，不过需要注意的是不管何时，在哪里push,push的目标始终是当前激活的那个tab.
</pre>
    <h3>替换: this.$tab.replace()</h3>
    <div>用法同 push,不同的是 replace 是直接替换当前历史记录,所以不会产生新的历史记录</div>

    <h3>后退: this.$tab.back()</h3>
    <pre>
      接收一个正整数作为后退的步数(可选,默认是1)
    </pre>
  </div>
</template>
<script>
export default {
	data () {
		return {}
	},
	methods: {
		goto () {
			// 参数说明
			// 第一个参数【必选】 可以是字符串，也可以是对象
			// 1.字符串
			//   1.1 字符串不带参数，就是一个组件名。打开对应的组件
			//   1.2 字符串后带查询参数，会自动解析，并最终可以通过 this.$tab.query() 获取

			// 2.对象 第一个参数是一个对象的话，格式如下
			// {
			//    path:'组件名称',  // 必选
			//    query: {}        // 可选，Object类型，要带的查询参数
			// }
			//
			// 第一个参数【可选】，是一个对象
			// 也是查询参数，这个参数会上面参数合并，如果刚好有同名的参数，则会覆盖上面的参数
			//
			this.$tab.push('hello2?id=1&num=2', {age: 188})
		},
		replaceTo () {
			this.$tab.replace('hello2?id=3&num=33', {age: 333})
		},
	},
	created () {
		console.log('当前tab:',this.$tab.info())
	},
}
</script>
<style scoped>
  .wrap {
    width: 100%;
    height: 1200px;
    background: #f5f5f5;
    box-sizing: border-box;
  }
</style>
