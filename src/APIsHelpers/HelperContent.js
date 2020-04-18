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
      "Web app allowing users to find shortlisted places in locations with approximate similar travel times for all entered postcodes. Also allows users to go to Google Maps for a selected place, share via Whatsapp or travel with CityMapper.",
    imageURL: "./../images/MeetMeInTheMiddle.png",
    demoVideoURL: "https://youtu.be/YnpBwkC9IMg",
    sourceCodeURL: "https://github.com/badogan/experimental-design",
    liveSiteURL: "https://friendly-allen-734a93.netlify.com/",
    stackUsed: ["react", "ruby", "heroku", "postgres", "js", "rails"]
  },
  {
    name: "Meet Me In The Middle 2",
    description:
      "Web app allowing users to find shortlisted places in locations with approximate similar travel times for all entered postcodes. Also allows users to go to Google Maps for a selected place, share via Whatsapp or travel with CityMapper.",
    imageURL: "./../images/MeetMeInTheMiddle.png",
    demoVideoURL: "https://youtu.be/YnpBwkC9IMg",
    sourceCodeURL: "https://github.com/badogan/experimental-design",
    liveSiteURL: "https://friendly-allen-734a93.netlify.com/",
    stackUsed: ["react", "ruby", "heroku", "postgres", "js", "rails"]
  }
];

export { HeroContent, ProjectsContent };
