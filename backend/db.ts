import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    host: "localhost",
    username: "postgres",
    password: "drennanpw",
    type: "postgres",
    port: 5432,
    database: "typeormdb",
    entities: [User],
    logging: true,
    synchronize: true
})