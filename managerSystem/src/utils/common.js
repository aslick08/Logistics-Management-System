/**
 * 获取url参数
 * @supported all
 * @param name：参数名
 * @param query：url
 * @returns {string}
 */
export const getQueryString = (name, query) => {
  let reg = new RegExp("[\?&]" + name + "=([^&]*)", "i");
  let search = window.location.href.split('?');
  let lastSearch = search.length > 1 && search[search.length - 1] || '';
  let r = (query || '?&' + lastSearch).match(reg);
  if (r != null) return unescape(r[1]);
  return '';
};

export const getQueryStringNew = (name, query) => {
  let reg = new RegExp("[\?&]" + name + "=([^&]*)", "i");
  let search = window.location.search.split('?');
  // let search = window.location.search ? window.location.search.split('?') : window.location.href.split('?');
  let lastSearch = search.length > 1 && search[search.length - 1] || '';
  let r = (query || '?&' + lastSearch).match(reg);
  if (r != null) return unescape(r[1]);
  return '';
};

/**
 * 计时器
 * @supported all
 * @param times 时间戳
 * @param callBack 回调
 */
export const countDown = (times, callBack) => {
  // 秒
  times = times / 1000;
  // 计时器
  let timer = setInterval(() => {
    let day = 0, hour = 0, minute = 0, second = 0;
    if (times > 0) {
      day = Math.floor(times / (60 * 60 * 24));
      hour = Math.floor(times / (60 * 60)) - (day * 24);
      minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    // 小于10补0
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    // 回调
    if (times > 0) {
      callBack({
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        timer: timer,
        end: false
      })
    } else {
      clearInterval(timer);
      callBack({
        hour: '00',
        minute: '00',
        second: '00',
        timer: timer,
        end: true
      })
    }
    times--;
  }, 1000)
};

/**
 * 操作cookie相关方法
 * @supported h5
 */

// 设置cookie
export const setCookie = (name, value, expires, domain, path, secure) => {
  let cookieText = "";
  cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (expires instanceof Date) {
    cookieText += "; expires=" + expires.toGMTString();
  }
  cookieText += "; path=/";
  if (domain) {
    cookieText += "; domain=" + domain;
  }
  if (secure) {
    cookieText += "; secure";
  }
  document.cookie = cookieText;
};

// 获取cookie
export const getCookie = name => {
  let cookieName = encodeURIComponent(name) + "=",
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = "";
  if (cookieStart > -1) {
    let cookieEnd = document.cookie.indexOf(";", cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
  }
  return cookieValue;
};

// 删除cookie
export const removeCookie = (name, domain, path, secure) => {
  setCookie(name, "", Date(0), domain, path, secure);
};

// 获取所有cookie
export const getAllCookie = () => document.cookie;

/**
 * 获取缓存
 * @param key
 * @returns {Promise<any>}
 */
export const getStorage = key => {
  return new Promise((resolve, reject) => {
    let val = localStorage.getItem(key) || '';
    if(val) {
      resolve(JSON.parse(val))
    }
    reject(val)
  })
};

/**
 * 获取缓存
 * @param key
 * @returns {Promise<any>}
 */
export const getStorageSync = key => {
  let val = localStorage.getItem(key) || '';
  if(val) {
    return val
  }
};

/**
 * 设置缓存
 * @param key
 * @param val
 */
export const setStorageSync = (key, val) => {
  if(typeof val === "object") {
    val = JSON.stringify(val)
  }
  localStorage.setItem(key, val)
};
