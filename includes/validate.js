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

const URL = require('url').URL;

function validateProxy(proxy) {
  if (!proxy || typeof proxy !== 'string') {
    return false;
  }

  const parts = proxy.split(':');
  if (parts.length !== 2) {
    return false;
  }

  const [host, portStr] = parts;
  const port = Number(portStr);
  if (!host.trim() || Number.isNaN(port) || port < 1 || port > 65535) {
    return false;
  }

  // Simple host validation for IPv4 or hostname
  const hostRegex = /^([a-zA-Z0-9.-]+)$/;
  if (!hostRegex.test(host.trim())) {
    return false;
  }

  return true;
}

function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

function validateInputs(inputs) {
  const { proxy, url, list } = inputs;

  if (!proxy) {
    return {
      valid: false,
      message: 'Missing required argument: -p or --proxy is required.',
    };
  }

  if (!validateProxy(proxy)) {
    return {
      valid: false,
      message: `Invalid proxy format: ${proxy}. Use host:port (e.g. 127.0.0.1:8080).`,
    };
  }

  if (!url && !list) {
    return {
      valid: false,
      message: 'Either -u/--url or -l/--list must be provided.',
    };
  }

  if (url && !validateUrl(url)) {
    return {
      valid: false,
      message: `Invalid URL provided: ${url}`,
    };
  }

  return { valid: true };
}

module.exports = {
  validateProxy,
  validateUrl,
  validateInputs,
};