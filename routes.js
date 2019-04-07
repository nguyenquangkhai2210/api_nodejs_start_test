import testController from "./controller/testController";

const routes = [
    // Auth routes
    {
        method: "POST",
        path: `/add`,
        handler: testController.createTest,
    },
    {
        method: "GET",
        path: `/id/{id}`,
        handler: testController.getById,
    },
    {
        method: "GET",
        path: `/key/{key}`,
        handler: testController.getByKey,
    },
];

export default routes;
