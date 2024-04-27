import airbnb from '../assets/airbnb.png'
import kanban from '../assets/kanban.png'
import n64 from '../assets/n64.png'
import entertainment from '../assets/entertainment.png'
import spacewalk from '../assets/spacewalk.png'
import mapTools from '../assets/map-tools.png'
import springboot from '../assets/springboot.png'

export default function getProjects() {
    return [
        {
          imgSrc: airbnb,
          header: "Airbnb Clone - Team Full Stack Application",
          textContent: "This full stack React application was meant to mimic the look and functionality of the Airbnb website. Technologies used include React, JS, Tailwind, RESTful APIs, Nodejs.",
          githubUrl: "https://github.com/mcsp-A-team/a-team-airbnb-clone",
        },
        {
          imgSrc: kanban,
          header: "Kanban Board",
          textContent: "React full stack application with a PostgreSQL database which allows users to better track projects by assigning tasks and subtasks",
          githubUrl: "https://github.com/lowlyphe/kanban-project",
        },
        {
          imgSrc: n64,
          header: "Nintendo 64 Voting Poll",
          textContent: "Full stack application built with jQuery Node and Postgres that allows the community to vote on their favorite Nintendo 64 game",
          githubUrl: "https://github.com/lowlyphe/best-n64",
        },
        {
          imgSrc: entertainment,
          header: "Entertainment Web App",
          textContent: "Built as a dummy application to view a list of shows pulled from a database. Used to practice front end UI and UX using Tailwind",
          githubUrl: "https://github.com/lowlyphe/entertainment-web-app",
        },
        {
          imgSrc: spacewalk,
          header: "Space Walk - API Project",
          textContent: "First website I built. Used to practice making API calls. Functionality centers around using the NASA APIs to display various information about space",
          githubUrl: "https://github.com/lowlyphe/Space-Walk",
          liveUrl: "https://spacewalk.surge.sh/solar-positions.html"
        },
        {
          imgSrc: mapTools,
          header: "GIS Map Tools",
          textContent: "GIS Tools website that provides users with mapping tools letting them visualize AOIs and convert between AOI standards",
          liveUrl: "https://marianas-tools.surge.sh"
        },
        {
            imgSrc: springboot,
            header: "Academy Server",
            textContent: "Simple server with two RESTful endpoints for managing students and faculty stored in a Postgres database",
            githubUrl: "https://github.com/lowlyphe/academy-springboot-api"
          }
      ]
}