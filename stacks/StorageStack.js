import { Bucket, Table } from "@serverless-stack/resources";


export function StorageStack({ stack, app }) {
     // Create an S3 bucket
    // Create the DynamoDB table
  const bucket = new Bucket(stack, "Uploads");
  const table = new Table(stack, "Emails", {
    fields: {
      userId: "string",
      email: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "email" },
  });

  return {
    table,
    bucket,
  };
}