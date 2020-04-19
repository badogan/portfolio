const HeroContent = {
  name: "Basri Dogan",
  title: "Software Engineer",
  button1Content: "Projects",
  button2Content: "Blog Posts",
  logos: {
    aws: "devicon-amazonwebservices-plain-wordmark",
    react: "devicon-react-original-wordmark",
    nodejs: "devicon-nodejs-plain",
    express: "devicon-express-original",
    ruby: "devicon-ruby-plain-wordmark",
    mongodb: "devicon-mongodb-plain-wordmark",
    heroku: "devicon-heroku-original-wordmark",
    postgres: "devicon-postgresql-plain",
    css3: "devicon-css3-plain-wordmark",
    html5: "devicon-html5-plain-wordmark",
    docker: "devicon-docker-plain-wordmark",
    github: "devicon-github-plain-wordmark",
    js: "devicon-javascript-plain",
    mysql: "devicon-mysql-plain-wordmark",
    rails: "devicon-rails-plain-wordmark",
    python: "devicon-python-plain-wordmark"
  }
};

const ProjectsContent = [
  {
    name: "Meet Me In The Middle",
    description:
      "Web app allowing users to find shortlisted places in locations with approximate similar travel times for all entered postcodes. Also allows users to go to Google Maps for a selected place, share via Whatsapp or travel with CityMapper. Google Maps Places, nearbysearch API for shortlisted places. Utilized api.postcodes.io for geoding, nearestpostcode assessment",
    demoVideoURL: "https://youtu.be/YnpBwkC9IMg",
    sourceCodeURL: "https://github.com/badogan/experimental-design",
    liveSiteURL: "https://friendly-allen-734a93.netlify.com/",
    stackUsed: ["react", "ruby", "heroku", "postgres", "js", "rails"]
  },
  {
    name: "I Want My Book Back",
    description:
      "Users can use the site to keep track of people they have lent their books to. It demonstrates basic CRUD functionalities allowing users to create, view, update and delete their books. Web app with React frontend utilizing created from scratch backend Nodejs Express API with MongoDB. Live site deployed to Netlify and Heroku",
    demoVideoURL: "https://youtu.be/j8cNV0nLk3U",
    sourceCodeURL: "https://github.com/badogan/booktracker",
    liveSiteURL: "https://hungry-brattain-f49eab.netlify.com/",
    stackUsed: ["nodejs", "express", "mongodb", "react", "heroku", "js"]
  },
  {
    name: "News App",
    description:
      "Web application providing current news for various categories and countries. Pure Javascript on frontend achieved intense use and understanding of DOM interaction and modification. Ruby on Rails backend for signup, signin and signout. Uses Postgres db via ActiveRecords for persisting user-related data, including save-for-later functionality. 3rd party API consumption",
    demoVideoURL: "https://youtu.be/IYBPDYojZY8",
    sourceCodeURL: "https://github.com/badogan/newsAPIInitialInvestigation",
    liveSiteURL: "https://github.com/badogan/newsAPIInitialInvestigation",
    stackUsed: ["js", "rails", "ruby"]
  },
  {
    name: "Foody",
    description:
      "Web application allowing users to search, signup and book events. Also allows hosts to signup and create events and administrator to get basic usage data. Ruby on Rails app including use of ERB templates. Ruby on Rails for signup, signin, signout and management of various models for the site",
    demoVideoURL: "https://youtu.be/RKbrooxeM1M",
    sourceCodeURL: "https://github.com/anamecia/mod2app",
    liveSiteURL: "https://github.com/anamecia/mod2app",
    stackUsed: ["rails", "ruby", "postgres"]
  }
];

const BlogpostsContent = [
  {
    heading: "A retrospective: React and Form Components",
    description: "My journey with the bootcamp is continuing :) I also continue learning more about myself. One of the things I found out is that I am pretty efficient in grasping the big picture and primary key elements/differentiators of what I am learning.",
    url: "https://medium.com/@basri.dogan.71/a-retrospective-react-and-form-components-9fadf6268b4c"
  },
  {
    heading: "A retrospective: React and Form Components",
    description: "My journey with the bootcamp is continuing :) I also continue learning more about myself. One of the things I found out is that I am pretty efficient in grasping the big picture and primary key elements/differentiators of what I am learning.",
    url: "https://medium.com/@basri.dogan.71/a-retrospective-react-and-form-components-9fadf6268b4c"
  }
];

export { HeroContent, ProjectsContent, BlogpostsContent };
