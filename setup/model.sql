CREATE DATABASE day4;
\c day4;

CREATE TABLE users(
    userId SERIAL PRIMARY KEY ,
    username varchar(30) NOT NULL,
    email varchar(60) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE posts(
  postId SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
  description TEXT NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT null,
  deleted_at TIMESTAMP DEFAULT null
);

INSERT INTO posts (title, description, content)
VALUES ('IT sohasining mashxurligi nimada?', 'IT haqida yangiliklar...', 'IT sohasidagi texnologiyalar bilan bogliq bolib yuqori maoshlarga ega.');

INSERT INTO posts (title, description, content)
VALUES ('', 'IT haqida yangiliklar...', 'IT sohasidagi texnologiyalar bilan bogliq bolib yuqori maoshlarga ega.');

INSERT INTO users (username, password, email)
VALUES ('akrom', 'akrom', 'akromakrom000@gmail.com');
