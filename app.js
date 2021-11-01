const { getConnection, queries } = require("./database");
var cron = require('node-cron');

getProducts = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getVehicles);
        console.log(result.recordset);
    } catch (error) {
        console.err(error.message);
    }
};

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});
