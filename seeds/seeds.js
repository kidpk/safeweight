// const { ExampleModel } = require('../models');
const sequelize = require('../config/connection');

// define your sequelize seeds here
INSERT INTO users (user_name, sex, age, weight) VALUES ("Olivier", true, 27, 230);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Josh", true, 28, 175);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Patrick", true, 35, 160);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Jerry", true, 22, 210);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Martina", false, 25, 165);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Stefan", true, 18, 189);
INSERT INTO users (user_name, sex, age, weight) VALUES ("Lois", false, 21, 185);

INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("running", 60, 280, "https://www.youtube.com/watch?v=1g8mqfNvSHA", 1 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("swimming", 50, 400,"https://www.youtube.com/watch?v=DDUWSZw9G9M", 2 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("jumping rope", 30, 280,"https://www.youtube.com/watch?v=NkXDy8K-1jY",3 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("power walking", 30, 300, "https://www.youtube.com/watch?v=erK4_3OuUlY", 4 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("nordic walking", 45, 300, "https://www.youtube.com/watch?v=zAmsHhc2zCw&list=TLPQMDYwMzIwMjD_XG9U-DG2cw&index=1", 5 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("rowing", 60, 250, "https://www.youtube.com/watch?v=L3DDYjUOlJg", 6 );
INSERT INTO workouts_cardio (workout, duration, calories, video, users_id ) VALUES ("stair climber", 30, 350, "https://www.youtube.com/watch?v=ST-5lD69XqU", 7 );

INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("kettlebells", 70, 400, "https://www.youtube.com/watch?v=6l2Iu26oWW8", 1 );
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("medicine ball",  40, 320, "https://www.youtube.com/watch?v=-0TMFnoE9Cw", 2 );
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("lunges", 60, 400, "https://www.youtube.com/watch?v=rvqLVxYqEvo", 3 );
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("chin ups", 15, 315, "https://www.youtube.com/watch?v=1rquLXQD_4c", 4 );
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("push ups", 15, 315, "https://www.youtube.com/watch?v=Eh00_rniF8E",5 );
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("yoga", 40, 250, "https://www.youtube.com/watch?v=E1K0CiGmBxA", 6);
INSERT INTO workouts_resistance (workout, duration, calories, video, users_id) VALUES ("dumbbell training", 10, 300, "https://www.youtube.com/watch?v=1KYPZ-Jzo3w", 7);
