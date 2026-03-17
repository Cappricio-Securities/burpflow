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
const chalk = require('chalk');


function showBanner() {
 const chalk = require('chalk');

const banner = `
██████╗ ██╗   ██╗██████╗ ██████╗ ███████╗██╗      ██████╗ ██╗    ██╗
██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║
██████╔╝██║   ██║██████╔╝██████╔╝█████╗  ██║     ██║   ██║██║ █╗ ██║
██╔══██╗██║   ██║██╔══██╗██╔═══╝ ██╔══╝  ██║     ██║   ██║██║███╗██║
██████╔╝╚██████╔╝██║  ██║██║     ██║     ███████╗╚██████╔╝╚███╔███╔╝
╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
`;

const footer = "                                Developed by Team : Cappriciosec.com\n\n";

// Blue banner + White footer
console.log(chalk.blue(banner) + chalk.white(footer));

console.log(chalk.bold('🚀 BurpFlow - Recon to Burp Automation Tool\n\n'));
}

function showHelp() {
  showBanner();
  
  console.log('\nRequired flags:');
  console.log('  -p, --proxy    Proxy address (example: 127.0.0.1:8080)');
  console.log('  -u, --url      Single URL to load into Burp Suite');
  console.log('  -l, --list     Path to URL list file (one URL per line)');
  console.log('\nOptional flags:');
  console.log('  -h, --help     Show this help menu');
  console.log('  -c, --concurrency  Number of concurrent requests (default: 5)');
  console.log('  -t, --timeout  Request timeout in ms (default: 10000)');
  console.log('\nExamples:');
  console.log('  burpflow -p 127.0.0.1:8080 -u https://example.com');
  console.log('  burpflow -p 127.0.0.1:8080 -l urls.txt');
  console.log('  burpflow --proxy 127.0.0.1:8080 --list urls.txt --concurrency 10');
  console.log('');
}

module.exports = {
  showBanner,
  showHelp,
};