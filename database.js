import { Client } from 'https://deno.land/x/postgres/mod.ts';

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: 'postgres',
      database: 'deno',
      host: 'localhost',
      password: 'docker',
      port: '5432',
    });

    await this.client.connect();
  }
}

export default new Database().client;
