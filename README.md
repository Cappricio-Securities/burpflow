# BurpFlow

BurpFlow is a lightweight Node.js CLI tool that routes HTTP requests through a Burp Suite proxy, enabling security testers to quickly load and analyze reconnaissance URLs inside Burp.

<div align="center">

![Logo](http://cappriciosec.com/admin_university/university_automation/images/img_69b8fb0ccafe10.71559296.gif)

[![npm version](https://img.shields.io/npm/v/burpflow?style=for-the-badge\&color=00ff41)](https://www.npmjs.com/package/burpflow)
[![MIT License](https://img.shields.io/badge/License-MIT-00ff41?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![Node Version](https://img.shields.io/badge/Node.js-v14+-00ff41?style=for-the-badge\&logo=node.js)](https://nodejs.org/)

</div>

<br>

## 🎯 What is BurpFlow?

**BurpFlow** is a fast, efficient, and minimal **recon automation CLI tool** designed for **penetration testers**, **bug bounty hunters**, and **security researchers**.

It simplifies the process of sending HTTP requests through a Burp proxy, allowing you to:

* Quickly load large URL lists into Burp Suite
* Automate repetitive recon workflows
* Validate URLs and proxy configurations
* Monitor request results in real time
* Improve efficiency during manual testing

> ⚠️ **DISCLAIMER**: This tool is strictly for **authorized security testing** and **educational use only**. Unauthorized usage is illegal.

## 📌 Features

* 🌐 **Proxy-Based Requests** – Send traffic through Burp or any HTTP proxy
* 📂 **Bulk URL Support** – Process single URLs or large URL lists
* ⚡ **Concurrent Execution** – Adjustable worker threads for faster scanning
* ⏱️ **Timeout Control** – Prevent long or hanging requests
* 🧹 **Smart Parsing** – Ignores comments and empty lines in input files
* 🎨 **Colorized Output** – Clean success and error logs in terminal
* 🔍 **Input Validation** – Ensures valid proxy and URL formats


## ⚠️ Requirements

* Node.js (v14 or higher recommended)
* npm
* Burp Suite (or any HTTP proxy)

## ⚡ Installation

### Install globally

```bash
npm install -g burpflow
```

### Run locally

```bash
git clone https://github.com/Cappricio-Securities/burpflow.git
npm install
node burpflow.js -h
```

## ⚙️ Configuration

1. Start Burp Suite
2. Enable proxy listener (default: `127.0.0.1:8080`)
3. Use the same proxy in BurpFlow


## 🚀 CLI Usage

### Show help

```bash
burpflow -h
```


### 🌐 Single URL

```bash
burpflow -p 127.0.0.1:8080 -u https://example.com
```



### 📂 URL List

Create a file (`urls.txt`):

```
https://example.com
https://github.com
```

Run:

```bash
burpflow -p 127.0.0.1:8080 -l urls.txt
```

### ⚡ With Concurrency & Timeout

```bash
burpflow -p 127.0.0.1:8080 -l urls.txt -c 8 -t 12000
```



## 📊 Options

| Flag                | Description                                     |
| ------------------- | ----------------------------------------------- |
| `-p, --proxy`       | Proxy address (required), e.g. `127.0.0.1:8080` |
| `-u, --url`         | Single URL                                      |
| `-l, --list`        | File containing URLs                            |
| `-c, --concurrency` | Parallel requests (default: 5)                  |
| `-t, --timeout`     | Timeout in ms (default: 10000)                  |
| `-h, --help`        | Show help                                       |



## 🖥️ Example Output

```bash
██████╗ ██╗   ██╗██████╗ ██████╗ ███████╗██╗      ██████╗ ██╗    ██╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║
██████╔╝██║   ██║██████╔╝██████╔╝█████╗  ██║     ██║   ██║██║ █╗ ██║
██╔══██╗██║   ██║██╔══██╗██╔═══╝ ██╔══╝  ██║     ██║   ██║██║███╗██║
██████╔╝╚██████╔╝██║  ██║██║     ██║     ███████╗╚██████╔╝╚███╔███╔╝
╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
                                Developed by Team : Cappriciosec.com


🚀 BurpFlow - Recon to Burp Automation Tool


Started
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ proxy  :  192.168.0.103:8080      ┃
┃ Concurrency: 5 | 10000ms          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
[✔] Loaded: https://www.example.com [status 200]
[✔] Loaded: https://www.stage.electronics.example.com [status 200]
[✔] Loaded: http://www.sprt8.example.co.jp [status 403]

BurpFlow complete. Check Burp Suite proxy history.
```



## 📂 Project Structure

```
burpflow/
├── burpflow.js
├── includes/
│   ├── help.js
│   ├── utils.js
│   ├── filereader.js
│   ├── validate.js
│   ├── runner.js
├── README.md
└── package.json
```

---

## 🛠️ Troubleshooting

* `ECONNREFUSED` → Proxy not running or wrong port
* `Invalid URL` → Must start with `http://` or `https://`
* Missing input → Provide `-u` or `-l`



## 🎯 Use Cases

* Bug bounty recon workflows
* Feeding URLs into Burp Proxy history
* Endpoint validation at scale
* Faster manual security testing



## 📬 Feedback

📧 [contact@karthithehacker.com](mailto:contact@karthithehacker.com)



## 📜 License

MIT License



## 👨‍💻 Author

**KarthiTheHacker**

* 🌐 [https://karthithehacker.com](https://karthithehacker.com)
* 🐙 [https://github.com/karthi-the-hacker](https://github.com/karthi-the-hacker)



