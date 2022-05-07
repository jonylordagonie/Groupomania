<!-- PROJECT SHIELDS -->
<div align="center">
<img alt="HtML" src="https://img.shields.io/badge/Code-HTML5-E54C21?style=for-the-badge&logo=html5"/>
<img alt="Javascript" src="https://img.shields.io/badge/Code-JavaScript-F7DF1E?style=for-the-badge&logo=javascript"/>
<img alt="Angular" src="https://img.shields.io/badge/Code-Angular-DD0031?style=for-the-badge&logo=angular"/>
<img alt="Mysql" src="https://img.shields.io/badge/Code-NodeJs-529e41?style=for-the-badge&logo=node.js"/>
<img alt="Mysql" src="https://img.shields.io/badge/Code-Mysql-00758F?style=for-the-badge&logo=mysql"/><br>
<img alt="Css" src="https://img.shields.io/badge/Style-Css3-0070BB?style=for-the-badge&logo=css3"/>
<img alt="Sass" src="https://img.shields.io/badge/Style-Sass-D68DB1?style=for-the-badge&logo=sass"/><br>
<img alt="Canva" src="https://img.shields.io/badge/Tools-Canva-0CBEC8?style=for-the-badge&logo=canva"/>
<img alt="Npm" src="https://img.shields.io/badge/Tools-NPM-CC3534?style=for-the-badge&logo=npm"/>
<img alt="Github" src="https://img.shields.io/badge/Tools-GitHub-1B1F23?style=for-the-badge&logo=github"/>
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jonylordagonie/QuentinMoreau_7_01042022">
    <img src="https://user.oc-static.com/upload/2019/09/04/15676009353158_image2.png" alt="Logo">
  </a>

  <h3 align="center">Create a corporate social network</h3>

  <p align="center">
    Read this README in order to properly use and install the project!
    <br />
    <a href="https://github.com/jonylordagonie/QuentinMoreau_7_01042022/blob/main/README.md"><strong>See document</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#build-with">Build With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#preresquisites">Preresquisites</a></li>
        <li>
          <a href="#installation">Installation</a>
          <ul>
             <li><a href="#database">Database</a></li>
            <li><a href="#backend">Backend</a></li>
            <li><a href="#frontend">Frontend</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The Groupomania project is the latest project of the Openclassrooms Web Developer training.
In this one we must create a social network for the company Groupomania so that the employers can exchange freely.
For this project we are free to choose the frontend framework of our choice. Backend side we had to use Mysql.
Finally, the company's communication officer must have control over the interactions of the employees.
This project must bring together two features, that of having a discussion forum as well as that of being able to share images or gifs.
Before launching the final version, we must present an intermediate step where only one of the two features is implemented.
It is this intermediate stage that I present to you here.

<p align="right">(<a href="#top">back to top</a>)</p>

### Build With

For this project I chose to carry it out using the Angular framework for the frontend part, on the backend side I used NodeJs and for the database, I used, as requested, Mysql.

* [Mysql](https://www.mysql.com/fr/)
* [NodeJs](https://nodejs.org/fr/)
* [Angular](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Now is the time to make this project work. The following instructions are for installing and running the project locally. No instructions will be given here to put it online.<br>
I show you a way to install it locally but there is another way to do it. You can choose the method you want.

### Preresquisites

To run the project you will need the latest version of NodeJs, a mysql database manager, and a code editor.<br>
I put you the links of what I would use for this installation:

* [Mysql](https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7152681-installez-le-sgbd-mysql) : I let you read the course on the installation according to your version.
* [NodeJs](https://nodejs.org/en/) : Required to run the backend.
* [Visual Studio Code](https://code.visualstudio.com/) : I recommend this free editor which has an integrated terminal.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

_Here are the instructions for installing the project and running it. Of course, you must have installed the various prerequisites(<a href="#preresquisites">available here</a>)_

#### Database

1. Download the zip of the project available here: <a href="https://github.com/jonylordagonie/QuentinMoreau_7_01042022">Groupomania</a>
2. Unzip the project on your computer.
3. You can now open MySQL workbench and connect to your local instance.
4. In the menu, "Server" you will click on "Data Import"
6. Select "Import from Self-Contained File"
7. Click on the "..." button and select "groupomania.sql" on your computer.
8. At "Default Target Schema", press "New..." and write "groupomania".
9. You can now press "Start Import".

<p align="right">(<a href="#top">back to top</a>)</p>

#### Backend

1. Right click on the folder then "Open with Code" (Visual Studio Code logo)
2. Select the "api" folder
3. Create a new file called ".env"
4. In this file write:
   ```.env
   DB_HOST = localhost
   DB_USER = YourUser
   DB_PASSWORD = YourPasswword
   DB_DATABASE = groupomania
   TOKEN = My_Secret_Token
   ```
   _You will replace "YourUser" with your username to login to MySQL workbench by default "root". You will replace "YourPassword" with the password to connect to MySQL workbench_
5. In the menu, select "Terminal", "New terminal".
6. In this terminal write:
   ```npm
   cd api
   ```
7. Press enter
8. In this terminal write:
   ```npm
   npm install
   ```
 9. Press enter and wait for the downloads to complete.
10. In this terminal write:
    ```npm
    nodemon server
    ```
 11. Wait for the server to start and let it run.

<p align="right">(<a href="#top">back to top</a>)</p>

#### Frontend

1. NodeJs vminimal version (12.0.20)
2. Select the "client" folder.
3. Create a new file called ".env"
4. In this file, write:
   ```.env
   TOKEN = My_Secret_Token
   ```
5. In the menu, select "Terminal", "New Terminal".
6. In the terminal write:
   ```npm
   cd client
   ```
7. Press enter.
8. In the terminal write:
   ```npm
   npm install
   ```
 1. Press enter.
 2.  In the terminal write:
   ```npm
   ng serve
   ```
 10. Wait for the server to start and let it run.

_The installation of the project is now complete, it remains to use the project (it's the next part)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Now that the frontend, backend and database environment are correctly installed, all you have to do is test the project. To do this, go to your local page.

To find out which address you need to go to use the project, I invite you to look at the last terminal you used. You should get this message:
   ```
   ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
   ```
_Depending on the port the project is running on, you may have a different address._

All you have to do is go to the address on the message.

As far as users are concerned, you can create an account, however, you will be limited to the interaction of a classic user and not an administrator.

On the database you have installed, two users are already created. One with a normal user profile, the other with an administrator user profile. Here are the credentials to use them:<br>

User:<br>
email: test123@test.fr<br>
mot de passe: Test123.<br>

Administrator:<br>
email: admin@test.fr<br>
mot de passe: Admin123.<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Creating an account
- [x] Navigation on the different features
- [x] Homepage
    - [x] Displaying the last 5 forum topics 
    - [ ] Display of the last 5 Mania's
- [x] Forum
    - [x] Displaying topics in order of last modification
    - [x] Ability to create a new topic
    - [x] Ability to reply to a topic
    - [x] Ability to delete the subject (only for administrators)
    - [x] Ability to delete an answer (only for administrators)
- [x] Profil
    - [x] Ability to view their profile
    - [x] Ability to edit your profile
    - [ ] Ability to change your profil image
    - [x] Ability to delete your profile
    - [x] Ability to view another user's profile (only for admins)
    - [x] Ability to edit another user's profile (only for admins)
    - [x] Ability to delete another user's profile (only for administrators)
- [ ] Instamania
    - [ ] Display of Mania's in order of last modification
    - [ ] Ability to create a new Mania
    - [ ] Ability to respond to a Mania
    - [ ] Possibility to Like a Mania
    - [ ] Display of the number of likes of a Mania
    - [ ] Possibility to delete the Mania (only for administrators)
    - [ ] Ability to delete an answer (only for administrators)

<p align="right">(<a href="#top">back to top</a>)</p>
