/**
 * @author xuld
 */

/**
 * 打开设为主页对话框。
 * @param {String} url 设置的地址。 * @return {Boolean} 指示本次操作是否成功。
 */
function setHomePage(url) {
	url = url || location.href;
	
	if (document.body && document.body.setHomePage) {
		document.body.style.behavior = "url(#default#homepage)";
		document.body.setHomePage(url);
		return true;
	}
	
	return false;
}
