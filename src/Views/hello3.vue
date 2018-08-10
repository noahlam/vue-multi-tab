<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名1" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名2" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名3" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名4" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名5" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名6" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名7" width="180"></el-table-column>
    <!--<el-table-column prop="name" label="姓名8" width="180"></el-table-column>-->
    <!--<el-table-column prop="name" label="姓名9" width="180"></el-table-column>-->
    <!--<el-table-column prop="name" label="姓名10" width="180"></el-table-column>-->
    <!--<el-table-column prop="name" label="姓名11" width="180"></el-table-column>-->
    <!--<el-table-column prop="name" label="姓名12" width="180"></el-table-column>-->
    <el-table-column prop="address" label="地址"  width="280"></el-table-column>
  </el-table>
</template>

<script>
export default {
	data() {
		return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	}
}
</script>
