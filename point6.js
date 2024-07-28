var world = ["void", "first"]; var zones = world[Math.floor(Math.random() * world.length)];
var idcode = window.location.href.replace('?fbclid=','@').replace('&fbclid=','@').replace(/@.+/,'').replace(/.+id?=/,"").replace("&m=1","");
var homeAnchor = $("<a>").attr("href","//"+zones+Base64.decode("cmVhbG0uaW1nbGUueHl6Lz9jb2RlPQ==")+idcode).text("KOLEKSI LENGKAP");

$.getJSON(Base64.decode("Ly9wb3J0YWxyZWFsbS5pbWdsZS54eXovZGF0YS8=")+idcode.toUpperCase()+".json", function(data) {
  for (var i = 0; i < data.token.length; i++) {
    var anchor = $("<a>").attr("href", "//"+zones+Base64.decode("cmVhbG0uaW1nbGUueHl6L3Y/dG9rZW49")+data.token[i].replace("AD6v5d","")+"&j="+idcode+"&p="+(i+1)).text("Part "+(i+1));
	var linkad = $("<a>").attr("href", "//288.cdn-lb.com/url/alpatoto"); linkad.attr("id", "linkAd"); linkad.attr("rel", "nofollow");
	var imgads = $("<img>").attr("src", "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3vo_85zcfWwKIGF__3sJcGgTbDGcUZh3UULC35hU3Kw6afb-tsMdthWhHsYOFir2mggTKc-fXjoDOPFsKcUADLRX7UCZvIrn_b4qOVFGBvo-kee97mOxw6N1DN458RbFffyFhCJMx8uVyuYIyZuw99He8V6FFl8sIb9L_Ai730Orc4GNrLgXvKPKoMw/s320-rw/alpa.gif"); linkad.append(imgads);
	//insta  
	var linkig = $("<a>").attr("href", "//instagram.com/ig_apemanget"); linkig.attr("id", "linkAd"); linkig.attr("rel", "nofollow");
	var promot = $("<img>").attr("src", "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidSGdnt8l0ftWALJJZKQx6HD_xBjpmegTBBH-QuXWb1kLuPrR-HEV0KXvDagN7vSFduHq-JV4SztqG-JuFUyJlTADcIYhUoLWzcszKoZ5g81G_EpKAlRxpanWaLirzWohNIm5x0pE2xRVL9SvUfMGEo6TP2EhGWw5Dgg9LMf-usk1p-WVVyHL5eizkqg/s320-rw/ig_apemanget.jpg"); linkig.append(promot);
	  
	if (i == 2) {
		$("#post-ctr").append(anchor); $("#post-ctr").append("<br>");
		$("#post-ctr").append(linkad); $("#post-ctr").append("<br>");
//	} else if (i == 5 || i == 8 || i == 11 || i == 14 || i == 17) {
		//isi
	} else if (i == data.token.length - 1) {
		$("#post-ctr").append(anchor); $("#post-ctr").append("<br>");
		$("#post-ctr").append(linkig); $("#post-ctr").append("<br>");		
	} else {
		$("#post-ctr").append(anchor); $("#post-ctr").append("<br>");
	}
		$("#post-btm").append(homeAnchor);
  }
})
.fail(function(jqXHR, textStatus, errorThrown) {
  window.location="//google.com";
});

var warnmsg = decodeURIComponent(`%3Cdiv%20style%3D%22text-align%3A%20center%3Bbackground-color%3A%20%23ffb700%3Bborder-radius%3A%205px%3Bmax-width%3A%20418px%3Bdisplay%3A%20flex%3Balign-items%3A%20center%3Bmargin%3A%20auto%3B%22%3EWarning!%20If%20you%20did%20not%20create%20this%20page%2C%20%3Cbr%20%2F%3E%3Ca%20style%3D%22width%3A%2046%25%3Bborder%3A%200%3Bcolor%3A%20darkmagenta%3B%22%20href%3D%22%2F%2Fuseqr.link%22%3E%20GOTO%20HOMEPAGE%3C%2Fa%3E%3C%2Fdiv%3E`); 
var CpXtwF = decodeURIComponent(`var%20_cpp%20%3D%20_cpp%20%7C%7C%20%5B%5D%3B%0A_cpp%5B%27source_id%27%5D%20%3D%20%2792055%27%3B%0A_cpp%5B%27pop_type%27%5D%20%3D%20%2711%27%3B%0A_cpp%5B%27onePer%27%5D%20%3D%20%270%27%3B%0A_cpp%5B%27freq%27%5D%20%3D%20%270%27%3B%0A_cpp%5B%27fb%27%5D%20%3D%20%2711%27%3B%0A%28function%28%29%20%7B%0Avar%20hs%20%3D%20document.createElement%28%27script%27%29%3B%20hs.type%20%3D%20%27text%2Fjavascript%27%3B%20hs.async%20%3D%20true%3B%0Ahs.src%20%3D%20%28%27%2F%2Fcdn1.adcdnx.com%2Fs%2Fadp1v3.js%27%29%3B%0Avar%20cs%20%3D%20document.getElementsByTagName%28%27script%27%29%5B0%5D%3B%0Acs.parentNode.insertBefore%28hs%2C%20cs%29%3B%0A%7D%29%28%29%3B`);
document.addEventListener('DOMContentLoaded', function() {
    function setCookie(cname, cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (6 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function loadScript() {
        var kjngn = getCookie("kjngn");
        if (kjngn === "") {
            kjngn = 0;
        }
        kjngn = parseInt(kjngn);
        if (kjngn > 10) {
				if (kjngn % 2 !== 0) {
					$('#post-top').append('<scr'+'ipt>'+CpXtwF+'</scr'+'ipt>');
				}
        } else {
				$('#post-top').append(warnmsg);
				if (kjngn % 2 !== 0) {
					const scrPop = document.createElement('script'), prtkl = '//', jspath = '.com/86/ee/38/86ee38bc5153fafce9238da7e86faf19.js';scrPop.type = 'text/javascript';scrPop.src = `${prtkl}cabbagereporterpayroll${jspath}`;var alternateSrcs = ['separationalphabet','foldedprevent','dramamutual'];scrPop.onerror = function() {var randomIndx = Math.floor(Math.random() * alternateSrcs.length);var alternateSrc = prtkl + alternateSrcs[randomIndx] + jspath;scrPop.src = alternateSrc;document.head.appendChild(scrPop);};document.head.appendChild(scrPop);
				}
		}
        kjngn++;
        setCookie("kjngn", kjngn);
    }

    loadScript();
});
