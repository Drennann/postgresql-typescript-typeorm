import "reflect-metadata"
import app from "./app";
import {AppDataSource} from "./db";

async function main() {
    try{
        await AppDataSource.initialize();
        console.log("DB connected.");
        app.listen(3000, () => console.log("Server on port 3000"));
    }catch(e){
        console.error(e);
    }

    
}

main();