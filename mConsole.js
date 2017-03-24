// html框架
var wrapHtml = `<div class='wrap'>
					<div class='innerWrap'></div>
				</div>
				<button id='btn'>按钮</button>`;

document.write(wrapHtml)
var wrapDom = document.querySelector('.wrap');
var innerWrapDom = document.querySelector('.innerWrap');
var btnDom = document.getElementById('btn');

// css
document.documentElement.style.cssText=`font-size:100px;`
wrapDom.style.cssText = `position:fixed;
							bottom:0.2rem;
							width:95%;
							height:3.5rem;
							border:0.01rem solid #eee;
							background-color:#eee;
							z-index:99;
							right:0.1rem;
							font-size:0.16rem;
		  					display:none`;
innerWrapDom.style.cssText=`position:relative;
							height:100%;
							width:100%;
							overflow-y:scroll;
							word-wrap: break-word`;
btnDom.style.cssText = `width:0.6rem;
							height:0.4rem;
							line-height:0.2rem;
							opacity:0.5;
							position:fixed;
							z-index:100;
							bottom:0.2rem;
							border:0;
							right:0.1rem;
							font-size:0.14rem;
							border-radius:0.05rem;
							outline:none;
							color:white;
							background-color:rgba(9,187,7,0.8);
							box-shadow:5px #eee;
							-webkit-box-shadow:5px 5px 5px #ddd;
							-moz-box-shadow:5px 5px 5px #ddd;
							-ms-box-shadow:5px 5px 5px #ddd`;

// btn点击事件
btnDom.onclick = function() {
    var wrapDisplay = wrapDom.style.display;
    if (wrapDisplay == 'none') {
        wrapDom.style.display = 'block'
    } else if (wrapDisplay == 'block') {
        wrapDom.style.display = 'none'
    }
}


// 公共mConsole()
function mConsole(arg,print) {
	var p=document.createElement(`p`)
	arg=arg||'';
	p.innerHTML=`<span style='color:#000'>${arg}</span>:${print}`
	innerWrapDom.appendChild(p)
	p.style.cssText=`border-bottom:1px solid rgba(221, 221, 221,0.8);
					padding:0.1rem 0.1rem;
					margin:0;
					color:#666`
}
