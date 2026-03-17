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
const { parseArguments } = require('./includes/utils');
const { showBanner, showHelp } = require('./includes/help');
const { readUrlsFromFile } = require('./includes/filereader');
const { validateInputs, validateUrl, validateProxy } = require('./includes/validate');
const { sendRequests } = require('./includes/runner');

async function main() {
  const args = parseArguments(process.argv);

  if (args.help) {
    
    showHelp();
    return;
  }

  showBanner();

  const validation = validateInputs({ proxy: args.proxy, url: args.url, list: args.list });
  if (!validation.valid) {
    console.error(`[?] ${validation.message}`);
    process.exit(1);
  }

  if (args.url && !validateUrl(args.url)) {
    console.error(`[?] Invalid URL: ${args.url}`);
    process.exit(1);
  }

  if (!validateProxy(args.proxy)) {
    console.error(`[?] Invalid proxy: ${args.proxy}`);
    process.exit(1);
  }

  let urls = [];
  if (args.url) urls.push(args.url.trim());

  if (args.list) {
    try {
      urls = urls.concat(await readUrlsFromFile(args.list));
    } catch (err) {
      console.error(`[?] ${err.message}`);
      process.exit(1);
    }
  }

  if (!urls.length) {
    console.error('[?] No valid URLs to process.');
    process.exit(1);
  }

  const RED = (text) => chalk.red.bold(text);
  console.log(chalk.red('Started'));
  console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
  console.log(`┃ ${RED('proxy  :  ')}${chalk.white(args.proxy)}` + ' '.repeat(Math.max(0, 18 - args.proxy.length)) + '      ┃');
  console.log(`┃ ${RED('Concurrency:')} ${chalk.white(String(args.concurrency))} ${chalk.white('|')} ${chalk.white(String(args.timeout))}ms` + ' '.repeat(10) + '┃');
  console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛');

  
  await sendRequests(urls, args.proxy, args.timeout, args.concurrency);

  console.log('\nBurpFlow complete. Check Burp Suite proxy history.');
}

main();
