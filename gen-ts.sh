#!/usr/bin/env bash

# Path to this plugin
# PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
# OUT_DIR="./libs/contracts/src/proto"

# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${OUT_DIR}" \
#     --ts_out="service=grpc-node:${OUT_DIR}" \
#     ./apps/service-*/src/proto/*.proto

SRC_DIR="./libs/grpc-types/src/protos/*.proto"
DEST_DIR="./libs/grpc-types/src/protos/"
IMPORT_DIR="./libs/grpc-types/src/protos/"

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts_proto"


yarn protoc \
    -I=${IMPORT_DIR} \
    --plugin=${PROTOC_GEN_TS_PATH} \
    --ts_proto_opt=snakeToCamel=false,nestJs=true,unrecognizedEnum=false \
    --ts_proto_out=${DEST_DIR} ${SRC_DIR}