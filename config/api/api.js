apiUrl = ["https://newapi.gatdivjk.com"];
window.fastApiUrl = apiUrl[0];
(function () {
    try {
        var test = [];
        var testSpeed = "/api/bet/user/system/testSpeed";
        if (apiUrl.length > 0) {
            for (var i = 0; i < apiUrl.length; i++) {
                var xhr = new XMLHttpRequest();
                (function (xhr,i,date) {
                    var getUrl = apiUrl[i] + testSpeed;
                    var xhr = new XMLHttpRequest();
                    xhr.open("get", getUrl, true);
                    xhr.send(null);
                    xhr.addEventListener("readystatechange", () => {
                        if (xhr.readyState === 4) {
                          
                            if ((xhr.status === 200) || xhr.status === 304) {
                                window.fastApiUrl=apiUrl[i] 
                                var receiveDate = (new Date()).getTime()
                                var responseTimeMs = receiveDate - date
                                if (test.length > 0) {
                                    if (responseTimeMs < test[test.length - 1].time) {
                                        window.fastApiUrl =apiUrl[i]
                                    }
                                }
                                console.info(fastApiUrl)
                                test.push({
                                    time: responseTimeMs,
                                    url: apiUrl[i]
                                })
                                console.info(test)

                            } else {
                                console.info("Request was unsuccessful: " + xhr.status);
                            }
                        }
                    });

                })(xhr,i,new Date().getTime())




            }
        }
    } catch (ex) {

    }
}());
