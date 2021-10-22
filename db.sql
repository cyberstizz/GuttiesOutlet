create table users(
user_id varchar(20) primary key,
user_password varchar(20),
email_address unique,
physical_address
);

create table products(
    product_id primary key
);