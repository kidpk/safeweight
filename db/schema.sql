DROP DATABASE IF EXISTS workouts_db;

CREATE DATABASE workouts_db;
USE workouts_db;


DROP TABLE IF EXISTS workouts_cardio;

CREATE TABLE workouts_cardio
(
    id INT NOT NULL AUTO_INCREMENT,
    workout VARCHAR (100) NOT NULL,
    duration INT NOT NULL,
    calories INT NOT NULL, 
    video VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS workouts_resistance;

CREATE TABLE workouts_resistance
(
    id INT NOT NULL AUTO_INCREMENT,
    workout VARCHAR (100) NOT NULL,
    duration INT NOT NULL,
    calories INT NOT NULL,
    video VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)   
);
DROP TABLE IF EXISTS workouts_yoga;

CREATE TABLE workouts_yoga
(
    id INT NOT NULL AUTO_INCREMENT,
    pose VARCHAR (100) NOT NULL,
    calories INT NOT NULL, 
    video VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)  
);

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR (100),
    gender CHAR(1),
    age INT,
    email VARCHAR(30),
    passwd VARCHAR(20),
    weight INT,
    PRIMARY KEY (id)
    
);

INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Olivier", "M", 27, "joe@joe.com","pass123",  230);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Josh", "M", 28, "joe@joe.com","pass123", 175);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Patrick", "M", 35,"joe@joe.com", "pass123", 160);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Jerry", "M", 22,"joe@joe.com", "pass123", 210);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Martina", "F", 25,"joe@joe.com","pass123",  165);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Stefan", "M", 18,"joe@joe.com","pass123",  189);
INSERT INTO users (user_name, gender, age, email, passwd, weight) VALUES ("Lois", "F", 21,"joe@joe.com", "pass123", 185);

INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("running", 60, 280, "https://www.youtube.com/watch?v=1g8mqfNvSHA" );
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("swimming", 50, 400,"https://www.youtube.com/watch?v=DDUWSZw9G9M" );
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("jumping rope", 30, 280,"https://www.youtube.com/watch?v=NkXDy8K-1jY");
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("power walking", 30, 300, "https://www.youtube.com/watch?v=erK4_3OuUlY" );
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("nordic walking", 45, 300, "https://www.youtube.com/watch?v=zAmsHhc2zCw&list=TLPQMDYwMzIwMjD_XG9U-DG2cw&index=1" );
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("rowing", 60, 250, "https://www.youtube.com/watch?v=L3DDYjUOlJg");
INSERT INTO workouts_cardio (workout, duration, calories, video ) VALUES ("stair climber", 30, 350, "https://www.youtube.com/watch?v=ST-5lD69XqU" );

INSERT INTO workouts_yoga (pose, calories, video) VALUES ("downward facing dog", 100, "https://youtu.be/JmW6Ofblhtk");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("plank pose", 80,"https://youtu.be/pvIjsG5Svck");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("warrior one", 30, "https://youtu.be/k4qaVoAbeHM");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("warrior two", 34, "https://youtu.be/QbIrd6onJwQ");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("lotus pose", 90, "https://youtu.be/odKi0b2K4LY");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("cobra pose", 100, "https://youtu.be/zgvolE4NAH0");


INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("kettlebells", 70, 400, "https://www.youtube.com/watch?v=6l2Iu26oWW8" );
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("medicine ball",  40, 320, "https://www.youtube.com/watch?v=-0TMFnoE9Cw" );
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("lunges", 60, 400, "https://www.youtube.com/watch?v=rvqLVxYqEvo");
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("chin ups", 15, 315, "https://www.youtube.com/watch?v=1rquLXQD_4c" );
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("push ups", 15, 315, "https://www.youtube.com/watch?v=Eh00_rniF8E");
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("yoga", 40, 250, "https://www.youtube.com/watch?v=E1K0CiGmBxA");
INSERT INTO workouts_resistance (workout, duration, calories, video) VALUES ("dumbbell training", 10, 300, "https://www.youtube.com/watch?v=1KYPZ-Jzo3w");
