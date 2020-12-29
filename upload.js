// author : amtoaer
// e-mail: amtoaer@gmail.com

const path = require('path');
const got = require('got')
const FormData = require('form-data')
const fs = require('fs')

module.exports = async function (filePath, savePath, markdownPath) {

    const token = 'your token'

    const postURL = `https://www.dogedoge.com/tools/upload/${token}`
    const form = new FormData()
    form.append('file', fs.createReadStream(filePath))
    try {
        const resp = await got.post(postURL, {
            body: form
        })
        let response = JSON.parse(resp.body)
        return response.data.o_url
    } catch (error) {
        console.error(error)
        // return local relative path
        return path.relative(path.dirname(markdownPath), filePath);
    }
}