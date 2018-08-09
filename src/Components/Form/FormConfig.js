export default {
  id: '', // 唯一id由，方便对表单进行获取或操作。
  //字段，多个
  fields: [
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单1',
      name: 'field1'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单2',
      name: 'field2'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单1',
      name: 'field1'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单2',
      name: 'field2'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单1',
      name: 'field1'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单2',
      name: 'field2'
    },
    {
      xtype: 'textformfield', //表单域组件的别名，详情各表单域组件说明
      label: '表单3',
      name: 'field3'
    }
  ],
  data: {
    field1: '1',
    field2: '2',
    field3: ''

  },
  editable: true/false, //  是否可编辑，如果editable=false所有组件以详情模式显示
}