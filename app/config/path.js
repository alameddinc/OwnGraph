const path = require('path');

const root = path.dirname(require.main.filename);
const log = root + "/logs/";
const schemas = root + "/app/schemas";
const resolvers = root + "/app/resolvers";
const config = root + "/app/config";
const context = root + "/app/contexts";
const database = context + "/database";
const model = context + "/models";
const consts = context + "/consts";

//modules
const logModule = context + "/logs";
const databaseModule = context + "/database";
const redisModule = context + "/models";
const modelModule = context + "/redis";


module.exports = {
    //Folders
    rootFolder: root,
    logFolder: log,
    configFolder: config,
    resolversFolder: resolvers,
    schemasFolder: schemas,
    contextFolder: context,
    databaseFolder: database,
    modelFolder: model,

    //Modules
    logModule: logModule,
    databaseModule: databaseModule,
    redisModule: redisModule,
    modelModule: modelModule,
}
