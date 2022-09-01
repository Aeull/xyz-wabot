global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.scrape = require('./lib/scrape')
global.cheerio = require('cheerio')
global.owner = ['6285822347348', '6285822347348', '6285822347348', '6285822347348', '6285822347348', '6285822347348', '6285822347348','6285822347348'] // Put your number here
global.mods = ['6285822347348','6285822347348'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.DeveloperMode = 'false'
global.APIs = { // API Prefix
    // name: 'https://website'
    nrtm: 'https://nurutomo.herokuapp.com',
    bg: 'http://bochil.ddns.net',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
    pencarikode: 'https://pencarikode.xyz',
    LeysCoder: 'https://leyscoders-api.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    irwan: 'https://irwan-api1-xyz.herokuapp.com'
}
global.APIKeys = { // APIKey Here
    // 'https://website': 'apikey'
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://irwan-api1-xyz.herokuapp.com': 'IrwanGans',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
    'https://pencarikode.xyz': 'pais',
    'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = ':)'
global.author = 'ArullBotz'
global.packnamee = 'P'

global.gcex = "https://chat.whatsapp.com/ItwCvXL02hg11U5qNaLSBe"
global.fotoex = "https://telegra.ph/file/52d22365ea221d29aafbb.jpg"

//donasi
global.swr = "https://saweria.co/arullofc"
global.dana = "085822347348"
global.ovo = ""
global.pulsa = "085822347348"

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            exp: '✉️',
            money: '💵',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🎁',
            mythic: '🗳️',
            legendary: '🗃️',
            pet: '🎁',
            sampah: '🗑',
            armor: '🥼',
            sword: '⚔️',
            kayu: '🪵',
            batu: '🪨',
            string: '🕸️',
            kuda: '🐎',
            kucing: '🐈',
            anjing: '🐕',
            petFood: '🍖',
            gold: '👑',
            emerald: '💚'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'config.js'"))
    delete require.cache[file]
    require(file)
})
