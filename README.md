# Credits:

1. https://github.com/Halil-Kaya/nestjs-gRPC
2. https://github.com/devhoangkien/upload-nestjs-graphql
3. https://github.com/meodemsao/nestjs-graphql-grpc-microservice-headeless-ecommerce
4. https://github.com/thaithuytb/cv_nest_graphql_microservice
5. https://github.com/mikemajesty/nestjs-monorepo

# Installation

1. First install all dependencies by `yarn` and using nodemon to compile all protobuf file if not includes in project by `yarn watch-proto`
2. To run development env: Run each service (api gateway and other services) by each `yarn start:service-name:dev`
3. I am trying to finish the project in time. That is my capstone project in my curriculum
4. Coding time

# Nestjs + gRPC example

> Hello! ✋
>
> I have been searching for an example project that utilizes gRPC with NestJS, but I have not been able to find a detailed one. Therefore, I have created this repository to provide an example for using gRPC.
> This project is a simple todo app, and I have implemented gRPC for my microservices. You can find more details about the architecture in the image

## Architecture

<p align="center">
  <img src="./img-architecture.jpeg" alt="Architecture"/>
</p>

## Postman document link

> https://documenter.getpostman.com/view/10504693/2s8YYFrPm1

### To run

```bash
$ docker-compose up
```

### To run tests

```bash
$ npm run test
```

### To stop project

```bash
$ docker-compose down
```

###

#### Proto files

> You can find my proto files in libs/grpc-types/src/protos
> I have three proto file; user,auth and todo proto file. each my microservice service has its own proto file.

#### Logger

> If you're looking for logger example for your gRPC microservices you would want to look my interceptors folder
> it's in libs/interceptors folder.
