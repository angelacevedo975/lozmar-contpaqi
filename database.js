require("dotenv").config();
const sql = require("mssql");

exports.queries = {
    getVehicles: `SELECT * FROM [${process.env.DATABASE}].[dbo].[orgVehicle]`,
};

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};

exports.getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

exports.sql;
