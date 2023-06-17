import pg from 'pg';

const pool = new pg.Pool({
	user: 'postgres',
	host: 'localhost',
	password: '2008',
	database: 'day4',
	port: 5432,
});

async function fetchAll(SQL, params = []) {
	let client = await pool.connect();
	try {
		let { rows } = await client.query(SQL, params);
		return rows;
	} catch (error) {
		console.log(error);
	} finally {
		client.release();
	}
}

export { fetchAll };
