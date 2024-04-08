import { DynamicModule } from  "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Environment } from "src/common/enum"
import { ConfigService } from "@nestjs/config"
import { ConnectOptions } from "typeorm"

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
   inject: [ ConfigService ],
   async useFactory(config: ConfigService){
    const IsDevelopmentEnv = config.get("NODE_ENV") !== Environment.Production

    const dbconfig= {
        type: 'postgres',
        host: config.get("DB_HOST"),
        port: +config.get("DB_PORT"),
        username: config.get("DB_USER"),
        password: config.get("DB_PASSWORD"),
        database: config.get("DB_NAME"),
        autoLoadEntities: true,
        synchronize: IsDevelopmentEnv,
        logging: config.get("DB_LOGGING")

    } as ConnectOptions;
    
    return dbconfig;

   },
});
