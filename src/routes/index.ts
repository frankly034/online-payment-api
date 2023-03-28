import express from 'express';
import paystackRoute from './paystack';

const router = express.Router();

const allRoutes = [
  {
    path: '/paystack',
    route: paystackRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
