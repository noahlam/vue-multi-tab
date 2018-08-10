export default {
  id: '表格唯一的id，在获取表格的历史查询，或保存收藏数据时将使用到',
  dataUrl: '', //数据加载的地址，访会址可以接收一个json对象，对象的key为过滤字段的name,另外_page,_pagesize为页码与每页大小值，_sort为当前排序的字段的name,
// _sortflag: 'asc|desc' 表示当前排序的方向,_tableid表示当前表格的id,_collect:true/false表示是否加载收藏的数据。
  listData: [
    {
      files1: 'files1',
      files11: 'files11',
      files2: 'files2',
      files21: 'files21',
      files3: 'files3',
      files31: 'files31'
    },
    {
      files1: 'files12',
      files11: 'files112',
      files2: 'files22',
      files21: 'files212',
      files3: 'files32',
      files31: 'files312'
    },
    {
      files1: 'files13',
      files11: 'files113',
      files2: 'files23',
      files21: 'files213',
      files3: 'files33',
      files31: 'files313'
    },
  ],

  columns: [
    {
      name: 'files1', //值对对应行记录对象的字段名,
      title: '标题1', //标题,
      sortable: false, //是否支持排序,
      action: '', //动作名，点击该单元格值时发送的全局消息，发送action时应当将当前行的数据作为json发送给消息方法。(未知含义)
      tpl: '<red>{name}</red>', //显示模板表达式，例如:'<red>{name}</red>'，其中的name将用当前数据行对象的name属性替代
      displayField: 'files11', //显示对应行记录对象的字段名，相当于tpl="{xxx}"，直接取某列显示
    },
    {
      name: 'files2', //值对对应行记录对象的字段名,
      title: '标题2', //标题,
      sortable: true, //是否支持排序,
      action: '', //动作名，点击该单元格值时发送的全局消息，发送action时应当将当前行的数据作为json发送给消息方法。
      tpl: '', //显示模板表达式，例如:'<red>{name}</red>'，其中的name将用当前数据行对象的name属性替代
      displayField: 'files21', //显示对应行记录对象的字段名，相当于tpl="{xxx}"，直接取某列显示
    },
    {
      name: 'files3', //值对对应行记录对象的字段名,
      title: '标题3', //标题,
      sortable: false, //是否支持排序,
      action: '', //动作名，点击该单元格值时发送的全局消息，发送action时应当将当前行的数据作为json发送给消息方法。
      tpl: '', //显示模板表达式，例如:'<red>{name}</red>'，其中的name将用当前数据行对象的name属性替代
      displayField: 'files31', //显示对应行记录对象的字段名，相当于tpl="{xxx}"，直接取某列显示
    },
  ],
  actions: [
    {
      text: '选择一条', //文本,
      type: 'onerow', //onerow|batch|normal按钮的模式onerow只有选中一行时才能点击，batch需要选中大于1条，normal一直可操作，默认为normal
      tooltip: '第一个', //可使用时的正常提示，如果不可用时显示tooltip时可以在正常tooltip后附加不可用的原因或指导操作，例如“删除记录,致少选择一行"
      action: '', //点击该动作时发送的全局消息，注意发送的消息的参数为一个数组包含了当前表格选择的所有记录的json对象集合。
      red: false, // 是否为红色按钮
    },
    {
      text: '选择大于一条', //文本,
      type: 'batch', //onerow|batch|normal按钮的模式onerow只有选中一行时才能点击，batch需要选中大于1条，normal一直可操作，默认为normal
      tooltip: '第二个', //可使用时的正常提示，如果不可用时显示tooltip时可以在正常tooltip后附加不可用的原因或指导操作，例如“删除记录,致少选择一行"
      action: '', //点击该动作时发送的全局消息，注意发送的消息的参数为一个数组包含了当前表格选择的所有记录的json对象集合。
      red: false, // 是否为红色按钮
    },
    {
      text: '无限制', //文本,
      type: 'normal', //按钮的模式onerow只有选中一行时才能点击，batch需要选中大于1条，normal一直可操作，默认为normal
      tooltip: '', //可使用时的正常提示，如果不可用时显示tooltip时可以在正常tooltip后附加不可用的原因或指导操作，例如“删除记录,致少选择一行"
      action: '', //点击该动作时发送的全局消息，注意发送的消息的参数为一个数组包含了当前表格选择的所有记录的json对象集合。
      red: true, // 是否为红色按钮
    },
  ],
  qfields: [{
    xtype: 'xxx', // 自定义组件类型的别名，例如:textfield,datefield,daterangefield等.
    init: {} //组件初始化参数
  }]
}