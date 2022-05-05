<!-- PROJECT SHIELDS -->
<div align="center">
<img alt="Mysql" src="https://img.shields.io/badge/Code-NodeJs-529e41?style=for-the-badge&logo=node.js"/>
<img alt="Javascript" src="https://img.shields.io/badge/Code-JavaScript-F7DF1E?style=for-the-badge&logo=javascript"/>
<img alt="Mysql" src="https://img.shields.io/badge/Code-Mysql-00758F?style=for-the-badge&logo=mysql"/><br>
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

  <h3 align="center"Create a corporate social network</h3>

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
          </ul>
        </li>
      </ul>
    </li>
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

For the backend side I used NodeJs and for the database, I used, as requested, Mysql.

* [Mysql](https://www.mysql.com/fr/)
* [NodeJs](https://nodejs.org/fr/)

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
7. At "Default Target Schema", press "New..." and write "groupomania".
8. You can now press "Start Import".

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
