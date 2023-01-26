# Assignment2
Web application for a company that sells products online.

## Database
<p>
<a href='https://drawsql.app/teams/tareq-g12/diagrams/assignment1'>Database Link</a>
</p>
<img src='https://i.ibb.co/nCZLByJ/image.png'>


## **How to Launch App Locally** :pushpin:

*  clone this repo by typing this command in the terminal:  
`git clone https://github.com/tareq-abuaqlain/Assignment1.git`

*  Run `npm i` to install the packages for the app as general.

*  Run `cd client` and `npm i` to install the packages for the client- React Js.

### Database Setup  :clipboard: 

make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```
### **Environment variables:**
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.
- create .env file
- add your Environment variables
```sh
DB_URL= # Your development PostgreSQL connect
NODE_ENV=development
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to [localhost](http://localhost:8080/) 
> To run client-side, In your terminal Type:    

    `cd client` => `npm start` then you will be able to run [localhost](http://localhost:3000/) 

Now you can view the app live in the Browser!:fire: 

## **Technologies** :computer: :-
- FrontEnd: **React JS**
- BackEnd: **Node JS & Express JS**
- Database: **PostgreSQL**
- Styling: **CSS3**
- Libraries: **AntDesign**


