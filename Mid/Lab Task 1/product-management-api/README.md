#Kaniz Fatema Rimi
#ID:23-55205-3
#Sec: B

# Database Setup Steps

1. Install PostgreSQL and open pgAdmin 4.
2. Connect to your PostgreSQL server.
3. Enter the database name: product-management-api.  
4. Create a .env file in the project root.
5. Add your PostgreSQL connection settings to .env.

# Installation and Run commands
pnpm install
npm run migration:run
npm run start:dev



# Endpoint List:
Products:
POST /products – Create  a product 
GET /products – Get all products  
GET /products/:id – Get the product with the given ID
PATCH /products/:id – Update the product with the given ID   
DELETE /products/:id – Delete a product   

Employees:
POST /employees – Create  an employee   
GET /employees – Get all  employees   
GET /employees/:id – Return the employee with the given ID  
PATCH /employees/:id – Update the employee with the given ID   
DELETE /employees/:id – Delete an employee   