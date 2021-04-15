import { Db, MongoClient } from 'mongodb';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class DatabaseClient
{
    private isConnected: boolean = false;
    private db: Db;
    private client: MongoClient;
    private dbname_: String;

    constructor(connectionString: string, dbname: String){
        this.client = new MongoClient(connectionString, { useUnifiedTopology: true });
        this.dbname_ = dbname;
    }

    public getConnection(result: (connection: Db) => void) {
        if (this.isConnected) {
        return result(this.db);
        } else {
        this.connect((error, db: Db) => {
            return result(this.db);
        });
        }
    }

    private connect(result: (error, db: Db) => void) {
        this.client.connect(err => {
            this.db = this.client.db(this.dbname_);
            this.isConnected = true;
            return result(err, this.db);
        });
    }
}