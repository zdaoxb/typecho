/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'sojson.v5', glbhr = '__0x8225c',  __0x8225c=['w6bDrxfCkgt3wpZyCw==','ACJpSXA=','w50cwpDChsKL','ZBXCksOJBz3Cgw==','wp7Cr8KqXE0u','w7TDr8O2woI6w7U=','w47ClcK5w4bDj8OLw5LCpsK4w7MxWMKbXw==','bcK9HQ==','cRXCkMO4GiXCg8KS','NsKveA==','wqfChcK8X1rCgWHDhsKR','wp7CpcKhXUEoAxIE','54me5p2c5YyT776gHz3kv7zlrabmnb7lvYznqorvvJvovbPorKfml4HmjoPmiK/kubznm7Plt6jkvqA=','5Yi26ZiU54qs5p6A5Y6C772CwozCj+S9u+Wvr+acguW8rueovA==','F8KNZ8OhVA==','w77DiMOqwqwc','wr5kwpJ/Ew==','w7nDoCvDoMKI','wqnDpBBXw4A=','w4p3RxbDpQ=='];(function(_0x59240d,_0xc6c17e){var _0x47f40b=function(_0x163367){while(--_0x163367){_0x59240d['push'](_0x59240d['shift']());}};_0x47f40b(++_0xc6c17e);}(__0x8225c,0x78));var _0x426d=function(_0x479c1e,_0x5b98de){_0x479c1e=_0x479c1e-0x0;var _0x427d48=__0x8225c[_0x479c1e];if(_0x426d['initialized']===undefined){(function(){var _0x29258a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2fb196='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x29258a['atob']||(_0x29258a['atob']=function(_0x347a17){var _0x903a1f=String(_0x347a17)['replace'](/=+$/,'');for(var _0x3a6bef=0x0,_0x1f9881,_0x212f33,_0x5a5c68=0x0,_0x14e679='';_0x212f33=_0x903a1f['charAt'](_0x5a5c68++);~_0x212f33&&(_0x1f9881=_0x3a6bef%0x4?_0x1f9881*0x40+_0x212f33:_0x212f33,_0x3a6bef++%0x4)?_0x14e679+=String['fromCharCode'](0xff&_0x1f9881>>(-0x2*_0x3a6bef&0x6)):0x0){_0x212f33=_0x2fb196['indexOf'](_0x212f33);}return _0x14e679;});}());var _0x37d846=function(_0x49786d,_0x519fe4){var _0xdd199=[],_0x2db1cb=0x0,_0x2749a8,_0x500325='',_0x3bd0fd='';_0x49786d=atob(_0x49786d);for(var _0x48aa0d=0x0,_0x5a5084=_0x49786d['length'];_0x48aa0d<_0x5a5084;_0x48aa0d++){_0x3bd0fd+='%'+('00'+_0x49786d['charCodeAt'](_0x48aa0d)['toString'](0x10))['slice'](-0x2);}_0x49786d=decodeURIComponent(_0x3bd0fd);for(var _0x44ecc8=0x0;_0x44ecc8<0x100;_0x44ecc8++){_0xdd199[_0x44ecc8]=_0x44ecc8;}for(_0x44ecc8=0x0;_0x44ecc8<0x100;_0x44ecc8++){_0x2db1cb=(_0x2db1cb+_0xdd199[_0x44ecc8]+_0x519fe4['charCodeAt'](_0x44ecc8%_0x519fe4['length']))%0x100;_0x2749a8=_0xdd199[_0x44ecc8];_0xdd199[_0x44ecc8]=_0xdd199[_0x2db1cb];_0xdd199[_0x2db1cb]=_0x2749a8;}_0x44ecc8=0x0;_0x2db1cb=0x0;for(var _0x34d4c7=0x0;_0x34d4c7<_0x49786d['length'];_0x34d4c7++){_0x44ecc8=(_0x44ecc8+0x1)%0x100;_0x2db1cb=(_0x2db1cb+_0xdd199[_0x44ecc8])%0x100;_0x2749a8=_0xdd199[_0x44ecc8];_0xdd199[_0x44ecc8]=_0xdd199[_0x2db1cb];_0xdd199[_0x2db1cb]=_0x2749a8;_0x500325+=String['fromCharCode'](_0x49786d['charCodeAt'](_0x34d4c7)^_0xdd199[(_0xdd199[_0x44ecc8]+_0xdd199[_0x2db1cb])%0x100]);}return _0x500325;};_0x426d['rc4']=_0x37d846;_0x426d['data']={};_0x426d['initialized']=!![];}var _0x49961c=_0x426d['data'][_0x479c1e];if(_0x49961c===undefined){if(_0x426d['once']===undefined){_0x426d['once']=!![];}_0x427d48=_0x426d['rc4'](_0x427d48,_0x5b98de);_0x426d['data'][_0x479c1e]=_0x427d48;}else{_0x427d48=_0x49961c;}return _0x427d48;};;;try{var _0xa7482e=_0x426d('0x0','pPCl')['split']('|'),_0x29d4e6=0x0;while(!![]){switch(_0xa7482e[_0x29d4e6++]){case'0':var _0x4b01f2=document[_0x1ac53f[0x0]];continue;case'1':var _0x803fbb=function(_0x3d383d,_0x3bfce4){var _0x36d9d6={'VlCsK':function _0x36e1e7(_0x183476,_0x5daa2c){return _0x183476===_0x5daa2c;},'ihEdk':function _0x65a354(_0x284bcf,_0x13f840){return _0x284bcf(_0x13f840);}};return _0x36d9d6['VlCsK'](_0x36d9d6[_0x426d('0x1','qg!G')](_0x13787f,_0x3d383d)[_0x1ac53f[0x4]](_0x3bfce4),0x0);};continue;case'2':var _0x1ac53f=['domain',_0x426d('0x2','F0mD'),_0x426d('0x3','AS1o'),'join',_0x426d('0x4','2zRy'),'hr'+'ef',_0x426d('0x5','3cCX'),!0x0];continue;case'3':if(!_0x803fbb(_0x4b01f2,_0x426d('0x6',')wno'))){while(_0x1ac53f[0x7]){location[_0x1ac53f[0x5]]=location[_0x1ac53f[0x5]]+'?'+Math[_0x1ac53f[0x6]]();}}continue;case'4':var _0x13787f=function(_0x3f7efa){return _0x3f7efa[_0x1ac53f[0x1]]('')[_0x1ac53f[0x2]]()[_0x1ac53f[0x3]]('');};continue;}break;}}catch(_0x1faacc){console[_0x426d('0x7','n5fx')](_0x1faacc);};;$(function(){baiduAudio[_0x426d('0x8','AS1o')]();})();;(function(_0x7abdf1,_0x545e67,_0x481a89){var _0x450ad7={'DPkvJ':_0x426d('0x9','%EA^'),'xFrJI':function _0x31c04f(_0x3f10a8,_0x217a45){return _0x3f10a8!==_0x217a45;},'yScGb':_0x426d('0xa','veU#'),'roizJ':function _0x4805ac(_0x5c4970,_0xec7449){return _0x5c4970===_0xec7449;},'JWyQt':_0x426d('0xb','2zRy'),'Iddbp':function _0x234c01(_0x2ecac7,_0x10610a){return _0x2ecac7+_0x10610a;},'VlWSl':_0x426d('0xc','AS1o'),'bpOvC':_0x426d('0xd','AS1o')};_0x481a89='al';try{_0x481a89+=_0x450ad7[_0x426d('0xe','%EA^')];_0x545e67=encode_version;if(!(_0x450ad7[_0x426d('0xf','3cCX')](typeof _0x545e67,_0x450ad7['yScGb'])&&_0x450ad7[_0x426d('0x10','tWeH')](_0x545e67,_0x450ad7[_0x426d('0x11','AKv$')]))){_0x7abdf1[_0x481a89](_0x450ad7['Iddbp']('删除',_0x450ad7[_0x426d('0x12','OtSD')]));}}catch(_0x55b867){_0x7abdf1[_0x481a89](_0x450ad7[_0x426d('0x13','ySCP')]);}}(window));;encode_version = 'sojson.v5';