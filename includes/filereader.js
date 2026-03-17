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

const fs = require('fs').promises;
const { validateUrl } = require('./validate');

/**
 * Reads URLs from a file, trims whitespace, ignores blank lines/comments,
 * and optionally validates each URL.
 */
async function readUrlsFromFile(path) {
  try {
    const raw = await fs.readFile(path, 'utf8');
    const lines = raw.split(/\r?\n/);
    const urls = lines
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'))
      .filter((line) => validateUrl(line));

    return urls;
  } catch (err) {
    throw new Error(`Could not read file ${path}: ${err.message}`);
  }
}

module.exports = {
  readUrlsFromFile,
};