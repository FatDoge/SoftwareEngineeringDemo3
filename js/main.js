
	function judgeInfo(){
		var bool=0;//初始化
		function success(){
			//询问框
		layer.confirm('格式正确，确认提交？', {
		  btn: ['确认','取消'] //按钮
		}, function(){
		  layer.msg('商品登记入库成功', {icon: 1});
		  bool=1;
		  return true;
		});
		}
		console.log("judgeInfo...");
		// 获取输入信息
		var name=$("#proName").val();
		console.log(typeof(name));
		var type=$("#proType").val();
		var num=$("#proNum").val();
		var price=$("#proPrice").val();
		var date=$("#proDate").val();
		// 示例判断信息规则,error标志位
		var error=-1;
		if(name=="")error=1;
		else if(type=="")error=2;
		else if(num=="")error=3;
		else if(price=="")error=4;
		else if(date=="")error=5;
		else error=0;
		console.log(error);
		switch(error){
			case 1:
			warning("名称");
			break;
			case 2:
			warning("类别");
			break;
			case 3:
			warning("数量");
			break;
			case 4:
			warning("价格");
			break;
			case 5:
			warning("出厂年月");
			break;
			default:
			success();
			return false;
		}
		console.log(bool)
		if(bool)return true;
		else return false;
	}
function warning(info){
	//提示层
	layer.msg(info+'信息输入无效');
	return false;
}

$(document).ready(function(){
})