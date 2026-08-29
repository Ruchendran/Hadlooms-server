export const registerTableQuery = `
create  table if not exists register(
id int auto_increment primary key,
name varchar(20),
email varchar(40),
password varchar(15)
)`;

