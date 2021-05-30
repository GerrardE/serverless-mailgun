export default {
    EventTable: {
        Type: "AWS::DynamoDB::Table",
        DeletionPolicy: "Delete",
        Properties: {
            TableName: "${self:provider.environment.EVENT_TABLE}",
            AttributeDefinitions: [
                { AttributeName: "id", AttributeType: "S" }
            ],
            KeySchema: [
                { AttributeName: "id", KeyType: "HASH" }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: "${self:custom.table_throughput}",
                WriteCapacityUnits: "${self:custom.table_throughput}"
            }
        }
    },
}
