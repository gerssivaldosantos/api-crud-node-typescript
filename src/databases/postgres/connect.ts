import pg from 'pg'
import config from './config.json'

const connect = async ():Promise<pg.PoolClient> => { 
    const { Pool } = pg
    const pool = new Pool(config);
    global.connection = pool;
    const connection = await pool.connect()
    return connection;
}

export { connect }