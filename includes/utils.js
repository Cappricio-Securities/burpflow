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

function parseArguments(argv) {
  const args = {
    help: false,
    proxy: null,
    url: null,
    list: null,
    concurrency: 5,
    timeout: 10000,
  };

  const normalized = argv.slice(2);
  for (let i = 0; i < normalized.length; i++) {
    const arg = normalized[i];
    const next = normalized[i + 1];

    switch (arg) {
      case '-h':
      case '--help':
        args.help = true;
        break;
      case '-p':
      case '--proxy':
        if (!next) throw new Error('Missing value for proxy. Example: -p 127.0.0.1:8080');
        args.proxy = next;
        i++;
        break;
      case '-u':
      case '--url':
        if (!next) throw new Error('Missing value for URL. Example: -u https://example.com');
        args.url = next;
        i++;
        break;
      case '-l':
      case '--list':
        if (!next) throw new Error('Missing value for list file path. Example: -l urls.txt');
        args.list = next;
        i++;
        break;
      case '-c':
      case '--concurrency':
        if (!next) throw new Error('Missing value for concurrency. Example: -c 5');
        args.concurrency = Number(next) || 5;
        i++;
        break;
      case '-t':
      case '--timeout':
        if (!next) throw new Error('Missing value for timeout. Example: -t 10000');
        args.timeout = Number(next) || 10000;
        i++;
        break;
      default:
        throw new Error(`Unknown argument: ${arg}. Use -h or --help for usage.`);
    }
  }

  return args;
}

module.exports = {
  parseArguments,
};