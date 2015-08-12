var xhrFactory = function () {
                this.init.apply(this, arguments);
            }
            xhrFactory.prototype = {
                init: function () {
                    this.xhr = this.create();
                },
                create: function () {
                    var xhr = null;
                    try {
                        if (window.XMLHttpRequest) {
                            xhr = new XMLHttpRequest();
                        }
                        else if (window.ActiveXObject) {
                            xhr = new ActiveXObject("Msxml2.Xmlhttp");
                        }
                    }
                    catch (err) {
                        xhr = new ActiveXObject("Microsoft.Xmlhttp");
                    }
                    return xhr;
                }
}
readystate: function (timeout,callback) {
                    this.xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            callback(eval("(" + this.responseText + ")"));
                        }
                        else {
                            setTimeout(function () {
                                this.xhr.abort();
                            }, !timeout ? 15000 : timeout);
                        }
                      
                    }
                }
para: function (data) {
                    var datastr = "";
                    if (data && Object.prototype.toString.call(data) == "[object Object]") {
                        for (var i in data) {
                            for (var i = 0; i < length; i++) {
                                datastr += i + "=" + data[i] + "&";
                            }
                        }
                    }
                    return datastr;
                }
get: function (url, data, callback, async, timeout) {
                    this.readystate(timeout, callback);
                    var newurl = url;
                    var datastr = this.para(data);
                    newurl = url + "?" + datastr;
                    this.xhr.open("get", newurl, !async ? true : async);
                    this.xhr.send(null);
                }
post: function (url, data, callback, async, timeout) {
                    this.readystate(timeout, callback);
                    var newurl = url;
                    var datastr = this.para(data);
                    this.xhr.open("post", newurl, !async ? true : async);
                    this.xhr.setRequestHeader("content-type", "x-www-form-urlencoded");
                    this.xhr.send(!datastr ? null : datastr);
                }