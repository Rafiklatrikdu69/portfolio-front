# Mon portfolio 

## Pour lancer Mysql :
```docker run --name mysql_db  -p 3306:3306 rafik1212/mysql-portfolio ```
## Pour lancer NestJs
```docker run --link mysql_db -p 80:3000 rafik1212/nestjs-app:latest ```
## Pour lancer Angular 
```bash
 docker run -d -p 3000:80  rafik1212/portfolio:latest ```
