//筛选条件
var filterParams={"param1077":"0","param1078":"80_100","param1574":"2","param10754":"1","filterLocal":"dongcheng"};
filterParams=JsonTool(filterParams);
//筛选条件处理
function JsonTool(obj){
	return (encodeURIComponent(JSON.stringify(obj)));
}
//协议拼接
var diaoqiurl = 'wbmain://nativejump?pagetype=list&tradeline=house&list_name=ershoufang&cateid=12&title=123&local_name=bj&jumptype=native&filterParams='+filterParams;
