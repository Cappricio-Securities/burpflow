#!/usr/bin/env node
/**
 * 🚀 BurpFlow - Recon to Burp Automation Tool
 * -------------------------------------------
 * 👨‍💻 Author  : Karthikeyan V (karthithehacker)
 * 🌐 Website : https://karthikeyan.com
 * 🐙 GitHub  : https://github.com/karthi-the-hacker
 *
 * 📌 Description:
 * BurpFlow is a CLI-based tool designed for bug bounty hunters 🐞
 * and penetration testers 🔐 to automate the process of importing
 * reconnaissance data (URLs, endpoints, parameters) into Burp Suite
 * for faster and more efficient vulnerability testing ⚡
 *
 * 🔑 Keywords:
 * burp suite automation, bug bounty tool, recon automation,
 * pentesting, web security, ethical hacking
 *
 * ⚠️ Disclaimer:
 * This tool is intended for educational purposes 📚 and authorized
 * security testing only. Unauthorized use is strictly prohibited 🚫
 * and may be illegal.
 *
 * 🙏 Credits:
 * If you use or modify this code, please give proper credit
 * to the original author ❤️
 */

const axios = require('axios');
let chalk;
try {
  chalk = require('chalk');
} catch (err) {
  chalk = null;
}

function color(text, style) {
  if (!chalk) return text;
  if (chalk[style]) return chalk[style](text);
  return text;
}

function buildProxyConfig(proxy) {
  const [host, port] = proxy.split(':');
  return {
    host,
    port: Number(port),
    protocol: 'http',
  };
}

async function sendRequest(url, proxyConfig, timeoutMs) {
  try {
    const response = await axios.get(url, {
      timeout: timeoutMs,
      proxy: proxyConfig,
      validateStatus: () => true,
    });
    return { success: true, url, status: response.status };
  } catch (err) {
    return { success: false, url, message: err.message };
  }
}

async function sendRequests(urls, proxy, timeout, concurrency) {
  const proxyConfig = buildProxyConfig(proxy);
  const results = [];
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const i = index;
      index += 1;
      const url = urls[i];
      const result = await sendRequest(url, proxyConfig, timeout);
      results.push(result);
      const urlOutput = color(url, 'red');
      if (result.success) {
        const statusOutput = color(`[status ${result.status}]`, 'green');
        console.log(`${color('[✔]', 'green')} Loaded: ${urlOutput} ${statusOutput}`);
      } else {
        console.log(`${color('[✘]', 'red')} Failed: ${urlOutput} (${result.message})`);
      }
    }
  }

  const workers = [];
  for (let i = 0; i < concurrency; i += 1) {
    workers.push(worker());
  }
  await Promise.all(workers);
  return results;
}

module.exports = {
  sendRequests,
};