import { Client } from "pg";

const client=new Client({
  connectionString:"postgresql://Sql_database_owner:IcVY8ShqP9bu@ep-spring-lake-a5l1w6ui.us-east-2.aws.neon.tech/Sql_database?sslmode=require"
});

async function crateUser() {
    await client.connect();
    const result=await client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

    `)
    console.log(result);
}
crateUser();