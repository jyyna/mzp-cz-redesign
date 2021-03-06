/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-crumb': '&#x2f;',
		'icon-lt2': '&#x3c;',
		'icon-gt2': '&#x3e;',
		'icon-lt': '&#xab;',
		'icon-caret': '&#x5e;',
		'icon-gt': '&#xbb;',
		'icon-bar': '&#x2013;',
		'icon-search': '&#xe607;',
		'icon-bubble': '&#xe600;',
		'icon-clock': '&#x25ef;',
		'icon-home': '&#xe603;',
		'icon-print': '&#xe604;',
		'icon-rss': '&#xe605;',
		'icon-sitemap': '&#xe606;',
		'icon-close': '&#xd7;',
		'icon-facebook': '&#xe60d;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
