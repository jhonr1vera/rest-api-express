# rest-api-express

**Description**  
CRUD app for products (en - es)

**Technologies**
+ NodeJS Express (including dependencies)
+ MySQL
+ JavaScript
+ Html
+ CSS

# start server

1. **Execute in terminal to install node-modules**
```
npm i --yes
```  
  
2. **You will need a database in MySQL (XAMMP) and connect it. Use a .env file to enter the database data. INSTRUCTIONS BELOW**. 

3. **Run server in terminal**
```
npm run dev
```

4. Finally, run app in: http://localhost:3000/


# database instructions

**Installing and configuration**

1. Create the host, user, password, and database in XAMPP.
2. Enter the data in a .env file **(you will find a .env.example)**. 
  
**Database estructure**  

The database will contain a table named ' new_product ' and the parameters below:

1. product_id (primary key) (auto-increment)
2. product_name (text)
3. product_price (float)
4. product_detail (text)
5. product_img (longtext)

