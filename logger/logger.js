// const { format, createLogger, transports } = require('winston');
// const { Console } = require('winston/lib/winston/transports');
// require('winston-daily-rotate-file');
// require('winston-mongodb');

// const { combine, timestamp, label, prettyPrint } = format

// const logger = createLogger({
//     level: "debug",
//     format: combine (
//         label({label: "Logs for Users Products App"}),
//         timestamp({
//             format: "DD-MM-YYYY HH:mm:ss"
//         }),
//         format.json(),
//         // prettyPrint()
//     ),
//     transports: [
//         new transports.Console(),
//         new transport.File({
//             filename: "logs/example.log"
//         })
//     ]
// })

// module.exports = logger;