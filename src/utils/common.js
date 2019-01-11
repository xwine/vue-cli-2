/**
 * 公共方法以及变量写在whole内
 * 命名建议（方法 fn_开头）
 */
export default {
  //=======================================================全局变量===========================================
  test_list_url: 'test/list/url',
  //=======================================================全局函数===========================================

  fn_not_null: function (obj) {
    if(typeof obj === "string"){
      if(obj === '' || obj === undefined || obj === null){
        return false
      }
      return true
    }
    if(typeof obj === "object"){
      if (Object.keys(object).length === 0) {
        return false
      }
      return true
    }
  }
}
