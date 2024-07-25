# Build a Simple Inventory Management System
## Objective:
Create a RESTful API for managing an inventory of products. The API should support basic CRUD operations and include some business logic for managing stock levels and creating orders.
## Requirements: 
### Setup:
1. ✅ Use Node.js and Express.js to build the API.
2. ✅ Use a database (e.g., lowdb, mongodb) for data persistence.
3. ✅ Use CQRS pattern.
4. ✅ Include appropriate environment configuration using .env files if necessary.
### API:
1. Products:
   1. ✅ Add new endpoint
      GET /products: Retrieve a list of all products. 
   2. ✅ Add new endpoint
      POST /products: Create a new product (fields: name, description, price, stock; all required, max length 50).
2. Stock Management:
   1. ✅ Add a new endpoint
      POST /products/:id/restock: to increase the stock level of a product. 
   2. ✅ Add a new endpoint
      POST /products/:id/sell: to decrease the stock level of a product. Ensure the stock cannot go below zero.
3. Price Validation:
   1. ✅ Ensure that the price of a product is always positive.
4. Order Management:
   1. ✅ Add endpoints to manage orders:
      POST /orders: Create a new order (fields: customerId, products). 
   2. ✅ Implement logic to update stock levels when an order is placed. 
   3. ✅ Prevent orders from being placed if stock is insufficient.
### Validation:
1. ✅ Implement input validation for all endpoints using a library like Joi or express-validator.
### Error Handling:
1. ✅ Implement proper error handling for cases such as invalid input, resource not found, and server errors.
2. ✅ Return appropriate HTTP status codes and error messages.


### Potential imporvements:
- logging
- authentication
- pagination
- testing
- documentation
- running instructions
- contenerization