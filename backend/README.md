I installed Ts.ED which is a Node.js Framework on top of Express. Written in Typescript, it helps developer build application easily and quickly, please refer to https://tsed.io/

the main.ts file need to use "Server" from Ts.ED library, integrate with 
- ajv
- mongoose
- swagger
- other express built-in

in the API, I simuate to add eslint, docker file.
the code is split into some folder:
1. config = collection all file related to config. it can be config for Ts.ED or others, include env
2. controller = collection of controller API, including API function and it params
3. entities = standarized schema for resposes
4. middleware
5. model = collection of mongoose model
6. services
7. util = collection of util function that can be used as global purpose
