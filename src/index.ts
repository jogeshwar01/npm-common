// Re-export stuff from errors and middlewares
export * from './errors/bad-request-error';
export * from './errors/custom-error';
export * from './errors/database-connection-error';
export * from './errors/not-authorized-error';
export * from './errors/not-found-error';
export * from './errors/request-validation-error';

export * from './middlewares/current-user';
export * from './middlewares/error-handler';
export * from './middlewares/require-auth';
export * from './middlewares/validate-request';

export * from './events/base-listener';
export * from './events/base-publisher';
export * from './events/subjects';
export * from './events/ticket-created-event';
export * from './events/ticket-updated-event';
export * from './events/types/order-status';
// to have cross language support, we cannot do it like this in typescript
// instead can use these 1)json-schema  2)protobuf  3)apache avro

export * from './events/order-cancelled-event';
export * from './events/order-created-event';

export * from './events/expiration-complete-event';

export * from './events/payment-created-event';

// COMMAND TO BE RUN
// 1 - npm login
// 2 - npm publish --access public
// 3 - npm run pub - set up in package.json
//   - build folder contains the bundled js files from ts
//   - do 'tsc --init' for tsconfig.json
//     npm install @js-ticketly/common  - to install in other services

// if we change something here and we want it to be reflected in the service its used
// first in common directory do npm run pub
// then go in the service using this - npm update @js-ticketly/common

// can check if container is running correct version
// can do exec -it into it and check the json file as well
// this is not needed, just informational