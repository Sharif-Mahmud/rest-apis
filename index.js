	import jsonServer from "json-server";

    // setup json server
    const server = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middleware = jsonServer.defaults();

    // use all setup
    server.use(middleware);
    server.use(router);

    // listen server
    server.listen(5050, ()=>{
    console.log(`Server is running port on 5050`);
    });