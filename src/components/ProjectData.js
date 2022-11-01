import st from "../images/SpaceTourism.JPG"
import at from "../images/AnshTourism.JPG"
import anshflix from "../images/Anshflix.JPG"
import moviepedia from "../images/Moviepedia.JPG"
import wa from "../images/WorkroomAutomation.JPG"
import ak from "../images/AnshKeep.JPG"
import ct from "../images/CryptoTracker.JPG"
import weatherApp from "../images/WeatherApp.JPG"
import slp from "../images/Signup Login Page.JPG"
import ap from "../images/Anshpay.JPG"

const projectData=[
    {
        id:1,
        img:anshflix,
        title:"ANSHFLIX",
        link:"https://ansh-flixx-7sb6nztwz-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","BOOTSTRAP","GIT"],
        info:["This site is a copy of Netflix (Unregistered) Website.","Created using React","This is a practice website. All the links are working except the footer link(linked to home page).","The Sign In page takes a valid email or valid number to go to next page.","The signup Link is working too."]

    },
    {
        id:2,
        img:ak,
        title:"ANSHKEEP",
        link:"https://ansh-keep-notes-77zhcf28a-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","BOOTSTRAP","LOCAL STORAGE","PAGINATION","GIT"],
        info:["A app similar to Google Keep","A practice project (CRUD) + Pagination + Search","The Key Features are added in Google Doc Document and link is provided below"],
        gDocsLink:"https://docs.google.com/document/d/e/2PACX-1vRXYEkeoGJ_ljGvaNgnRAmw5qZlNQFLWqGIHKA-7TzST-gw9poON4qDMIcQXLSF38PaHtXi1oGIGwwd/pub",
        
    },
    {
        id:3,
        img:wa,
        title:"WORKROOM AUTOMATION",
        link:"https://workroom-automation-project-11sb0rfqs-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","BOOTSTRAP","FIGMA","GIT"],
        info:["To create website Similar to Video Provided","This is a practice project provided by Workroom automation team . A figma file and a working flow video was provided for reference. This project is not responsive.","Figma link is provided below along with working video link"],
        videoLink:"https://drive.google.com/file/d/1xrOfz5EigNuqQLIG8shoUYmA6hu8dixG/view",
        gDocsLink:"https://www.figma.com/file/znAY6PiLWDmjzzzPk5R9lo/Workroom-Automation-(Assignment)"

    },
    {
        id:4,
        img:ct,
        title:"CRYPTO TRACKER",
        link:"https://crypto-tracker-97bpywp83-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","API","FIGMA","GIT"],
        info:["On Clicking Search Icon, a input box will appear which will take exact name of the crypto coin and will filter out the result.","On clicking name of cryto coin, a popup will appear carrying the details of that particular coin.","On clicking star next to name index, it will make that coin add to favourite section.","The Show rows input will filter the number of coins per page which can be shown.","On clicking the trash/delete icon in favourite section will remove that coin from favourite section.","Pagination has been done. By default 10 coins will be shown on one page, which can be changed using show rows input. Website is responsive."],
    },
    {
        id:5,
        img:moviepedia,
        title:"MOVIEPEDIA",
        link:"https://movie-pedia-5qf2kbr0u-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","API","LOCAL STORAGE","GIT"],
        info:["This is Wikepedia website for Movies.","The search bar will take a valid movie name and list of movies will be fetch using api and shown on screen.","The user can fav the movie by clicking on it and it will remain there unless deleted by user","Local storage is linked so that even on reload the fav movie will be saved.Website is responsive."],
    },
    {
        id:6,
        img:weatherApp,
        title:"WEATHER APP",
        link:"https://redux-weather-gkqt71y1z-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","API","REDUX","GIT"],
        info:["The search bar takes a valid City name and display current Weather for Same.","The Api data is fetch in store using Redux.","This is a Practice Project for Redux and Api."],
    },
    {
        id:7,
        img:slp,
        title:"SIGNUP LOGIN PAGE",
        link:"https://ansh-signup-login-page-lj57qjts6-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","FIREBASE","BOOTSTRAP"],
        info:["This website contain Signup page, Login page and a user page.","The signup page is linked with firbase authentication and validation is done using Formik and Yup library.","On registering user will be taken to user page.","On logging out user will be taken to sign in page which will take actual email and password that user crated in registration page to login back to user page.","User will stay login(even on refreshing the page) unless logged out."],
    },
    {
        id:8,
        img:at,
        title:"ANSH TOURISM",
        link:"https://ansh-tourismm-wsxmi4p5g-eransh1.vercel.app/",
        skills:["HTML","CSS","REACT.JS","JAVASCRIPT","FIREBASE","BOOTSTRAP"],
        info:["This is a Practice Tourism Website","The Front-end part of the Website is completely working. ","All the forms , Quicklinks ,are linked with firebase which stores data when submitted. ","Website is responsive"],
    },
    {
        id:9,
        img:ap,
        title:"ANSHPAY",
        link:"https://eransh1.github.io/AnshPay/",
        skills:["HTML","CSS","REACT.JS","FIREBASE"],
        info:["A practice Website To showcase my fictional AnshPay App","This is a front-end website only which have information regarding my newly launch fictional App that works similar to RazorPay.","The navbar links are working , and i have linked the contact page with a firebase website which store the data when hit on submit button.","This website is responsive."],
    },
    {
        id:10,
        img:st,
        title:"SPACE TOURISM",
        link:"https://eransh1.github.io/SpaceTourism/",
        skills:["HTML","CSS","FIGMA","BOOTSTRAP"],
        info:["To create a tourism website which aims its destination into Space!!","This project was a test provided by Fronted Mentor Website","The goal was to create the website from scratch using only html & css","They have provided the figma files for the project."],
    }
    
    
]
export default projectData