//获取根路径
function getRootPath() {
	// 获取当前网址，如： http://localhost:8080/springmvc/page/frame/test.html
	var curWwwPath = window.location.href;
	// 获取主机地址之后的目录,如： /springmvc/page/frame/test.html
	var pathName = window.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址,如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/springmvc
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	var rootPath = localhostPaht + projectName;
	return rootPath;
}