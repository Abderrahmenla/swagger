import express from 'express';
const app = express();
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const options = {
  definition: {
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      version: '1.0.0',
      contact: {
        name: 'Abderrahmen Lahmedi',
      },
      servers: ['http://localhost:5000'],
    },
  },
  // ['.routes/*.js'] where to find the apis
  apis: ['app.js'],
};

const swaggerDocs = await swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes

/**
 * @swagger
 * /customers:
 *  get:
 *     description: Use to request all customers
 *     responses:
 *        '200':
 *         description: A successful response
 */

app.get('/customers', (req, res) => {
  res.send('Customer results');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
