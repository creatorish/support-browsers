/**
 * Support Browser Plugin
 * サポートしているブラウザをアイコン付で表示するjQueryプラグイン
 * Support Utility JSが読み込まれていると現在のブラウザが対応しているかどうかも判別できます。
 *
 * Copyright 2012 creatorish.com
 * Author: yuu@creatorish
 * Site: http://creatorish.com
 * LastUpdate: 2012/08/28
 * HowToUse: http://creatorish.com/lab/4193
 * Required: jQuery
 * AddOn: Support Utility JS(http://creatorish.com/lab/)
 * Icon: High-res browser logos(http://paulirish.com/2010/high-res-browser-icons/)
 *
**/

$.fn.SupportBrowser = function() {
	var self = $(this);
	var isSupport = false;
	$.each(self.children(),function() {
		var val = $(this).html();
		var data = val.match(/(IE|Chrome|Firefox|Safari|Opera|iPhone|iPad|Android)(.*?)$/);
		if (data) {
			$(this).attr("title",data[0]);
			var html = "<div class='"+data[1]+"'></div>";
			if (data[2]) {
				html += "<sub class='version'>" + data[2] + "</sub>";
			}
			$(this).html(html);
			
			if (typeof($s) === "object") {
				var browser = $s.vendor.browser.toLowerCase();
				var supportBrowser = String(data[1]).toLowerCase();
				
				var flg = (browser === supportBrowser);
				var version = $s.vendor.version;
				if (supportBrowser === "android") {
					flg = $s.device.android;
					version = $s.device.version;
				} else if (supportBrowser === "iphone") {
					flg = $s.device.iPhone;
					version = $s.device.version;
				} else if (supportBrowser === "ipad") {
					flg = $s.device.iPad;
					version = $s.device.version;
				}
				if (flg) {
					if (data[2]) {
						var num = String(data[2]).split("-");
						if (num.length === 1) {
							var lastNum = parseInt(String(num[0]).match(/[0-9]{1}$/)) + 1;
							lastNum = String(num[0]).replace(/[0-9]{1}$/,lastNum);
							if (num[0] >= parseFloat(version) && parseFloat(version) < lastNum) {
								isSupport = true;
							}
						} else if (num.length === 2) {
							if (num[0] && num[1]) {
								if (num[0] <= parseFloat(version) && parseFloat(version) <= num[1]) {
									isSupport = true;
								}
							} else {
								if (num[0] <= parseFloat(version)) {
									isSupport = true;
								}
							}
						}
					} else {
						isSupport = true;
					}
				}
			} else {
				isSupport = true;
			}
		}
	});
	
	return isSupport;
};