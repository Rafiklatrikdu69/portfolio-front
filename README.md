# Portfolio

Ce projet contient une application NestJS pour le backend et une base de données MySQL, ainsi qu'une application frontend pour afficher le Portfolio.

## Instructions pour démarrer le projet

### Étape 1 : Lancer MySQL

Exécutez la commande suivante pour lancer un conteneur MySQL :

```bash
docker run --name mysql_db -p 3306:3306 rafik1212/mysql-portfolio:latest
```

### Étape 2 : Lancer La Back NestJs

Exécutez la commande suivante pour lancer le conteneur :

```bash
docker run --name nest-container --link mysql_db -p 80:3000 rafik1212/nestjs-app:latest
```
### Étape 3 : Lancer La Front Angular

Exécutez la commande suivante pour lancer le conteneur :

```bash
docker run -p 8081:80  rafik1212/portfolio:latest
``` 
