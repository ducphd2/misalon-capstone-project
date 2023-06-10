# Preface
Many thanks to all the authors who have created great repositories for my reference.

10/06/2023 Vietnam time, I have successfully defended my graduation project although there are still many things that cannot be implemented in this project. But then it was also a great exercise from which I could draw experiences for myself.

Thank you to my parents, friends and relatives for always encouraging me to have more motivation to complete this project

# Installation and run

1. First install all dependencies by `yarn` and using nodemon to compile all protobuf file if not includes in project by `yarn watch-proto`
2. To run development env: Run each service (api gateway and other services) by each `yarn start:service-name:dev` or `yarn start:dev` to run all services and API gateway concurrently

## Techstack
NestJS monorepo, graphql, RestfulAPI, gRPC, redis bull, sequelize, postgreSQL, microservices architecture with API gateway

## Architecture
This project uses grpc to handle synchronous requests from the client side or calls between different services. In the main branch, the develop system is broken down into different services and uses different databases. However, because the time to complete the project is not much, I have to switch to using only 1 database. This ultimately returns to the problem with monolithic architecture using shared-database pattern instead of using microservices architecture.
You can switch to main or develop branches to explore my approach to microservices system.

Also, to ensure data synchronization, I use message queue as redis bull to make requests to other services.

#### Proto files

> You can find my proto files in libs/grpc-types/src/protos

#### Logger

> If you're looking for logger example for your gRPC microservices you would want to look my interceptors folder
> it's in libs/interceptors folder.

# Credits:
1. https://github.com/Halil-Kaya/nestjs-gRPC
2. https://github.com/devhoangkien/upload-nestjs-graphql
3. https://github.com/meodemsao/nestjs-graphql-grpc-microservice-headeless-ecommerce
4. https://github.com/thaithuytb/cv_nest_graphql_microservice
5. https://github.com/mikemajesty/nestjs-monorepo
