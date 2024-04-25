// POST
// gnex4bkk
// 1711805323515
const CryptoJS = require("crypto-js");
const axios = require('axios');
const sharp = require('sharp');
const Jimp = require('jimp');
const  Holidays   = require('date-holidays');
const { createWorker } = require('tesseract.js');
  var n = {
      utf8: {
          stringToBytes: function(t) {
              return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
          },
          bytesToString: function(t) {
              return decodeURIComponent(escape(n.bin.bytesToString(t)))
          }
      },
      bin: {
          stringToBytes: function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                  e.push(255 & t.charCodeAt(n));
              return e
          },
          bytesToString: function(t) {
              for (var e = [], n = 0; n < t.length; n++)
                  e.push(String.fromCharCode(t[n]));
              return e.join("")
          }
      }
  };
 var r = {
    rotl: function(t, e) {
        return t << e | t >>> 32 - e
    },
    rotr: function(t, e) {
        return t << 32 - e | t >>> e
    },
    endian: function(t) {
        if (t.constructor == Number)
            return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
        for (var e = 0; e < t.length; e++)
            t[e] = r.endian(t[e]);
        return t
    },
    randomBytes: function(t) {
        for (var e = []; t > 0; t--)
            e.push(Math.floor(256 * Math.random()));
        return e
    },
    bytesToWords: function(t) {
        for (var e = [], n = 0, r = 0; n < t.length; n++,
        r += 8)
            e[r >>> 5] |= t[n] << 24 - r % 32;
        return e
    },
    wordsToBytes: function(t) {
        for (var e = [], n = 0; n < 32 * t.length; n += 8)
            e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
        return e
    },
    bytesToHex: function(t) {
        for (var e = [], n = 0; n < t.length; n++)
            e.push((t[n] >>> 4).toString(16)),
            e.push((15 & t[n]).toString(16));
        return e.join("")
    },
    hexToBytes: function(t) {
        for (var e = [], n = 0; n < t.length; n += 2)
            e.push(parseInt(t.substr(n, 2), 16));
        return e
    },
    bytesToBase64: function(t) {
        for (var e = [], r = 0; r < t.length; r += 3)
            for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++)
                8 * r + 6 * i <= 8 * t.length ? e.push(n.charAt(o >>> 6 * (3 - i) & 63)) : e.push("=");
        return e.join("")
    },
    base64ToBytes: function(t) {
        t = t.replace(/[^A-Z0-9+\/]/gi, "");
        for (var e = [], r = 0, o = 0; r < t.length; o = ++r % 4)
            0 != o && e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(t.charAt(r)) >>> 6 - 2 * o);
        return e
    }
}
const o = n.utf8;
const c = function(t, e) {
  t.constructor == String ? t = e && "binary" === e.encoding ? a.stringToBytes(t) : o.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
  for (var n = r.bytesToWords(t), u = 8 * t.length, s = 1732584193, l = -271733879, f = -1732584194, p = 271733878, d = 0; d < n.length; d++)
      n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);
  n[u >>> 5] |= 128 << u % 32,
  n[14 + (u + 64 >>> 9 << 4)] = u;
  var v =  function(t, e, n, r, o, i, a) {
    var c = t + (e & n | ~e & r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + e
  }
    var h = function(t, e, n, r, o, i, a) {
      var c = t + (e & r | n & ~r) + (o >>> 0) + a;
      return (c << i | c >>> 32 - i) + e
  }
   var g = function(t, e, n, r, o, i, a) {
    var c = t + (e ^ n ^ r) + (o >>> 0) + a;
    return (c << i | c >>> 32 - i) + e
 }
   var m = function(t, e, n, r, o, i, a) {
      var c = t + (n ^ (e | ~r)) + (o >>> 0) + a;
      return (c << i | c >>> 32 - i) + e
  }
  for (d = 0; d < n.length; d += 16) {
      var y = s
        , b = l
        , w = f
        , _ = p;
      s = v(s, l, f, p, n[d + 0], 7, -680876936),
      p = v(p, s, l, f, n[d + 1], 12, -389564586),
      f = v(f, p, s, l, n[d + 2], 17, 606105819),
      l = v(l, f, p, s, n[d + 3], 22, -1044525330),
      s = v(s, l, f, p, n[d + 4], 7, -176418897),
      p = v(p, s, l, f, n[d + 5], 12, 1200080426),
      f = v(f, p, s, l, n[d + 6], 17, -1473231341),
      l = v(l, f, p, s, n[d + 7], 22, -45705983),
      s = v(s, l, f, p, n[d + 8], 7, 1770035416),
      p = v(p, s, l, f, n[d + 9], 12, -1958414417),
      f = v(f, p, s, l, n[d + 10], 17, -42063),
      l = v(l, f, p, s, n[d + 11], 22, -1990404162),
      s = v(s, l, f, p, n[d + 12], 7, 1804603682),
      p = v(p, s, l, f, n[d + 13], 12, -40341101),
      f = v(f, p, s, l, n[d + 14], 17, -1502002290),
      s = h(s, l = v(l, f, p, s, n[d + 15], 22, 1236535329), f, p, n[d + 1], 5, -165796510),
      p = h(p, s, l, f, n[d + 6], 9, -1069501632),
      f = h(f, p, s, l, n[d + 11], 14, 643717713),
      l = h(l, f, p, s, n[d + 0], 20, -373897302),
      s = h(s, l, f, p, n[d + 5], 5, -701558691),
      p = h(p, s, l, f, n[d + 10], 9, 38016083),
      f = h(f, p, s, l, n[d + 15], 14, -660478335),
      l = h(l, f, p, s, n[d + 4], 20, -405537848),
      s = h(s, l, f, p, n[d + 9], 5, 568446438),
      p = h(p, s, l, f, n[d + 14], 9, -1019803690),
      f = h(f, p, s, l, n[d + 3], 14, -187363961),
      l = h(l, f, p, s, n[d + 8], 20, 1163531501),
      s = h(s, l, f, p, n[d + 13], 5, -1444681467),
      p = h(p, s, l, f, n[d + 2], 9, -51403784),
      f = h(f, p, s, l, n[d + 7], 14, 1735328473),
      s = g(s, l = h(l, f, p, s, n[d + 12], 20, -1926607734), f, p, n[d + 5], 4, -378558),
      p = g(p, s, l, f, n[d + 8], 11, -2022574463),
      f = g(f, p, s, l, n[d + 11], 16, 1839030562),
      l = g(l, f, p, s, n[d + 14], 23, -35309556),
      s = g(s, l, f, p, n[d + 1], 4, -1530992060),
      p = g(p, s, l, f, n[d + 4], 11, 1272893353),
      f = g(f, p, s, l, n[d + 7], 16, -155497632),
      l = g(l, f, p, s, n[d + 10], 23, -1094730640),
      s = g(s, l, f, p, n[d + 13], 4, 681279174),
      p = g(p, s, l, f, n[d + 0], 11, -358537222),
      f = g(f, p, s, l, n[d + 3], 16, -722521979),
      l = g(l, f, p, s, n[d + 6], 23, 76029189),
      s = g(s, l, f, p, n[d + 9], 4, -640364487),
      p = g(p, s, l, f, n[d + 12], 11, -421815835),
      f = g(f, p, s, l, n[d + 15], 16, 530742520),
      s = m(s, l = g(l, f, p, s, n[d + 2], 23, -995338651), f, p, n[d + 0], 6, -198630844),
      p = m(p, s, l, f, n[d + 7], 10, 1126891415),
      f = m(f, p, s, l, n[d + 14], 15, -1416354905),
      l = m(l, f, p, s, n[d + 5], 21, -57434055),
      s = m(s, l, f, p, n[d + 12], 6, 1700485571),
      p = m(p, s, l, f, n[d + 3], 10, -1894986606),
      f = m(f, p, s, l, n[d + 10], 15, -1051523),
      l = m(l, f, p, s, n[d + 1], 21, -2054922799),
      s = m(s, l, f, p, n[d + 8], 6, 1873313359),
      p = m(p, s, l, f, n[d + 15], 10, -30611744),
      f = m(f, p, s, l, n[d + 6], 15, -1560198380),
      l = m(l, f, p, s, n[d + 13], 21, 1309151649),
      s = m(s, l, f, p, n[d + 4], 6, -145523070),
      p = m(p, s, l, f, n[d + 11], 10, -1120210379),
      f = m(f, p, s, l, n[d + 2], 15, 718787259),
      l = m(l, f, p, s, n[d + 9], 21, -343485551),
      s = s + y >>> 0,
      l = l + b >>> 0,
      f = f + w >>> 0,
      p = p + _ >>> 0
  }
  return r.endian([s, l, f, p])
}
const wordsToBytes = function(t) {
  for (var e = [], n = 0; n < 32 * t.length; n += 8)
      e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
  return e
}
const bytesToHex = function(t) {
    for (var e = [], n = 0; n < t.length; n++)
        e.push((t[n] >>> 4).toString(16)),
        e.push((15 & t[n]).toString(16));
    return e.join("")
}

function sendRequest(url, data, headers) {  
    // 创建axios请求配置对象  
    const requestConfig = {  
      method: 'post', // 请求方法，如 'get', 'post' 等  
      url, // 请求的URL  
      data, // 请求体数据，如果是GET请求可以省略  
      headers: {  
        ...headers, // 展开传入的动态请求头  
        'Content-Type': 'application/json;charset=utf-8',
        'x-appcode': 'parking'
        // 可以添加默认请求头，如果传入headers中没有的话  
        // 你可以在这里添加更多默认请求头，除非它们被传入的headers覆盖  
      },  
      // 可以添加其他axios配置选项，如timeout, baseURL等  
    };
  // 发送请求并返回Promise  
  return axios(requestConfig)  
    .then(response => {  
      return response.data; // 或者你可以返回整个response对象  
    })  
    .catch(error => {  
      throw error; // 或者你可以对错误进行更复杂的处理  
    });  
} 



function generateSign (queryParam) {
    console.log('queryParam',queryParam);
    const timestamp = Date.now();
    const nonce = (Number((Math.random() + Math.random()).toString().substr(2, 13)) + Date.now()).toString(36).slice(-parseInt(8, 10))
// const timestamp = 1713339162773
// const nonce = 'sf96p0it'
const t = {
    method: 'post',
    headers: {
        nonce,
        timestamp,

    },
    Authorization: '',
    queryString: JSON.stringify({
        // code: 'p210434036',
        // parkCode: '100019',
        // oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI'
        ...queryParam
    })
}
const queryString = t.queryString
console.log('queryString000',queryString)
let encryptedStr = ("".concat(t.method,'\n')
    .concat(t.headers.nonce,'\n')
    .concat(t.headers.timestamp,'\n')
    .concat("parking", '\n')
    .concat(t.queryString));
    const signlist = wordsToBytes(c(encryptedStr))
    let sign = bytesToHex(signlist)
    return {sign, timestamp, nonce, queryString}
}
// 实时查询时间
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
// 公共节假日
var holidays = [
    '2024-05-01', // 国庆
    '2024-05-02', // 国庆
    '2024-05-03', // 国庆
    '2024-05-04', // 国庆
    '2024-05-05', // 国庆
    '2024-06-08', // 端午
    '2024-06-09', // 端午
    '2024-06-10', // 端午
    '2024-09-15', // 中秋
    '2024-09-16', // 中秋
    '2024-09-17', // 中秋
    '2024-10-01', // 国庆
    '2024-10-02', // 国庆
    '2024-10-03', // 国庆
    '2024-10-04', // 国庆
    '2024-10-05', // 国庆
    '2024-10-06', // 国庆
    '2024-10-07', // 国庆
]
// 调休上班时间
const workdays = [
    '2024-04-28',
    '2024-05-11',
    '2024-09-14',
    '2024-09-29',
    '2024-10-12',
]

function dateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
function isholidays() {
    const now = new Date();
    const date = dateToYYYYMMDD(now)
    if(holidays.includes(date)) return true
    return false;
}
function isWorkdays() {  
    // console.log(`当前日期是：${year}-${month}-${day}`);
    const now = new Date();
    const date = dateToYYYYMMDD(now)
    if(workdays.includes(date)) return true
    return false;
}
function isWeekend() {
    const date = new Date();
    // 获取星期几 (0-6, 0是周日)
    const day = date.getDay();
    // 判断是否是周六或周日
    return day === 6 || day === 0;
}
// console.log('isWorkdays()',isWorkdays());
// console.log('isWeekend()',isWeekend());
// console.log('isholidays()',isholidays());
// 使用setInterval设置一个定时器，每秒钟更新一次时间
setInterval(() => {
    // console.log(getCurrentTime());
    if(isWorkdays()) {
        if(getCurrentTime() === '06:00:00') {
            console.log('已到查询调休上班时间' + dateToYYYYMMDD(new Date()));
            checkReservation();       
        }
    } else if(!isholidays()) {
        if(getCurrentTime() === '06:00:00' && !isWeekend()) {
            console.log('已到查询时间' + dateToYYYYMMDD(new Date()));
            checkReservation();       
        }
    }
}, 1000);
// checkReservation()
function checkReservation() {
   const {sign,timestamp,nonce,queryString} = generateSign (
            {
                code: 'p210434036',
                parkCode: '100019',
                oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI'
            }
        )  
        const dynamicHeaders = {  
            'sign': sign,  
            'timestamp': timestamp,
            'nonce':  nonce,
             queryString
        };  
    // setAxiosHeader(sign,timestamp,nonce,queryString)
    sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/app/userReservationApp/checkReservation',{
        code: 'p210434036',
        parkCode: '100019',
        oneId:  'oDJ04uCH2uyYC4PQqNXQNTEjuhRI',
      }, dynamicHeaders).then(response => {
        console.log('response',response)
        if(response && response.code === 0) {
            console.log('success');
            getCode()
        }
      })
}
 
// getCode()
// 获取验证码
function getCode() {

    const {sign,timestamp,nonce,queryString} = generateSign (
        {
            oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI'
        }
    )
    const dynamicHeaders = {  
        'sign': sign,  
        'timestamp': timestamp,
        'nonce':  nonce,
         queryString
    };
    // console.log('queryString',queryString);
    // if(!queryString.code) {
    //     setAxiosHeader(sign,timestamp,nonce,queryString)
    // }
    sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/parkInfo/getCode',{
        oneId:  'oDJ04uCH2uyYC4PQqNXQNTEjuhRI',
      },dynamicHeaders).then(response => {
        // console.log('response',response);
        if(response && response.code ===0) {
              console.log('base64', response.data);
              const base64 = response.data;
                // 示例：降噪Sigma设为2.38
            blurBase64Image(base64, 2.38).then(blurredBase64 => {
                // console.log(blurredBase64); // 输出降噪后的Base64图片
    
                (async () => {
                    const worker = await createWorker('eng');
                    await worker.setParameters({
                        tessedit_char_whitelist: '0123456789',
                    })
                    const ret = await worker.recognize(blurredBase64);
                    console.log(ret.data.text);
                    await worker.terminate();
                    const verificationCode = ret.data.text;
                    reservation(String(verificationCode).trim())
                })();
    
            }); 
          }
    })
}


// base64转成数字
function blurBase64Image(base64, blurSigma) {
    // 将Base64字符串转换为缓冲区
    const buffer = Buffer.from(base64, 'base64');
   
    // 使用sharp对图片进行降噪处理
    return sharp(buffer)
      .resize(150, 70)
      .blur(blurSigma) // blurSigma是降噪算法的sigma值
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        // 将缓冲区数据转换回Base64字符串
        const base64Image = data.toString('base64');
        return `data:image/jpeg;base64,${base64Image}`;
      });
  }
function getBookTime () {    
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 月份从0开始，所以要加1
    var day = now.getDate();
    var hour = now.getHours() + 2;
    var minute = now.getMinutes();
    // var second = now.getSeconds();
    // console.log(year, month, day, hour, minute, second);
    if(month < 10) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }
    if(hour < 10) {
        hour = '0' + hour;
    }
    if(minute < 10) {
        minute = '0' + minute;
    }
   return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + '00';
}
// getBookTime()
function reservation(code) {
    const bookTime = getBookTime()
    const params = {bookTime,carNo:'57KkQkdNNzkzMw==',code: 'p210434036',lineUpType: 0,oneId: 'oDJ04uCH2uyYC4PQqNXQNTEjuhRI',parkCode: '100019',phone: 'MTU5ODY3NTkxMzU=',spaceId: '2411287',spaceType: 0,'verificationCode':code}
    const {sign,timestamp,nonce,queryString} = generateSign(params)
    const dynamicHeaders = {  
        'sign': sign,  
        'timestamp': timestamp,
        'nonce':  nonce,
         queryString
    };
    sendRequest('https://smartum.sz.gov.cn/tcyy/parking/lot-mobile/service-parking-mobile/webapi/app/userReservationApp/reservation',params,dynamicHeaders).then(response => {
        console.log('response',response);
        if(response.code !== 0) {
            checkReservation()
        }
    })
}