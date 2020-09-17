const exec = require('child_process').exec

exec('git config --get user.name && git config --get user.email', (error, stdout, stderr) => {
    if (stdout) {
        console.log('\x1b[36m%s\x1b[0m', 'start checking user!(∩_∩)O~\n')
        const arr = stdout.split('\n')
        const user = {
            name: arr[0],
            email: arr[1]
        }
        console.log('user.name: ', user.name)
        console.log('user.email: ', user.email)

        if (compareAuthor(user)) {
            console.log('\x1b[32m%s\x1b[0m', 'check pass~')
            process.exit(0)
        } else {
            console.log('\x1b[31m%s\x1b[0m', 'check fail~')
            process.exit(1)
        }

    } else {
        console.log('no git info!')
    }
})
// git author 信息
const authors = [{
    name: 'Rabbitzzc',
    email: 'zzclovelcs@gmail.com'
}]


function compareAuthor(author) {
    return authors.some(v => v.name === author.name && v.email === author.email)
}
