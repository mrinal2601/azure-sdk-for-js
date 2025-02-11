/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RetrieveThroughputParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB SQL database
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB SQL database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlDatabaseRetrieveThroughputDistribution.json
 */
async function cosmosDbSqlDatabaseRetrieveThroughputDistribution() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const retrieveThroughputParameters: RetrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginSqlDatabaseRetrieveThroughputDistributionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    retrieveThroughputParameters
  );
  console.log(result);
}

cosmosDbSqlDatabaseRetrieveThroughputDistribution().catch(console.error);
