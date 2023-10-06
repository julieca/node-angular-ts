I installed Ts.ED, which is a Node.js Framework built on top of Express and written in TypeScript. It helps developers build applications easily and quickly. Please refer to [https://tsed.io/](https://tsed.io/) for more information.

The `main.ts` file needs to utilize the "Server" class from the Ts.ED library and integrate with the following components:
- `ajv`
- `mongoose`
- `swagger`
- Other built-in Express functionalities

Within the API, I have also included features to:
- Simulate adding ESLint
- Provide a Dockerfile for containerization

The code is organized into several folders:

1. **config**: This folder contains all files related to configuration. It includes configurations for Ts.ED and other settings, including environment variables.

2. **controller**: This folder is a collection of API controllers, including API functions and their parameters.

3. **entities**: Here, you'll find standardized schemas for responses.

4. **middleware**: This folder houses middleware components.

5. **model**: It contains a collection of Mongoose models.

6. **services**: This folder is dedicated to various services.

7. **util**: This is a collection of utility functions that can be used for various global purposes.