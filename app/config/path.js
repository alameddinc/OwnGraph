const path = require('path')

const root = path.dirname(require.main.filename);
const log = root + "/logs/";
const schemas = root + "/app/schemas";
const resolvers = root + "/app/resolvers";
const config = root + "/app/config";
const context = root + "/app/contexts";
const database = context + "/database";
const model = context + "/models";
const consts = context + "/consts";



module.exports = {
    rootFolder: root,
    logFolder: log,
    configFolder: config,
    resolversFolder: resolvers,
    schemasFolder: schemas,
    contextFolder: context,
    databaseFolder: database,
    modelFolder: model
}
