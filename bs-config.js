require('dotenv').config()
module.exports = {
    port: process.env.PORT,
    files: ["./**/*.html,htm,css,js}"],
    server: {
        baseDir: ["./src", "./buils/contracts"]
    }
}