DROP TABLE IF EXISTS workouts_yoga;

CREATE TABLE workouts_yoga
(
    id INT NOT NULL AUTO_INCREMENT,
    pose VARCHAR (100) NOT NULL,
    calories INT NOT NULL, 
    video VARCHAR (100) NOT NULL,
    users_id INT NOT NULL,
   
);


INSERT INTO workouts_yoga (pose, calories, video) VALUES ("downward facing dog", 100, "https://youtu.be/JmW6Ofblhtk");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("plank pose", 80,"https://youtu.be/pvIjsG5Svck");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("warrior one", 30, "https://youtu.be/k4qaVoAbeHM");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("warrior two", 34, "https://youtu.be/QbIrd6onJwQ");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("lotus pose", 90, "https://youtu.be/odKi0b2K4LY");
INSERT INTO workouts_yoga (pose, calories, video) VALUES ("cobra pose", 100, "https://youtu.be/zgvolE4NAH0");
