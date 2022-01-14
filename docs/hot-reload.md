---
title: Hot reload
sidebar_label: Hot reload
slug: hot-reload
---

In this How-To we are going to show how to speed up the development of Pglet Python apps with hot reload tool.

Pglet app consists of one or more `.py` files in app directory. It normally runs as any other Python app with `python your-app.py`. When any of `.py` files change, the application must be restarted. While you do a lot of small changes working to perfect your Pglet UI, those constant restarts could become very annoying.

[**watchexec**](https://github.com/watchexec/watchexec) is a simple, standalone tool that watches a path and runs a command whenever it detects modifications.

To install on macOS:

```
brew install watchexec
```

To install on Windows:

```
choco install watchexec
```

[Other installation options](https://github.com/watchexec/watchexec/tree/main/cli#installation)

Now use the following command to call/restart `python your-app.py` when any Python file in the current directory (and all subdirectories) changes:

```
watchexec -r -e py -- python your-app.py
```

Once the app is restarted just hit refresh in your browser to reload it.

You also need to modify your Pglet app and set an application name to run on a permanent URL and disable browser opening on the start:

```python
pglet.app("my-app", target=main, no_window=True)
```