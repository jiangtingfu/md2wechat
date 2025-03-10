const inlineCss = require('inline-css');
const { marked } = require('marked');

// ===========CSS===========
const allCss = `.themes{font-size:16px;}.themes.chengxin h1{font-size:24px;text-align:left;font-weight:bold;display:table;margin-top:30px;margin-bottom:15px;}.themes.chengxin h1 .content{font-size:24px;}.themes.chengxin h2{border-bottom:2px solid #ef7060;font-size:1.3em;}.themes.chengxin h2 .content{display:inline-block;font-weight:bold;background:#ef7060;color:#ffffff;padding:3px 10px 1px;border-top-right-radius:3px;border-top-left-radius:3px;margin-right:3px;}.themes.chengxin h2:after{display:inline-block;content:" ";vertical-align:bottom;border-bottom:36px solid #efebe9;border-right:20px solid transparent;}.themes.chengxin blockquote{border-left-color:#ef7060;background:#fff9f9;}.themes.chengxin a{color:#ef7060;border-bottom:1px solid #ef7060;}.themes.chengxin .footnote-word{color:#ff3502;}.themes.chengxin .footnote-ref{color:#ef7060;}.themes.chengxin p code,.themes.chengxin i code{color:#ef7060;}.themes.mohei{}.themes.mohei p{font-size:17px;word-spacing:3px;letter-spacing:1px;}.themes.mohei h2 .content{background-color:#5c5c5c;color:white;padding:5px 15px;border-radius:1px;}.themes.mohei img{border-radius:5px;}.themes.mohei hr{border-top:1px dashed #dddddd;}.themes.chazi{font-size:15px;letter-spacing:0.05em;color:#595959;}.themes.chazi p{margin:1em 4px;}.themes.chazi h1{margin:1.2em 0 1em;padding:0;font-weight:bold;color:#773098;}.themes.chazi h2{min-height:32px;line-height:28px;border-bottom:solid 1px #000000;color:#773098;display:inline-block;border-bottom-width:1px;border-bottom-style:solid;border-color:#773098;padding-top:5px;padding-right:0.5em;padding-left:0.5em;margin-bottom:-3px;font-size:22px;margin:1em auto;padding:0.5em 0;text-align:center;width:85%;font-weight:bold;display:flex;flex-direction:column;justify-content:center;}.themes.chazi h3{margin:1.2em 0 1em;padding:0;font-weight:bold;color:#773098;}.themes.chazi blockquote{margin:10px 5px;border-left:3px solid #9654b5;border-right:1px solid #9654b5;color:#616161;quotes:none;background:#fbf9fd;}.themes.chazi a{color:#773098;border-bottom:1px solid #773098;}.themes.chazi .footnote-word{color:#773098;}.themes.chazi .footnote-ref{color:#773098;}.themes.chazi strong{color:#773098;}.themes.chazi hr{border:1px solid #773098;margin:1.5em auto;}.themes.chazi p code,.themes.chazi li code{color:#9654b5;}.themes.nenqing p{color:#595959;}.themes.nenqing h1{color:#595959;}.themes.nenqing h2{border-bottom:2px solid #595959;margin-bottom:30px;color:#595959;}.themes.nenqing h2 .content{font-size:22px;display:inline-block;border-bottom:2px solid #595959;}.themes.nenqing h3{color:#595959;}.themes.nenqing blockquote{font-style:normal;padding:10px;position:relative;line-height:1.8;text-indent:0;border:none;color:#888;}.themes.nenqing blockquote:before{content:"“";display:inline;color:#555555;font-size:4em;font-family:Arial,serif;line-height:1em;font-weight:700;}.themes.nenqing blockquote p{display:inline;}.themes.nenqing a{color:#47c1a8;border-bottom:1px solid #47c1a8;}.themes.nenqing .footnote-word{color:#47c1a8;}.themes.nenqing .footnote-ref{color:#47c1a8;}.themes.nenqing strong{color:#47c1a8;}.themes.nenqing em{color:#47c1a8;}.themes.nenqing p code,.themes.nenqing li code{color:#47c1a8;}.themes.nenqing .footnote-item em{color:black;}.themes.lvyi{font-size:15px;letter-spacing:0.05em;color:#595959;}.themes.lvyi p{margin:1em 4px;}.themes.lvyi h1{margin:1.2em 0 1em;padding:0;font-weight:bold;color:#35b378;}.themes.lvyi h2{line-height:32px;border-bottom:solid 1px #000000;color:#35b378;display:inline-block;border-bottom-width:0px;border-bottom-style:solid;border-color:#35b378;padding-top:5px;padding-right:0.5em;padding-left:0.5em;font-size:23px;margin:1em 0 0rem 0;padding:0.5em 0;text-align:leftt;font-weight:bold;}.themes.lvyi h3{margin:1.2em 0 1em;padding:0;font-weight:bold;color:#35b378;}.themes.lvyi blockquote{margin:10px 5px;border-left:3px solid #35b378;border-right:0px solid #35b378;color:#616161;quotes:none;background:#fbf9fd;}.themes.lvyi a{color:#35b378;border-bottom:1px solid #35b378;}.themes.lvyi .footnote-word{color:#35b378;}.themes.lvyi .footnote-ref{color:#35b378;}.themes.lvyi strong{color:#35b378;}.themes.lvyi hr{border:1px solid #35b378;margin:1.5em auto;}.themes.lvyi p code,.themes.lvyi li code{color:#35b378;}.themes.lvyi .footnote-word{color:#35b378;}.themes.lvyi .footnote-ref{color:#35b378;}.themes.hongfei{font-family:PingFangSC-Light;}.themes.hongfei p{margin:10px 10px;line-height:1.75;letter-spacing:0.2em;font-size:14px;word-spacing:0.1em;}.themes.hongfei h1{border-bottom:2px solid #f83929;font-size:1.3em;}.themes.hongfei h1 .content{display:inline-block;font-weight:normal;background:#f83929;color:#ffffff;padding:3px 10px 1px;border-top-right-radius:3px;border-top-left-radius:3px;margin-right:3px;}.themes.hongfei h2{text-align:left;margin:20px 10px 0px 0px;}.themes.hongfei h2 .content{font-family:STHeitiSC-Light;font-size:18px;font-weight:bolder;display:inline-block;padding-left:10px;border-left:5px solid #f83929;}.themes.hongfei h3 .content{font-size:14px;color:#a5d55d;}.themes.hongfei ul{font-size:14px;}.themes.hongfei ol{font-size:14px;}.themes.hongfei blockquote{font-style:normal;border-left:none;padding:10px;position:relative;line-height:1.8;border-radius:0px 0px 10px 10px;color:#feeeed;background:#000;box-shadow:#84a1a8 0px 10px 15px;}.themes.hongfei blockquote:before{content:" ";display:inline;color:#fff;font-size:4em;font-family:Arial,serif;line-height:1em;font-weight:700;}.themes.hongfei blockquote.important p{color:#feeeed;font-size:13px;display:inline;}.themes.hongfei blockquote.important:after{content:"”";float:right;display:inline;color:#fff;font-size:3em;line-height:1em;font-weight:500;}.themes.hongfei a{color:#f83929;border-bottom:1px solid #ff3502;font-family:STHeitiSC-Light;}.themes.hongfei .footnote-word{color:#f83929;}.themes.hongfei .footnote-ref{color:#f83929;}.themes.hongfei strong{font-weight:border;color:#f83929;}.themes.hongfei em{color:#f83929;letter-spacing:0.3em;}.themes.hongfei hr{height:1px;padding:0;border:none;border-top:medium solidid #333;text-align:center;background-image:linear-gradient(to right,rgba(248,57,41,0),rgba(248,57,41,0.75),rgba(248,57,41,0));}.themes.hongfei img{border-radius:0px 0px 5px 5px;display:block;margin:20px auto;width:85%;height:100%;object-fit:contain;box-shadow:#84a1a8 0px 10px 15px;}.themes.hongfei figcaption{display:block;font-size:12px;font-family:PingFangSC-Light;}.themes.hongfei p code,.themes.hongfei li code{color:#ff5d6c;}.themes.hongfei table tr th,.themes.hongfei table tr td{font-size:14px;}.themes.hongfei .footnote-item em{color:#6e1e51;font-size:12px;}.themes.wechat-format p{line-height:1.6;color:#3f3f3f;font-size:16px;margin:10px 0px;}.themes.wechat-format h2{margin:80px 10px 40px 10px;text-align:center;font-weight:normal;color:#3f3f3f;font-size:140%;}.themes.wechat-format h3{margin:40px 0px 20px 0px;font-weight:bold;line-height:1.5;color:#3f3f3f;font-size:120%;}.themes.wechat-format blockquote{color:#5b5b5b;border-left:3px solid #9e9e9e;background:rgba(158,158,158,0.1);padding:1px 0 1px 10px;margin:20px 0px;}.themes.wechat-format blockquote.important p{color:#3f3f3f;line-height:1.5;font-size:16px;margin:10px;padding:0px;}.themes.wechat-format a{color:#ff3502;border-bottom:1px solid #ff3502;}.themes.wechat-format .footnote-word{color:#ff3502;font-size:16px;line-height:1.5;font-weight:normal;}.themes.wechat-format .footnote-ref{color:#ff3502;font-weight:normal;}.themes.wechat-format strong{color:#ff3502;line-height:1.5;font-size:16px;}.themes.wechat-format p code,.themes.wechat-format li code{background:#f8f5ec;color:#ff3502;line-height:1.5;font-size:90%;padding:3px 5px;border-radius:2px;}.themes.lanying{font-family:"PingFang SC","Microsoft YaHei",sans-serif;word-break:break-all;}.themes.lanying h1{font-size:1.7em;font-weight:normal;border-bottom:2px solid hsl(216,100%,68%);}.themes.lanying h1 .content{background:hsl(216,100%,68%);color:white;padding:3px 10px;border-top-right-radius:3px;border-top-left-radius:3px;margin-right:3px;}.themes.lanying h2{font-weight:normal;color:#333;font-size:1.4em;border-bottom:1px solid hsl(216,100%,68%);padding-bottom:3px;}.themes.lanying h2 .content{border-bottom:1px solid hsl(216,100%,68%);}.themes.lanying h3{font-weight:normal;color:#333;font-size:1.2em;}.themes.lanying h4{font-weight:normal;font-size:1em;width:80%;border:1px solid hsl(216,100%,68%);border-top:4px solid hsl(216,100%,68%);padding:10px;margin:30px auto;color:#333;}.themes.lanying h5{font-weight:normal;font-size:1.3em;text-align:center;background:hsl(216,100%,68%);border:3px double #fff;width:80%;padding:10px;margin:30px auto;color:#fff;}.themes.lanying h6{font-size:1.5em;font-weight:normal;color:hsl(216,100%,68%);border-bottom:1px solid hsl(216,100%,68%);}.themes.lanying em{font-style:normal;font-weight:normal;color:white;background:hsl(244,100%,75%);padding:2px 4px;margin:0px 2px;}.themes.lanying hr{width:90%;margin:1.5em auto;border-top:2px dashed hsl(216,100%,68%);}.themes.lanying table{margin:1.5em auto;width:auto;}.themes.lanying img{width:90%;margin:0 auto;box-shadow:#ccc 0 10px 15px;}.themes.lanying blockquote.impotant{background:#f9f9f9;border-left-color:hsl(216,100%,68%);}.themes.lanying blockquote.impotant p{color:#999;padding:3px 0;}.themes.lanying a{color:hsl(187,100%,45%);font-weight:normal;border-bottom-color:hsl(187,100%,45%);}.themes.lanying .footnote-word,.themes.lanying .footnote-ref{font-weight:normal;color:hsl(187,100%,45%);}.themes.lanying strong{color:hsl(216,80%,44%);}.themes.lanying del{color:#999;}.themes.lanying p,.themes.lanying li,.themes.lanying li span,.themes.lanying h4,.themes.lanying table tr td{color:#666;}.themes.lanying table tr th{color:#333;font-weight:normal;}.themes.lanying p code,.themes.lanying li code{color:hsl(216,100%,68%);}.themes.lanying sup{line-height:0;}.themes.lanying .footnote-item p{color:#666;}.themes.lanying .footnote-item p em{color:#999;background:transparent;}.themes.kejilan{font-family:PingFangSC-Light;}.themes.kejilan p{margin:10px 10px;line-height:1.75;letter-spacing:0.2em;font-size:15px;word-spacing:0.1em;}.themes.kejilan h1{border-bottom:2px solid #0e88eb;font-size:1.4em;text-align:center;}.themes.kejilan h1 .content{font-size:1.4em;display:inline-block;font-weight:bold;color:#ffffff;color:#0e88eb;padding:3px 10px 1px;border-top-right-radius:3px;border-top-left-radius:3px;margin-right:3px;}.themes.kejilan h2{text-align:left;margin:20px 10px 0px 0px;}.themes.kejilan h2 .content{font-family:STHeitiSC-Light;font-size:22px;color:#0e88eb;font-weight:bolder;display:inline-block;padding-left:10px;border-left:5px solid #0e88eb;}.themes.kejilan h3{font-size:18px;color:#0e88eb;}.themes.kejilan h3 .content{font-size:18px;color:#0e88eb;}.themes.kejilan blockquote.important{font-style:normal;border-left:none;padding:10px;position:relative;line-height:1.8;border-radius:0px 0px 10px 10px;color:#0e88eb;background:#fff;box-shadow:#84a1a8 0px 10px 15px;}.themes.kejilan blockquote.important:before{content:"★ ";display:inline;color:#0e88eb;font-size:4em;font-family:Arial,serif;line-height:1em;font-weight:700;}.themes.kejilan blockquote.important p{color:#0e88eb;font-size:15px;display:inline;}.themes.kejilan blockquote.important:after{content:"”";float:right;display:inline;color:#0e88eb;font-size:3em;line-height:1em;font-weight:500;}.themes.kejilan a{color:#0e88eb;border-bottom:0px solid #ff3502;font-family:STHeitiSC-Light;}.themes.kejilan .footnote-word{color:#0e88eb;}.themes.kejilan .footnote-ref{color:#0e88eb;}.themes.kejilan strong{font-weight:border;color:#0e88eb;}.themes.kejilan em{color:#0e88eb;letter-spacing:0.3em;}.themes.kejilan hr{height:1px;padding:0;border:none;border-top:medium solidid #333;text-align:center;background-image:linear-gradient(to right,rgba(248,57,41,0),#0e88eb,rgba(248,57,41,0));}.themes.kejilan img{border-radius:0px 0px 5px 5px;display:block;margin:20px auto;width:85%;height:100%;object-fit:contain;box-shadow:#84a1a8 0px 10px 15px;}.themes.kejilan figcaption{display:block;font-size:12px;font-family:PingFangSC-Light;}.themes.kejilan table tr th,.themes.kejilan table tr td{font-size:15px;}.themes.kejilan .footnote-item em{color:#082a71;font-size:12px;}.themes.lanqing p{text-align:justify;}.themes.lanqing h1{font-size:1.8em;color:#009688;margin:1.2em auto;text-align:center;border-bottom:1px solid #009688;}.themes.lanqing h2{color:#009688;padding-left:10px;margin:1em auto;border-left:3px solid #009688;}.themes.lanqing h3{margin:0.6em auto;padding-left:10px;border-left:2px solid #009688;}.themes.lanqing h4{margin:0.6em auto;font-size:1.2em;padding-left:10px;border-left:2px dashed #009688;}.themes.lanqing h5{margin:0.6em auto;font-size:1.1em;padding-left:10px;border-left:1px dashed #009688;}.themes.lanqing h6{margin:0.6em auto;font-size:1em;padding-left:10px;border-left:1px dotted #009688;}.themes.lanqing blockquote{border-left:2px solid #888;border-right:2px solid #888;padding-left:1em;color:#777;}.themes.lanqing a{color:#009688;border-bottom:1px solid #009688;}.themes.lanqing .footnote-word{color:#009688;}.themes.lanqing .footnote-ref{color:#009688;}.themes.lanqing hr{margin:20px 0;}.themes.lanqing p code,.themes.lanqing li code{color:#009688;}.themes.lanqing table tr th{border:1px solid #009688;background-color:#009688;color:#f8f8f8;border-bottom:0;}.themes.lanqing table tr td{border:1px solid #009688;}.themes.lanqing table tr:nth-child(2n){background-color:#f8f8f8;}.themes.shanchui p{margin:0 0 20px;padding:0;line-height:1.8em;color:#3a3a3a;}.themes.shanchui h1{font-size:2.1em;line-height:1.1em;padding-top:16px;padding-bottom:10px;margin-bottom:4px;border-bottom:1px solid #c99833;}.themes.shanchui h1 .content{color:#515151;font-weight:700;}.themes.shanchui h2,.themes.shanchui h3,.themes.shanchui h4,.themes.shanchui h5,.themes.shanchui h6{line-height:1.5em;margin-top:2.2em;margin-bottom:4px;}.themes.shanchui h2{margin-bottom:35px;}.themes.shanchui h2 .content{display:inline-block;font-weight:bold;background:linear-gradient(#fff 60%,#ffb11b 40%);color:#515151;padding:2px 13px 2px;margin-right:3px;height:50%;}.themes.shanchui h3{line-height:1.4;padding-top:10px;margin:10px 0 5px;}.themes.shanchui h3 .content{color:#515151;font-weight:700;font-size:1em;padding-left:20px;border-left:3px solid #f9bf45;}.themes.shanchui blockquote{border-left-color:#ffb11b;background:#fff5e3;}.themes.shanchui blockquote p{color:#595959;}.themes.shanchui a{border:none;text-decoration:none;color:#dda52d;}.themes.shanchui del{color:#d19826;}.themes.shanchui hr{border-top:1px solid #f9bf45;margin:20px 0px;}.themes.shanchui img{width:100%;border-radius:5px;display:block;margin-bottom:15px;height:auto;}.themes.shanchui figcaption{color:#dda52d;font-size:14px;}.themes.shanchui p code,.themes.shanchui li code{color:#9b6e23;background-color:#fff5e3;padding:3px;margin:3px;}.themes.shanchui table tr th,.themes.shanchui table tr td{text-align:center;}.themes.shanchui .footnote-word{color:#ffb11b;padding:3px;}.themes.shanchui .footnote-ref{color:#dda52d;margin:2px;padding:3px;}.themes.qianduan{line-height:1.6;letter-spacing:0.034em;color:#3f3f3f;font-size:16px;word-break:all;}.themes.qianduan p{padding-top:23px;color:#4a4a4a;line-height:1.75em;}.themes.qianduan h1{text-align:center;background-image:url(https://yanxi123.com/md2wechat/assets/images/mountain_2.webp);background-position:center top;background-repeat:no-repeat;background-size:95px;line-height:95px;margin-top:38px;margin-bottom:10px;}.themes.qianduan h1 .content{font-size:20px;color:#3c70c6;border-bottom:2px solid #3c7076;}.themes.qianduan h2{display:block;text-align:center;background-image:url(https://yanxi123.com/md2wechat/assets/images/mountain_2.webp);background-position:center center;background-repeat:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-size:63px;margin-top:38px;margin-bottom:10px;}.themes.qianduan h2 .content{text-align:center;display:inline-block;height:38px;line-height:42px;color:#3c70c6;background-position:left center;background-repeat:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-size:63px;margin-top:38px;font-size:18px;margin-bottom:10px;}.themes.qianduan h3:before{content:"";background-image:url(https://yanxi123.com/md2wechat/assets/images/mountain_1.webp);background-size:15px 15px;display:inline-block;width:15px;height:15px;line-height:15px;margin-bottom:-1px;}.themes.qianduan h3 .content{font-size:16px;font-weight:bold;display:inline-block;margin-left:8px;color:#3c70c6;}.themes.qianduan blockquote.important{padding:15px 20px;line-height:27px;background-color:#efefef;border-left:none;display:block;}.themes.qianduan blockquote.important p{padding:0px;font-size:15px;color:#595959;}.themes.qianduan a{color:#3c70c6;text-decoration:none;border-bottom:1px solid #3c70c6;}.themes.qianduan strong{line-height:1.75em;color:#4a4a4a;}.themes.qianduan hr{height:1px;padding:0;border:none;text-align:center;background-image:linear-gradient(to right,rgba(60,122,198,0),rgba(60,122,198,0.75),rgba(60,122,198,0));}.themes.qianduan img{border-radius:4px;margin-bottom:25px;}.themes.qianduan figcaption{display:block;font-size:12px;font-family:PingFangSC-Light;}.themes.qianduan p code,.themes.qianduan li code{color:#3c70c6;}.themes.qianduan table tr th,.themes.qianduan table tr td{font-size:14px;}.themes.qianduan .footnotes{padding-top:8px;}.themes.qianduan .footnote-word{color:#3c70c6;}.themes.qianduan .footnote-ref{color:#3c70c6;}.themes.qianduan .footnote-item em{color:#3c70c6;font-size:13px;font-style:normal;border-bottom-color:1px dashed #3c70c6;}.themes.qianduan .footnote-num{color:#3c70c6;}.themes.qianduan .footnote-item p{color:#3c70c6;font-weight:bold;}.themes.qianduan .footnote-item a{color:#3c70c6;}.themes.qianduan .footnote-item p em{font-size:14px;font-weight:normal;border-bottom:1px dashed #3c70c6;}.themes.jikehei p{box-sizing:border-box;margin-bottom:16px;font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:15px;text-align:start;white-space:normal;text-size-adjust:auto;line-height:1.75em;}.themes.jikehei h1{margin-top:-0.46em;margin-bottom:0.1em;border-bottom:2px solid #c6c4c4;box-sizing:border-box;}.themes.jikehei h1 .content{padding-top:5px;padding-bottom:5px;color:#a0a0a0;font-size:13px;line-height:2;box-sizing:border-box;}.themes.jikehei h2{margin:10px auto;height:40px;background-color:#fbfbfb;border-bottom:1px solid #f6f6f6;overflow:hidden;box-sizing:border-box;}.themes.jikehei h2 .content{margin-left:-10px;display:inline-block;width:auto;height:40px;background-color:#212122;border-bottom-right-radius:100px;color:#ffffff;padding-right:30px;padding-left:30px;line-height:40px;font-size:16px;}.themes.jikehei h3{margin:20px auto 5px;border-top:1px solid #dddddd;box-sizing:border-box;}.themes.jikehei h3 .content{margin-top:-1px;padding-top:6px;padding-right:5px;padding-left:5px;font-size:17px;border-top:2px solid #212122;display:inline-block;line-height:1.1;}.themes.jikehei h4{margin:10px auto -1px;border-top:1px solid #dddddd;box-sizing:border-box;}.themes.jikehei h4 .content{margin-top:-1px;padding-top:6px;padding-right:5px;padding-left:5px;font-size:16px;border-top:2px solid #212122;display:inline-block;line-height:1.1;}.themes.jikehei blockquote.important{border-left-color:#dddddd;margin-top:1.2em;margin-bottom:1.2em;padding-right:1em;padding-left:1em;border-left-width:4px;color:#777777;quotes:none;}.themes.jikehei blockquote.important p{font-size:15px;font-family:-apple-system-font,BlinkMacSystemFont,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei UI","Microsoft YaHei",Arial,sans-serif;color:#777777;line-height:1.75em;}.themes.jikehei a{color:#ef7060;border-bottom:1px solid #ef7060;}.themes.jikehei p code,.themes.jikehei li code{color:#ef7060;}.themes.jikehei .footnote-word{color:#ff3502;}.themes.jikehei .footnote-ref{color:#ef7060;}.themes.jian{font-size:16px;margin-top:-1em;color:#333;padding-top:0;padding-bottom:0;font-family:-apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;}.themes.jian *{line-height:1.6 !important;}.themes.jian a{color:#3e64ff;}.themes.jian p code{color:#e46918;background-color:#efefef;}.themes.jian .footnote-word,.themes.jian .footnote-ref{color:#004a7c;}.themes.jian .footnote-item em{color:#004a7c;}.themes.jian p,.themes.jian section,.themes.jian h1,.themes.jian h2,.themes.jian h3,.themes.jian h4,.themes.jian h5,.themes.jian h6,.themes.jian pre,.themes.jian figure,.themes.jian ul,.themes.jian hr{margin:1em 0;color:#333;}.themes.jian hr{border-top:1px solid #dfe2e5;}.themes.jian h1{font-size:1.4em;}.themes.jian h2{font-size:1.3em;}.themes.jian h1,.themes.jian h2{padding-bottom:0.3em;border-bottom:1px solid #dfe2e5;}.themes.jian h3{font-size:1.2em;}.themes.jian h4{font-size:1.1em;}.themes.jian h5{font-size:1em;}.themes.jian h6{font-size:1em;}.themes.jian p{padding:0;font-size:inherit;color:#333;}.themes.jian blockquote.important{background:none;border-left:4px solid #ddd;padding:0 1em;}.themes.jian blockquote.important p{margin:0;color:#666;}.themes.jian strong{color:#333;}.themes.jian a{font-weight:normal;border-color:inherit;}.themes.jian li ul{margin:0;}.themes.jian pre{border-radius:4px;}.themes.jian section pre{margin:0;padding-top:0;padding-bottom:0;}.themes.jian p code{font-size:0.875em;}.themes.jian pre code{font-size:0.875em;}.themes.jian figure img{max-width:100%;width:auto;margin:0 auto;}.themes.jian table tr th,.themes.jian table tr td{font-size:1em;}.themes.jian .footnote-item{margin:0.4em 0;}.themes.jian .footnote-item *{line-height:1.4 !important;}.themes.jian .footnote-item p{margin:0;font-size:0.9em;}.themes.jian .footnote-item em{font-style:normal;padding-left:0.5em;}.themes.jian .footnote-item span{flex:0 0 1.5em;margin-right:10px;font-size:0.9em;}.themes.jian pre.code-snippet__js{padding:16px 0;}.themes.jian pre.code-snippet__js code{font-size:14px;}.themes.jian .code-snippet__fix .code-snippet__line-index{counter-reset:line;flex-shrink:0;height:100%;padding:1em;list-style-type:none;padding:16px;margin:0;}.themes.qiangweizi{line-height:1.75;color:#595959;font-family:Optima-Regular,Optima,PingFangTC-Light,PingFangSC-light,PingFangTC-light;letter-spacing:2px;background-image:linear-gradient(90deg,rgba(50,0,0,0.05) 3%,rgba(0,0,0,0) 3%),linear-gradient(360deg,rgba(50,0,0,0.05) 3%,rgba(0,0,0,0) 3%);background-size:20px 20px;background-position:center center;}.themes.qiangweizi p{color:#595959;margin:10px 0px;letter-spacing:2px;font-size:14px;word-spacing:2px;}.themes.qiangweizi h1{font-size:25px;}.themes.qiangweizi h1 .content{display:inline-block;font-weight:bold;color:#595959;}.themes.qiangweizi h2{text-align:left;margin:20px 10px 0px 0px;}.themes.qiangweizi h2 .content{font-size:18px;font-weight:bold;display:inline-block;padding-left:10px;border-left:5px solid #dec6fb;color:#595959;}.themes.qiangweizi h3{font-size:16px;font-weight:bold;text-align:center;}.themes.qiangweizi h3 .content{border-bottom:2px solid #dec6fb;color:#595959;}.themes.qiangweizi blockquote{text-size-adjust:100%;line-height:1.55em;font-weight:400;border-radius:6px;color:#595959;font-style:normal;text-align:left;box-sizing:inherit;border-left:none;border:1px solid #dec6fb;background:#f6eeff;}.themes.qiangweizi blockquote::before{content:"❝";color:#dec6fb;font-size:34px;line-height:1;font-weight:700;}.themes.qiangweizi blockquote p{color:#595959;}.themes.qiangweizi blockquote::after{content:"❞";float:right;color:#dec6fb;}.themes.qiangweizi a{color:#664d9d;font-weight:normal;border-bottom:1px solid #664d9d;}.themes.qiangweizi strong{color:#595959;font-weight:bold;}.themes.qiangweizi strong::before{content:"「";}.themes.qiangweizi strong::after{content:"」";}.themes.qiangweizi em{font-style:normal;color:#595959;background:#f6eeff;}.themes.qiangweizi del{color:#595959;}.themes.qiangweizi hr{height:1px;padding:0;border:none;border-top:2px solid #d9b8fa;}.themes.qiangweizi img{border-radius:6px;display:block;margin:20px auto;object-fit:contain;}.themes.qiangweizi figcaption{display:block;font-size:13px;color:#595959;}.themes.qiangweizi p code,.themes.qiangweizi li code{color:#595959;}.themes.qiangweizi .code-snippet__fix{background:#f7f7f7;border-radius:2px;}.themes.qiangweizi table tr th,.themes.qiangweizi table tr td{font-size:14px;color:#595959;}.themes.qiangweizi .footnotes{background:#f6eeff;padding:20px 20px 20px 20px;font-size:14px;border:0.8px solid #dec6fb;border-radius:6px;border:1px solid #dec6fb;}.themes.qiangweizi .footnote-word{font-weight:normal;color:#595959;}.themes.qiangweizi .footnote-ref{font-weight:normal;color:#595959;}.themes.qiangweizi .footnote-item em{background:#f6eeff;font-size:14px;color:#595959;display:block;}.themes.qiangweizi .footnote-item p{color:#595959;font-weight:bold;}.themes.qiangweizi .footnote-item p em{font-weight:normal;}.themes.menglv{line-height:1.6;letter-spacing:0.034em;color:#3f3f3f;font-size:16px;word-break:all;}.themes.menglv p{padding-top:1em;color:#4a4a4a;line-height:1.75em;}.themes.menglv h1{text-align:center;background-image:url(http://img.xiaogangzai.cn/title_h1.png);background-position:center top;background-repeat:no-repeat;background-size:75px;line-height:95px;margin-top:38px;margin-bottom:10px;}.themes.menglv h1 .content{font-size:20px;color:#48b378;border-bottom:2px solid #2e7950;}.themes.menglv h2{display:block;text-align:center;background-position:center center;background-repeat:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-size:50px;margin-top:1em;margin-bottom:10px;}.themes.menglv h2 .content{text-align:center;display:inline-block;height:38px;line-height:42px;color:#48b378;background-position:left center;background-repeat:no-repeat;background-attachment:initial;background-origin:initial;background-clip:initial;background-size:63px;margin-top:38px;font-size:18px;margin-bottom:10px;}.themes.menglv h3{margin-top:1.2em;}.themes.menglv h3:before{content:"";background-image:url(http://img.xiaogangzai.cn/title_h2.png);background-size:100% 100%;background-repeat:no-repeat;display:inline-block;width:16px;height:15px;line-height:15px;margin-bottom:-1px;}.themes.menglv h3 .content{font-size:17px;font-weight:bold;display:inline-block;margin-left:8px;color:#48b378;}.themes.menglv h4{margin-top:30px;}.themes.menglv blockquote.important{padding:15px 20px;line-height:27px;background-color:#fbf9fd;border-left:3px solid #35b378;display:block;}.themes.menglv blockquote.important p{padding:0px;font-size:15px;color:#595959;}.themes.menglv a{color:#48b378;text-decoration:none;border-bottom:1px solid #48b378;}.themes.menglv strong{line-height:1.75em;color:#4a4a4a;}.themes.menglv hr{height:1px;padding:0;border:none;text-align:center;background-image:linear-gradient(to right,rgba(93,186,133,0),rgba(93,186,133,0.75),rgba(93,186,133,0));}.themes.menglv img{border-radius:4px;margin-bottom:25px;}.themes.menglv figcaption{display:block;font-size:12px;font-family:PingFangSC-Light;}.themes.menglv p code,.themes.menglv li code{color:#28ca71;}.themes.menglv table tr th,.themes.menglv table tr td{font-size:14px;}.themes.menglv .footnotes{padding-top:8px;}.themes.menglv .footnote-word{color:#5ab983;}.themes.menglv .footnote-ref{color:#5ab983;}.themes.menglv .footnote-item em{color:#5ab983;font-size:13px;font-style:normal;border-bottom-color:1px dashed #5ab983;}.themes.menglv .footnote-num{color:#5ab983;}.themes.menglv .footnote-item p{color:#5ab983;font-weight:bold;}.themes.menglv .footnote-item a{color:#5dba85;}.themes.menglv .footnote-item p em{font-size:14px;font-weight:normal;border-bottom:1px dashed #5dba85;}.themes.quanzhanlan{line-height:1.25;color:#2b2b2b;font-family:Optima-Regular,Optima,PingFangTC-Light,PingFangSC-light,PingFangTC-light;letter-spacing:2px;background-image:linear-gradient(90deg,rgba(50,0,0,0.04) 3%,rgba(0,0,0,0) 3%),linear-gradient(360deg,rgba(50,0,0,0.04) 3%,rgba(0,0,0,0) 3%);background-size:20px 20px;background-position:center center;}.themes.quanzhanlan p{color:#2b2b2b;margin:10px 0px;letter-spacing:2px;font-size:14px;word-spacing:2px;}.themes.quanzhanlan h1{font-size:25px;}.themes.quanzhanlan h1 span{display:inline-block;font-weight:bold;color:#40b8fa;}.themes.quanzhanlan h2{display:block;border-bottom:4px solid #40b8fa;}.themes.quanzhanlan h2 .prefix{display:flex;width:20px;height:20px;background-size:20px 20px;background-image:url(https://imgkr.cn-bj.ufileos.com/15fdfb3c-b350-4da9-928e-5f8c506ec325.png);margin-bottom:-22px;}.themes.quanzhanlan h2 .content{display:flex;color:#40b8fa;font-size:20px;margin-left:25px;}.themes.quanzhanlan h2 .suffix{display:flex;box-sizing:border-box;width:200px;height:10px;border-top-left-radius:20px;background:rgba(64,184,250,0.5);color:#ffffff;font-size:16px;letter-spacing:0.544px;justify-content:flex-end;box-sizing:border-box !important;overflow-wrap:break-word !important;float:right;margin-top:-10px;}.themes.quanzhanlan h3{font-size:17px;font-weight:bold;text-align:center;position:relative;margin-top:20px;margin-bottom:20px;}.themes.quanzhanlan h3 .content{border-bottom:2px solid rgba(79,177,249,0.65);color:#2b2b2b;padding-bottom:2px;}.themes.quanzhanlan h3 .content:before{content:"";width:30px;height:30px;display:block;background-image:url(https://imgkr.cn-bj.ufileos.com/cdf294d0-6361-4af9-85e2-0913f0eb609b.png);background-position:center;background-size:30px;margin:auto;opacity:1;background-repeat:no-repeat;margin-bottom:-8px;}.themes.quanzhanlan h4 .content{height:16px;line-height:16px;font-size:16px;}.themes.quanzhanlan h4 .content:before{content:"";background-image:url(https://imgkr.cn-bj.ufileos.com/899e43b7-5a08-4ac6-aa00-1c45f169a65b.png);display:inline-block;height:16px;background-size:100%;background-position:left bottom;background-repeat:no-repeat;width:16px;height:15px;line-height:15px;margin-right:6px;margin-bottom:-2px;}.themes.quanzhanlan blockquote.important{text-size-adjust:100%;line-height:1.55em;font-weight:400;border-radius:6px;color:#595959;font-style:normal;text-align:left;box-sizing:inherit;border-left:none;border:1px solid rgba(64,184,250,0.4);background:rgba(64,184,250,0.1);}.themes.quanzhanlan blockquote.important::before{content:"❝";color:rgba(64,184,250,0.5);font-size:34px;line-height:1;font-weight:700;}.themes.quanzhanlan blockquote.important p{color:#595959;}.themes.quanzhanlan blockquote.important::after{content:"❞";float:right;color:rgba(64,184,250,0.5);}.themes.quanzhanlan a{color:#40b8fa;font-weight:normal;border-bottom:1px solid #3baafa;}.themes.quanzhanlan strong{color:#3594f7;font-weight:bold;}.themes.quanzhanlan strong::before{content:"「";}.themes.quanzhanlan strong::after{content:"」";}.themes.quanzhanlan em{color:#3594f7;font-weight:bold;}.themes.quanzhanlan del{color:#3594f7;}.themes.quanzhanlan hr{height:1px;padding:0;border:none;border-top:2px solid #3baafa;}.themes.quanzhanlan img{border-radius:6px;display:block;margin:20px auto;object-fit:contain;box-shadow:2px 4px 7px #999;}.themes.quanzhanlan figcaption{display:block;font-size:13px;color:#2b2b2b;}.themes.quanzhanlan figcaption:before{content:"";background-image:url(https://yanxi123.com/md2wechat/assets/images/arrow-32-32.png);display:inline-block;width:18px;height:18px;background-size:18px;background-repeat:no-repeat;background-position:center;margin-right:5px;margin-bottom:-5px;}.themes.quanzhanlan p code,.themes.quanzhanlan li code{color:#3594f7;background:rgba(59,170,250,0.1);display:inline-block;padding:0 2px;border-radius:2px;height:21px;line-height:22px;}.themes.quanzhanlan .code-snippet__fix{background:#f7f7f7;border-radius:2px;}.themes.quanzhanlan pre code{letter-spacing:0px;}.themes.quanzhanlan table tr th,.themes.quanzhanlan table tr td{font-size:14px;color:#595959;}.themes.quanzhanlan .footnotes{background:#f6eeff;padding:20px 20px 20px 20px;font-size:14px;border:0.8px solid #dec6fb;border-radius:6px;border:1px solid #dec6fb;}.themes.quanzhanlan .footnote-word{font-weight:normal;color:#595959;}.themes.quanzhanlan .footnote-ref{font-weight:normal;color:#595959;}.themes.quanzhanlan .footnote-item em{font-size:14px;color:#595959;display:block;}.themes.quanzhanlan .footnotes{background:rgba(53,148,247,0.4);padding:20px 20px 20px 20px;font-size:14px;border-radius:6px;border:1px solid #3594f7;}.themes.quanzhanlan .footnote-item p{color:#595959;font-weight:bold;}.themes.quanzhanlan .footnote-item p em{font-weight:normal;font-style:normal;}.themes.kepu{line-height:2em;letter-spacing:0.034em;color:#262626;font-size:16px;word-break:all;}.themes.kepu p{padding-top:1em;color:#262626;padding-bottom:0.1em;line-height:2em;}.themes.kepu h1{text-align:center;line-height:1.75em;margin-top:1em;margin-bottom:0;}.themes.kepu h1 .content{font-size:20px;color:#262626;}.themes.kepu h2{display:block;text-align:center;margin-top:2em;margin-bottom:0.5em;}.themes.kepu h2 .content{text-align:center;display:inline-block;line-height:1.75em;color:#fff;background-color:#a7535a;border-radius:8px 8px 0 0;padding:10px 20px;font-size:18px;}.themes.kepu h3{margin-top:1.2em;margin-bottom:0;}.themes.kepu h3 .content{font-size:17px;font-weight:bold;display:inline-block;color:#262626;}.themes.kepu h4{margin-top:1.2em;margin-bottom:0;}.themes.kepu a{color:#a7535a;text-decoration:none;border-bottom:1px solid #a7535a;}.themes.kepu strong{line-height:2em;color:#262626;}.themes.kepu hr{height:1px;padding:0;border:none;text-align:center;border-top:1px solid #eee;background-image:#eee;}.themes.kepu figcaption{display:block;font-size:12px;font-family:PingFangSC-Light;}.themes.kepu p code,.themes.kepu li code{color:#262626;}.themes.kepu table tr th,.themes.kepu table tr td{font-size:14px;}.themes.kepu .footnotes{padding-top:8px;}.themes p{font-size:16px;padding-top:8px;padding-bottom:8px;margin:0;line-height:26px;color:#262626;}.themes h1,.themes h2,.themes h3,.themes h4,.themes h5,.themes h6{margin-top:30px;margin-bottom:15px;margin-left:0;font-weight:bold;color:#262626;}.themes h1{font-size:24px;}.themes h2{font-size:22px;}.themes h3{font-size:20px;}.themes h4{font-size:18px;}.themes hr{box-sizing:content-box;height:1px;margin:0;margin-top:10px;margin-bottom:10px;border:none;border-top:1px solid rgba(0,0,0);}.themes strong{font-weight:bold;}.themes em{font-style:italic;color:#262626;}.themes figure{margin:0;margin-top:10px;margin-bottom:10px;}.themes figure img{display:block;margin:0 auto;width:auto;max-width:100%;}.themes figure figcaption{margin-top:5px;text-align:center;color:#888;font-size:14px;}.themes blockquote{display:block;font-size:0.9em;overflow:auto;border-left:3px solid rgba(0,0,0,0.4);background:rgba(0,0,0,0.05);color:#6a737d;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:10px;margin-bottom:20px;margin-top:20px;}.themes blockquote.important p{margin:0px;color:#262626;line-height:26px;}.themes a{text-decoration:none;color:#1e6bb8;word-wrap:break-word;font-weight:bold;border-bottom:1px solid #1e6bb8;}.themes .footnote-word{color:#1e6bb8;font-weight:bold;}.themes .footnote-ref{color:#1e6bb8;font-weight:bold;font-size:75%;}.themes .ol,.themes .ul{margin-top:8px;margin-bottom:8px;padding-left:8px;padding-right:8px;color:#262626;}.themes .listitem{margin-top:5px;margin-bottom:5px;line-height:26px;text-align:left;color:#010101;font-weight:500;text-indent:0;display:block;}.themes table{border-collapse:collapse;display:table;text-align:left;}.themes table thead tr td{font-weight:bold;background-color:#f0f0f0;}.themes table tr{border:0;border-top:1px solid #ccc;background-color:white;}.themes table tr:nth-child(2n){background-color:#f8f8f8;}.themes table tr td{font-size:16px;border:1px solid #ccc;padding:5px 10px;text-align:left;}.themes p code,.themes li code{font-size:14px;word-wrap:break-word;padding:2px 4px;border-radius:4px;margin:0 2px;color:#1e6bb8;background-color:rgba(27,31,35,0.05);font-family:Operator Mono,Consolas,Monaco,Menlo,monospace;word-break:break-all;}.themes .code-snippet__fix{word-wrap:break-word !important;font-size:14px;margin:10px 0;display:block;color:#333;position:relative;background-color:rgba(0,0,0,0.03);border:1px solid #f0f0f0;border-radius:2px;display:flex;line-height:20px;}.themes .footnote-item{display:flex;}.themes .footnote-item .footnote-num{display:inline;flex:1;background:none;font-size:80%;opacity:0.6;line-height:26px;font-family:ptima-Regular,Optima,PingFangSC-light,PingFangTC-light,"PingFang SC",Cambria,Cochin,Georgia,Times,"Times New Roman",serif;}.themes .footnote-item p{display:inline;font-size:14px;flex:10;padding:0px;margin:0;line-height:26px;color:#262626;word-break:break-all;}.themes.fonts-no-cx{font-family:Roboto,Oxygen,Ubuntu,Cantarell,PingFangSC-light,PingFangTC-light,"Open Sans","Helvetica Neue",sans-serif;}.themes.fonts-cx{font-family:Optima-Regular,Optima,PingFangSC-light,PingFangTC-light,"PingFang SC",Cambria,Cochin,Georgia,Times,"Times New Roman",serif;}`;
//===========CSS============

//===========FuriganaMD=========
let FuriganaMD = function() {
    function escapeForRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    function emptyStringFilter(block) {
        return block !== "";
    }

    const kanjiRange = "\\u4e00-\\u9faf";
    const kanjiBlockRegex = new RegExp(`[${kanjiRange}]+`, "g");
    const nonKanjiBlockRegex = new RegExp(`[^${kanjiRange}]+`, "g");
    const kanaWithAnnotations =
        "\\u3041-\\u3095\\u3099-\\u309c\\u3081-\\u30fa\\u30fc";
    const furiganaSeperators = ".．。・";
    const seperatorRegex = new RegExp(`[${furiganaSeperators}]`, "g");

    const singleKanjiRegex = new RegExp(`^[${kanjiRange}]$`);

    function isKanji(character) {
        return character.match(singleKanjiRegex);
    }

    const innerRegexString = "(?:[^\\u0000-\\u007F]|\\w)+";

    let regexList = [];
    let previousFuriganaForms = "";

    function updateRegexList(furiganaForms) {
        previousFuriganaForms = furiganaForms;
        let formArray = furiganaForms.split("|");
        if (formArray.length === 0) {
            formArray = ["[]:^:()"];
        }
        regexList = formArray.map((form) => {
            let furiganaComponents = form.split(":");
            if (furiganaComponents.length !== 3) {
                furiganaComponents = ["[]", "^", "()"];
            }
            const mainBrackets = furiganaComponents[0];
            const seperator = furiganaComponents[1];
            const furiganaBrackets = furiganaComponents[2];
            return new RegExp(
                escapeForRegex(mainBrackets[0]) +
                "(" +
                innerRegexString +
                ")" +
                escapeForRegex(mainBrackets[1]) +
                escapeForRegex(seperator) +
                escapeForRegex(furiganaBrackets[0]) +
                "(" +
                innerRegexString +
                ")" +
                escapeForRegex(furiganaBrackets[1]),
                "g"
            );
        });
    }

    let autoRegexList = [];
    let previousAutoBracketSets = "";

    function updateAutoRegexList(autoBracketSets) {
        previousAutoBracketSets = autoBracketSets;
        autoRegexList = autoBracketSets.split("|").map((brackets) => {
            /*
                          Sample built regex:
                          /(^|[^\u4e00-\u9faf]|)([\u4e00-\u9faf]+)([\u3041-\u3095\u3099-\u309c\u3081-\u30fa\u30fc]*)【((?:[^【】\u4e00-\u9faf]|w)+)】/g
                        */
            return new RegExp(
                `(^|[^${kanjiRange}]|)` +
                `([${kanjiRange}]+)` +
                `([${kanaWithAnnotations}]*)` +
                escapeForRegex(brackets[0]) +
                `((?:[^${escapeForRegex(
            brackets
          )}\\u0000-\\u007F]|\\w|[${furiganaSeperators}])+)` +
                escapeForRegex(brackets[1]),
                "g"
            );
        });
    }

    let replacementTemplate = "";
    let replacementBrackets = "";

    function updateReplacementTemplate(furiganaFallbackBrackets) {
        if (furiganaFallbackBrackets.length !== 2) {
            furiganaFallbackBrackets = "【】";
        }
        replacementBrackets = furiganaFallbackBrackets;
        replacementTemplate = `<ruby>$1<rp>${furiganaFallbackBrackets[0]}</rp><rt style="line-height:1;font-size:10px;">$2</rt><rp>${furiganaFallbackBrackets[1]}</rp></ruby>`;
    }

    updateReplacementTemplate("【】");

    function addFurigana(text, options) {
        if (options.furiganaForms !== previousFuriganaForms) {
            updateRegexList(options.furiganaForms);
        }
        if (options.furiganaFallbackBrackets !== replacementBrackets) {
            updateReplacementTemplate(options.furiganaFallbackBrackets);
        }
        regexList.forEach((regex) => {
            text = text.replace(
                regex,
                (match, wordText, furiganaText, offset, mainText) => {
                    if (match.indexOf("\\") === -1 && mainText[offset - 1] !== "\\") {
                        if (!options.furiganaPatternMatching ||
                            wordText.search(kanjiBlockRegex) === -1 ||
                            wordText[0].search(kanjiBlockRegex) === -1
                        ) {
                            return replacementTemplate
                                .replace("$1", wordText)
                                .replace("$2", furiganaText);
                        } else {
                            let originalFuriganaText = (" " + furiganaText).slice(1);
                            let nonKanji = wordText
                                .split(kanjiBlockRegex)
                                .filter(emptyStringFilter);
                            let kanji = wordText
                                .split(nonKanjiBlockRegex)
                                .filter(emptyStringFilter);
                            let replacementText = "";
                            let lastUsedKanjiIndex = 0;
                            if (nonKanji.length === 0) {
                                return replacementTemplate
                                    .replace("$1", wordText)
                                    .replace("$2", furiganaText);
                            }

                            nonKanji.forEach((currentNonKanji, index) => {
                                if (furiganaText === undefined) {
                                    if (index < kanji.length) {
                                        replacementText += kanji[index];
                                    }

                                    replacementText += currentNonKanji;
                                    return;
                                }
                                let splitFurigana = furiganaText
                                    .split(new RegExp(escapeForRegex(currentNonKanji) + "(.*)"))
                                    .filter(emptyStringFilter);

                                lastUsedKanjiIndex = index;
                                replacementText += replacementTemplate
                                    .replace("$1", kanji[index])
                                    .replace("$2", splitFurigana[0]);
                                replacementText += currentNonKanji;

                                furiganaText = splitFurigana[1];
                            });
                            if (
                                furiganaText !== undefined &&
                                lastUsedKanjiIndex + 1 < kanji.length
                            ) {
                                replacementText += replacementTemplate
                                    .replace("$1", kanji[lastUsedKanjiIndex + 1])
                                    .replace("$2", furiganaText);
                            } else if (furiganaText !== undefined) {
                                return replacementTemplate
                                    .replace("$1", wordText)
                                    .replace("$2", originalFuriganaText);
                            } else if (lastUsedKanjiIndex + 1 < kanji.length) {
                                replacementText += kanji[lastUsedKanjiIndex + 1];
                            }
                            return replacementText;
                        }
                    } else {
                        return match;
                    }
                }
            );
        });

        if (!options.furiganaStrictMode) {
            if (options.furiganaAutoBracketSets !== previousAutoBracketSets) {
                updateAutoRegexList(options.furiganaAutoBracketSets);
            }
            autoRegexList.forEach((regex) => {
                text = text.replace(
                    regex,
                    (
                        match,
                        preWordTerminator,
                        wordKanji,
                        wordKanaSuffix,
                        furiganaText,
                        offset,
                        mainText
                    ) => {
                        if (match.indexOf("\\") === -1) {
                            if (options.furiganaPatternMatching) {
                                let rubies = [];

                                let furigana = furiganaText;

                                let stem = (" " + wordKanaSuffix).slice(1);
                                for (let i = furiganaText.length - 1; i >= 0; i--) {
                                    if (wordKanaSuffix.length === 0) {
                                        furigana = furiganaText.substring(0, i + 1);
                                        break;
                                    }
                                    if (furiganaText[i] !== wordKanaSuffix.slice(-1)) {
                                        furigana = furiganaText.substring(0, i + 1);
                                        break;
                                    }
                                    wordKanaSuffix = wordKanaSuffix.slice(0, -1);
                                }

                                if (
                                    furiganaSeperators
                                    .split("")
                                    .reduce((noSeperator, seperator) => {
                                        return noSeperator && furigana.indexOf(seperator) === -1;
                                    }, true)
                                ) {
                                    rubies = [
                                        replacementTemplate
                                        .replace("$1", wordKanji)
                                        .replace("$2", furigana),
                                    ];
                                } else {
                                    let kanaParts = furigana.split(seperatorRegex);
                                    let kanji = wordKanji.split("");
                                    if (
                                        kanaParts.length === 0 ||
                                        kanaParts.length > kanji.length
                                    ) {
                                        rubies = [
                                            replacementTemplate
                                            .replace("$1", wordKanji)
                                            .replace("$2", furigana),
                                        ];
                                    } else {
                                        for (let i = 0; i < kanaParts.length - 1; i++) {
                                            if (kanji.length === 0) {
                                                break;
                                            }
                                            rubies.push(
                                                replacementTemplate
                                                .replace("$1", kanji.shift())
                                                .replace("$2", kanaParts[i])
                                            );
                                        }
                                        let lastKanaPart = kanaParts.pop();
                                        rubies.push(
                                            replacementTemplate
                                            .replace("$1", kanji.join(""))
                                            .replace("$2", lastKanaPart)
                                        );
                                    }
                                }

                                return preWordTerminator + rubies.join("") + stem;
                            } else {
                                return (
                                    preWordTerminator +
                                    replacementTemplate
                                    .replace("$1", wordKanji)
                                    .replace("$2", furiganaText) +
                                    wordKanaSuffix
                                );
                            }
                        } else {
                            return match;
                        }
                    }
                );
            });
        }
        return text;
    }

    function handleEscapedSpecialBrackets(text) {
        // By default 【 and 】 cannot be escaped in markdown, this will remove backslashes from in front of them to give that effect.
        return text.replace(/\\([【】])/g, "$1");
    }

    function register(renderer) {
        renderer.text = function(text) {
            let options = {
                furigana: true,
                furiganaForms: "()::{}",
                furiganaFallbackBrackets: "{}",
                furiganaStrictMode: false,
                furiganaAutoBracketSets: "{}",
                furiganaPatternMatching: true,
            };
            // console.log('override text render',text);
            // console.log('after add',addFurigana(text, options));
            return handleEscapedSpecialBrackets(addFurigana(text, options));
        };
    }
};

//==========FuriganaMD==============
let furiganaMD = new FuriganaMD();

//=================WXRENDER===============

let WxRenderer = function() {
    let ENV_USE_REFERENCES = true;

    let footnotes = [];
    let footnoteIndex = 0;

    let addFootnote = function(title, link) {
        footnoteIndex += 1;
        footnotes.push([footnoteIndex, title, link]);
        return footnoteIndex;
    };

    this.buildFootnotes = function() {
        let footnoteArray = footnotes.map(function(x) {
            return `<section class="footnote-item"><span class="footnote-num">[${x[0]}] </span><p>${x[1]}: <em>${x[2]}</em></p></section>`;
        });
        return `<h3><span class="prefix"></span><span class="content">本文内链接</span><span class="suffix"></span></h3><section class="footnotes">${footnoteArray.join(
      "\n"
    )}</section>`;
    };

    this.buildAddition = function() {
        return (
            "<style>.preview-wrapper pre::before{" +
            'font-family:"SourceSansPro","HelveticaNeue",Arial,sans-serif;' +
            "position:absolute;" +
            "top:0;" +
            "right:0;" +
            "color:#ccc;" +
            "text-align:right;" +
            "font-size:0.8em;" +
            "padding:5px10px0;" +
            "line-height:15px;" +
            "height:15px;" +
            "font-weight:600;" +
            "}</style>"
        );
    };

    this.hasFootnotes = function() {
        return footnotes.length !== 0;
    };

    this.getRenderer = function() {
        footnotes = [];
        footnoteIndex = 0;

        let renderer = new marked.Renderer();
        // furiganaMD.register(renderer);

        renderer.heading = function(text, level) {
            switch (level) {
                case 1:
                    return `<h1><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h1>`;
                case 2:
                    return `<h2><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h2>`;
                case 3:
                    return `<h3><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h3>`;
                default:
                    return `<h4><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h4>`;
            }
        };
        renderer.paragraph = function(text) {
            if (text.indexOf("<figure>") === 0) {
                return text;
            }
            return `<p>${text}</p>`;
        };
        renderer.blockquote = function(text) {
            return `<blockquote class="important">${text}</blockquote>`;
        };
        renderer.code = function(text, infoString) {
            text = text.replace(/</g, "&lt;");
            text = text.replace(/>/g, "&gt;");

            let lines = text.split("\n");
            let codeLines = [];
            let numbers = [];
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                codeLines.push(
                    `<code class="prettyprint"><span class="code-snippet_outer">${
            line || "<br>"
          }</span></code>`
                );
                numbers.push("<li></li>");
            }
            let lang = infoString || "";
            return (
                `<section class="code-snippet__fix code-snippet__js">` +
                `<ul class="code-snippet__line-index code-snippet__js">${numbers.join(
          ""
        )}</ul>` +
                `<pre class="code-snippet__js" data-lang="${lang}">` +
                codeLines.join("") +
                `</pre></section>`
            );
        };
        renderer.codespan = function(text, infoString) {
            return `<code>${text}</code>`;
        };
        renderer.listitem = function(text) {
            return `<span class="listitem"><span style="margin-right: 6px;"><%s/></span>${text}</span>`;
        };
        renderer.list = function(text, ordered, start) {
            text = text.replace(/<\/*p.*?>/g, "");
            let segments = text.split(`<%s/>`);
            if (!ordered) {
                text = segments.join("•");
                return `<section class="ul">${text}</section>`;
            }
            text = segments[0];
            for (let i = 1; i < segments.length; i++) {
                text = text + i + "." + segments[i];
            }
            return `<section class="ol">${text}</section>`;
        };
        renderer.image = function(href, title, text) {
            const subText = `<figcaption>${text}</figcaption>`;

            return `<figure><img class="image" src="${href}" title="${title}" alt="${text}"/>${subText}</figure>`;
        };
        renderer.link = function(href, title, text) {
            if (href.indexOf("https://mp.weixin.qq.com") === 0) {
                return `<a href="${href}" title="${
          title || text
        }" target="_blank">${text}</a>`;
            } else if (href.indexOf("#") === 0) {
                // 微信公众号不支持锚链接 @2024-09-18
                return text;
            } else if (href === text && !title) {
                return `<span class="footnote-word">${text}</span>`;
            } else {
                if (ENV_USE_REFERENCES) {
                    let ref = addFootnote(title || text, href);
                    return `<span class="footnote-word">${text}<sup class="footnote-ref">[${ref}]</sup></span>`;
                } else {
                    return `<a href="${href}" title="${title || text}">${text}</a>`;
                }
            }
        };
        renderer.strong = function(text) {
            return `<strong>${text}</strong>`;
        };
        renderer.em = function(text) {
            return `<em>${text}</em>`;
        };
        renderer.table = function(header, body) {
            return `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
        };
        renderer.tablecell = function(text, flags) {
            return `<td>${text}</td>`;
        };
        renderer.hr = function() {
            return `<hr />`;
        };
        return renderer;
    };
};

//=================WXRENDER===============

const wxRenderer = new WxRenderer();

function renderWeChat(source) {
    let output = marked(source, { renderer: wxRenderer.getRenderer() });
    if (wxRenderer.hasFootnotes()) {
        // 去除第一行的 margin-top
        output = output.replace(/(style=".*?)"/, '$1;margin-top: 0"');
        // 引用注脚
        output += wxRenderer.buildFootnotes();
        // 附加的一些 style
        output += wxRenderer.buildAddition();
    }
    return output;
}

const out = { data: "" };
async function handler(input) {
    const originHtml = `<section id="output" class="themes ${
    input.theme ?? "kepu"
  } fonts-${input.fonts ?? "no-cx"}">${renderWeChat(input.markdown)}</section>`;
    const html = await inlineCss(originHtml, {
        url: "https://wx.hxledu.com",
        extraCss: allCss,
    }).catch((error) => {
        console.log(error);
    });

    if (html) {
        console.log("\n\n======== html===== \n\n");
        console.log(html);

        console.log("\n\n======== html===== \n\n");
        out.data = html;
    }
    return out;
}

function main() {
    let input = {
        theme: "kepu",
        markdown: `# 养肝我不用逍遥丸，这个中成药更好，既能疏肝又能清肝，一石二鸟！\n\n大家好，我是你们的健康科普小助手。今天咱们来聊聊养肝这个话题。说到养肝，很多人第一时间想到的就是逍遥丸。没错，逍遥丸确实是疏肝解郁的经典药物，但今天我要给大家推荐一个更“全能”的中成药，它不仅能疏肝，还能清肝，真正做到“一石二鸟”！想知道是啥吗？别急，听我慢慢道来。\n\n## 一、肝的重要性：别小看它，它可是“将军之官”\n\n首先，咱们得先明白肝在身体里的重要性。中医里常说“肝为将军之官”，意思是肝就像军队里的将军，负责指挥全身的气血运行。肝气顺畅，身体就健康；肝气郁结，各种问题就来了。\n\n现代人生活节奏快，压力大，情绪波动频繁，肝气郁结的情况非常普遍。肝气郁结的表现有很多，比如情绪低落、胸闷、胁肋胀痛、食欲不振、失眠多梦等。长期肝气郁结，还可能导致更严重的健康问题，比如高血压、脂肪肝、乳腺增生等。\n\n所以，养肝不仅仅是中老年人的事，年轻人也得重视起来！\n\n## 二、逍遥丸的局限性：疏肝有余，清肝不足\n\n说到养肝，很多人会想到逍遥丸。逍遥丸确实是疏肝解郁的经典药物，它的主要成分是柴胡、白芍、当归、白术、茯苓、甘草等，能够疏肝理气、健脾养血，对于肝气郁结引起的情绪低落、胸闷、胁肋胀痛等症状有很好的缓解作用。\n\n但是，逍遥丸也有它的局限性。它主要是疏肝解郁，对于肝火旺盛、肝热上扰的情况，效果就不太明显了。现代人生活压力大，情绪波动频繁，肝气郁结的同时，往往还伴随着肝火旺盛的表现，比如口干口苦、眼睛干涩、头痛、易怒等。这时候，单纯用逍遥丸就显得“力不从心”了。\n\n## 三、推荐中成药：既能疏肝又能清肝，一石二鸟！\n\n那么，有没有一种中成药，既能疏肝解郁，又能清肝泻火呢？答案是肯定的！今天我要给大家推荐的就是——**丹栀逍遥丸**！\n\n丹栀逍遥丸是在逍遥丸的基础上，加入了丹皮和栀子两味药。丹皮和栀子都是清热泻火的良药，能够清肝泻火、凉血解毒。这样一来，丹栀逍遥丸不仅保留了逍遥丸疏肝解郁的功效，还能清肝泻火，真正做到“一石二鸟”！\n\n### 1. 丹栀逍遥丸的成分与功效\n\n- **柴胡**：疏肝解郁，升举阳气。\n- **白芍**：养血柔肝，缓急止痛。\n- **当归**：补血活血，调经止痛。\n- **白术**：健脾益气，燥湿利水。\n- **茯苓**：健脾渗湿，宁心安神。\n- **甘草**：调和诸药，缓急止痛。\n- **丹皮**：清热凉血，活血化瘀。\n- **栀子**：清热泻火，凉血解毒。\n\n### 2. 丹栀逍遥丸的适用人群\n\n丹栀逍遥丸适用于以下人群：\n\n- **肝气郁结**：情绪低落、胸闷、胁肋胀痛、食欲不振、失眠多梦等。\n- **肝火旺盛**：口干口苦、眼睛干涩、头痛、易怒、便秘等。\n- **肝郁化火**：情绪波动大，容易发火，伴有上述症状。\n\n### 3. 丹栀逍遥丸的使用注意事项\n\n- **孕妇慎用**：丹栀逍遥丸中的丹皮和栀子有活血化瘀的作用，孕妇慎用。\n- **脾胃虚寒者慎用**：丹栀逍遥丸中的栀子性寒，脾胃虚寒者慎用，以免加重脾胃不适。\n- **服药期间忌辛辣油腻**：服药期间应避免食用辛辣、油腻食物，以免影响药效。\n\n## 四、养肝小贴士：除了吃药，生活调理也很重要\n\n当然，养肝不仅仅是靠吃药，生活调理也很重要。以下是一些养肝小贴士，大家可以根据自己的情况参考：\n\n### 1. 保持心情舒畅\n\n情绪波动是导致肝气郁结的主要原因之一。平时要注意调节情绪，保持心情舒畅。可以多参加一些户外活动，比如散步、打太极等，放松心情。\n\n### 2. 合理饮食\n\n饮食上要清淡，避免辛辣、油腻食物。可以多吃一些养肝的食物，比如枸杞、菊花、决明子、绿豆等。\n\n### 3. 规律作息\n\n熬夜伤肝，平时要注意规律作息，保证充足的睡眠。晚上11点到凌晨3点是肝经当令的时间，这段时间最好能进入深度睡眠状态。\n\n### 4. 适量运动\n\n适量运动有助于疏肝解郁，促进气血运行。可以选择一些适合自己的运动方式，比如散步、瑜伽、太极等。\n\n### 5. 按摩穴位\n\n平时可以多按摩一些养肝的穴位，比如太冲穴、肝俞穴等。太冲穴位于足背，第一、二跖骨结合部前方凹陷处，按摩太冲穴有助于疏肝解郁。\n\n## 五、总结\n\n养肝是一个长期的过程，需要我们在生活中多加注意。丹栀逍遥丸作为一种既能疏肝又能清肝的中成药，对于肝气郁结、肝火旺盛的人群来说，是一个不错的选择。当然，养肝不仅仅是靠吃药，生活调理也很重要。希望大家都能拥有一个健康的肝脏，身体倍儿棒，心情倍儿好！\n\n好了，今天的健康科普就到这里。如果你觉得这篇文章对你有帮助，别忘了点赞、转发哦！我们下期再见！\n\n---\n\n**温馨提示**：本文仅供参考，具体用药请在医生指导下进行。`,
        fonts: "no-cx",
    };

    handler(input);
}

main();