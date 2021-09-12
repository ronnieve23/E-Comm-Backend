# E-Comm-Backend 

![MIT BADGE](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
This Repository contains refactored code for Rutgers Coding Bootcamp's Challenge 13 "E-commerce Back End". 

[CLICK HERE TO VIEW THE ORIGINAL CODE](https://github.com/coding-boot-camp/fantastic-umbrella).

For this This week's challenge, we were tasked to build the back end for an e-commerce site. We'll be taking a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

The app utilizes Node.js, Express.js,MySQL, the MySQL2 package, the Dotenv package , and the Sequelize package.


 ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Demonstration](#demonstration)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)



## Installation
1. Download and install Node.js from https://nodejs.org/en/download/

2. Download and install MySQL Community Server from https://dev.mysql.com/downloads/mysql/ . For a full installation guide of MySQL on your machine, please visit the following link: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide.

3. Clone the repository OR download the code from https://github.com/ronnieve23/E-Comm-Backend

4. Open the cloned/downloaded repository (E-Comm-Backend) in VS Code.

5. Open the terminal inside VS code and type "npm i"; wait for the installation to finish.

6. Still inside VS code, at the root of the folder, make a ".env" file. Have the following entries inside the file:
        
        1. DB_NAME='ecommerce_db'
        2. DB_USER=''
        3. DB_PW=''
7. Enter Your mysql user name and password inside the quotes of lines 2 and 3 on the .env file.

8. In the terminal, type "mysql -u username -p" (replace username with your mysql username) and hit enter. You will be asked to enter the password you set up for MySQL and the MySQL command line should initiate.

9. Run the following MySQL commands in order:

        a. source db/db.sql       
        b. quit
        
10. In the terminal, type "npm run seed".

11. Once more in the terminal, type "npm start"

12. Access your localhost through an API platform of your choice. For this project, INSOMNIA was used. Refer to the demo video below for usage.


 ## Demonstration
 For the purposes of this demo, the tables have been pre-filled with some values already.
 
 [CLICK ME TO SEE A VIDEO OF HOW THE APP IS USED](https://www.youtube.com/watch?v=LEaKqEkAj2Q)


 ## Contributing

 You can contribute to the development of the app by sending suggestions to Ronnieve_Romero@yahoo.com

 ## Questions 

  For any questions, please feel free to reach out to me at the following:

  Github: https://github.com/ronnieve23

  Email: Ronnieve_Romero@yahoo.com

  ## License

 ![MIT BADGE](https://img.shields.io/badge/License-MIT-blue.svg)

  The packages used in this app are licensed under the MIT license. To read more about the MIT license, please click the following link:

  https://choosealicense.com/licenses/mit/
