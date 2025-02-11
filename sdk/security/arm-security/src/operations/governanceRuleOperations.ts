/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GovernanceRuleOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  GovernanceRule,
  GovernanceRuleListNextOptionalParams,
  GovernanceRuleListOptionalParams,
  GovernanceRuleListResponse,
  GovernanceRuleListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GovernanceRuleOperations operations. */
export class GovernanceRuleOperationsImpl implements GovernanceRuleOperations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class GovernanceRuleOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a list of all relevant governanceRules over a subscription level scope
   * @param options The options parameters.
   */
  public list(
    options?: GovernanceRuleListOptionalParams
  ): PagedAsyncIterableIterator<GovernanceRule> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: GovernanceRuleListOptionalParams
  ): AsyncIterableIterator<GovernanceRule[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: GovernanceRuleListOptionalParams
  ): AsyncIterableIterator<GovernanceRule> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all relevant governanceRules over a subscription level scope
   * @param options The options parameters.
   */
  private _list(
    options?: GovernanceRuleListOptionalParams
  ): Promise<GovernanceRuleListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: GovernanceRuleListNextOptionalParams
  ): Promise<GovernanceRuleListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/governanceRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRuleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion18],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRuleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion18],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
