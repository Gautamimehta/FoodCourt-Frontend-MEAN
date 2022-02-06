# FoodCourt-MEAN


# Modern Web Application using MEAN stack

This is a basic boilerplate for the MEAN stack ([MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com/), [AngularJS](https://angularjs.org/) and [Node.js](https://nodejs.org)) on [IBM Cloud](https://cloud.ibm.com).

This application uses the [IBM Cloud Databases for MongoDB service](https://cloud.ibm.com/catalog/services/databases-for-mongodb) and [Node.js runtime](https://cloud.ibm.com/docs/runtimes/nodejs?topic=Nodejs-nodejs_runtime) on IBM Cloud.

The code and detailed steps are discussed in the [IBM Cloud solution tutorial](https://cloud.ibm.com/docs/solution-tutorials?topic=solution-tutorials-tutorials) titled [Modern web application using MEAN stack](https://cloud.ibm.com/docs/solution-tutorials?topic=solution-tutorials-mean-stack).

<img src="ReadME-Images/Architecture.png">

#### Features
- MVC project structure
- Create, edit and delete user accounts
- Authentication with username/password
- Protected routes that can only be accessed by authenticated users
- Bootstrap CSS framework
- HTTPS built-in if deployed to [IBM Cloud](#deploy-to-ibm-cloud)
- [Mongoose](https://github.com/Automattic/mongoose) for MongoDB interactions.
- [PassportJS](http://passportjs.org) for authentication, with over 300 authentication strategies to pick from.

## Application Requirements
- [Node.js & NPM](https://nodejs.org/en/download/)
- [IBM Cloud Databases for MongoDB](https://cloud.ibm.com/catalog/services/databases-for-mongodb)
- [Cloud Foundry Command Line Tool](https://docs.cloudfoundry.org/devguide/installcf/)

## Files & Folders

| File                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| [**manifest.yml**](./manifest.yml) | File that defines deployment paramaters. [More info here](http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)
| [**.env.example**](./.env.example) | Set custom [environment variables](https://en.wikipedia.org/wiki/Environment_variable) for your application. This is the proper way to store credentials and other sensitive values.
| [**server.js**](./server.js) | Main server file that the Node.js runtime uses. It contains all the server logic.
| [**/server**](./server) | Folder for files used by the Node.js server
| [/server/models/**user.model.js**](./server/models/user.model.js) | Model for storing users in MongoDB
| [**/public**](./public) | Folder for files delivered to users, such as html and css files
| [/public/js/**app.js**](./public/js/app.js) | Angular application for manipulating and rendering data in browser

## Application
- **MongoDB** stores user account information and persists sessions (so that a server crash does not log out all users.)
- **Express** functions Node.js middleware to handle all HTTP requests and routing.
- **Angular** handles HTML templating and data manipulation.
- **Node.js** is the runtime for the application.

There is also generous commenting throughout the application which helps explain critical parts of the application.

## Running locally

1. Clone or download this repo onto your machine.
1. Install [application requirements](#application-requirements) if not done so already.
1. Open application directory in your terminal and run `npm install`
1. If you don't have an account, [create a free one here](https://cloud.ibm.com).
1. Run `node server.js` to start your app
1. Open a browser to the link provided in the terminal prompt to view your app


