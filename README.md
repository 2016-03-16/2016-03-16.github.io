# www



## HTTP

``` shell windows
ipconfig | findstr IPv4
```

``` shell linux
ifconfig | grep -w inet
```

``` shell python3
python -m http.server
```

``` shell python2
python -m SimpleHTTPServer
```



## HTTPS

生成证书
``` shell
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

``` shell
npm install -g http-server
```

``` shell
http-server -h
http-server -S -C -K -o -p
```

``` shell
http-server ./ -S
```


## 允许跨域
``` python
def end_headers(self):
    self.send_header('Access-Control-Allow-Origin', '*')
```
