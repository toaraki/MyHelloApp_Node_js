# MyHelloApp_Node_js Sample Application for Container Experimentation.

## コンテナのビルド

```
$ podman build -t webapp .
```

## コンテナの実行
```
$ podman run -d -p 8080:8080 --name my-sample-app webapp
```
