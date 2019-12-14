(function(window) {

	var zepto = {};

	function Z(dom, selector) {
		var i, len = dom ? dom.length : 0;
		for (i = 0; i < len; i++) {
			this[i] = dom[i];
		}
		this.length = len;
		this.selector = selector || '';
	}

	zepto.Z = function(dom, selector) {
		return new Z(dom, selector);
	}

	zepto.init = function(selector) {
		var slice = Array.prototype.slice;
		var dom = slice.call(document.querySelectorAll(selector));
		return zepto.Z(dom, selector);
	}

	var $ = function(selector) {
		return zepto.init(selector);
	}

	window.$ = $;

	$.fn = {
		css: function(key, value) {
			for (var i = 0; i < this.length; i++) {
				this[i].style[key] = value;
			}
			return this;
		},
		html: function(value) {
			if (value !== undefined) {
				this[0].innerHTML = value;
			} else {
				return this[0];
			}
		},
		text: function(value) {
			if (value !== undefined) {
				this[0].innerText = value;
			} else {
				return this[0].innerText;
			}
		}
	}
	Z.prototype = $.fn;
})(window)