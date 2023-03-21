import express from 'express';
import userController from '../controllers/userController';

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const controller = userController(dependencies);
    router.route('/')
        .post(controller.createUser);

    router.route('/')
        .get(controller.listUsers);

    return router;
};
export default createRouter;