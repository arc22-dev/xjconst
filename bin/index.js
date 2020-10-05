#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");
const chalk = require('chalk');

console.log(chalk`\r\n{yellow xjconst url shortener by} {magenta.underline @anishh.arc} (instagram)\r\n`);

const options = yargs
    .usage("Usage: -n <name>")
    .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
    .option("c", { alias: "create", describe: "Create url", type: "string" })
    .option("s", { alias: "search", describe: "Search key", type: "string" })
    .option("d", { alias: "day", describe: "Expire in d days, works with -c", type: "number" })
    .option("h", { alias: "hour", describe: "Expire in h hour, works with -c", type: "number" })
    .option("m", { alias: "minute", describe: "Expire in m minute, works with -c", type: "number" })
    .option("u", { alias: "user", describe: "Number of users allowed, works with -c", type: "number" })
    .argv;

if (options.name) {
    console.log(`hello ${options.name}\r\n`)
}

if (options.search) {

    console.log(chalk.blue(`searching...\r\n`))

    // const url = `http://anisalsid.io/xjconst/api/data/${options.search}`;
    const url = `https://xjconst02.cf/api/data/${options.search}`;

    axios.get(url, { headers: { Accept: "application/json" } })
        .then(res => {
            if (res.data.status === false) {
                console.log(chalk`{red ${res.data.message}}`);
            } else {
                // console.log(res.data)
                for (const obj of res.data) {
                    // console.log(obj)
                    for (key in obj) {
                        console.log(chalk`{bold ${key}} : {green ${obj[key]}}`)
                    }

                    console.log(`\r\n`)
                }
            }
        });
}

if (options.create) {

    console.log(chalk.blue(`creating...\r\n`))

    // const url = `http://anisalsid.io/xjconst/do/create/`;
    const url = `https://xjconst02.cf/do/create/`;

    var postdata = {
        longurl: options.create
    }

    var minutes = null;
    var users = null;

    if (options.day) {
        minutes = minutes + (options.day * 24 * 60)
    }
    if (options.hour) {
        minutes = minutes + (options.hour * 60)
    }
    if (options.minute) {
        minutes = minutes + (options.minute)
    }

    if (options.user) {
        postdata.allowed = options.user
    } else {
        postdata.allowed = users
    }
    postdata.expire = minutes;

    axios.post(url, postdata)
        .then(res => {
            if (res.data.status === false) {
                console.log(chalk`{red ${res.data.message}}`);
            } else {
                console.log(chalk`your new {bold short url} is {green ${res.data}}`)
                // console.log(postdata)
            }
        });
}