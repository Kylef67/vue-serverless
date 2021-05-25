const dev = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-161mw90sozpsy",
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://m59yqdjpab.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_gi2SGDoGo",
    APP_CLIENT_ID: "9rr5d08cut9dskrtetssc8t0c",
    IDENTITY_POOL_ID: "ap-southeast-1:8f45199c-1290-4972-8fc1-9b411dfe0286",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_PUBLIC_KEY:
    "pk_test_51IlFLbGjtd7bzujTXUCMOWOiQhv3SoBVY30LhCGrZIoBkYEvZCWyfEaTZPm6Ke4Q2cY7hjK8pV4tCXXZnMKYu4IK0044Zp9kRR",
};

const prod = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "my-notes-app-upload-bucket",
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://ufw8n6b898.execute-api.ap-southeast-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_Cvx1wmxVv",
    APP_CLIENT_ID: "1tdbgg3h1gagi489a2s6o8ir1n",
    IDENTITY_POOL_ID: "ap-southeast-1:2ab7135b-f934-401c-851c-87945eb68292",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_PUBLIC_KEY:
    "pk_test_51IlFLbGjtd7bzujTXUCMOWOiQhv3SoBVY30LhCGrZIoBkYEvZCWyfEaTZPm6Ke4Q2cY7hjK8pV4tCXXZnMKYu4IK0044Zp9kRR",
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.VUE_APP_STAGE === "prod" ? prod : dev),
};

export default config;
