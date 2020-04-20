const HeroContent = {
  name: "Basri Dogan",
  title: null,
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
  },
  stayintouchLogos: [
    {
      fontLink: "fab fa-linkedin",
      externalLink: "https://www.linkedin.com/in/basri-dogan/"
    },
    {
      fontLink: "far fa-envelope",
      externalLink: "mailto:basri.dogan.71@gmail.com"
    },
    {
      fontLink: "fab fa-github",
      externalLink: "https://github.com/badogan"
    }
  ]
};

const ProjectsContent = [
  {
    name: "Meet In The Middle",
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
    heading: "Nodejs Express Middleware",
    description:
      "next() allows the “next” middleware function to do its job. People who develop code knows the importance of code hand overs. So, next() is providing just that without the need to even think about what is next",
    url:
      "https://medium.com/@basri.dogan.71/nodejs-express-middleware-6377a0194c59"
  },
  {
    heading: "A retrospective: React and Form Components",
    description:
      "Controlled input as used in React can save the value in state as the form changes. This controlled behaviour is key in React forms as it opens many possibilities due to the fact that such state can drive different behaviour in many other components on the page",
    url:
      "https://medium.com/@basri.dogan.71/a-retrospective-react-and-form-components-9fadf6268b4c"
  },
  {
    heading: "A bit of comparison on Javascript and Ruby array iterators",
    description:
      "Ruby’s methods will call a given block for each element in the array while Javascript would apply a function on the item being iterated. As per the syntax goes, Javascript is a bit “harder” given the fact that Ruby is designed to be English-like.",
    url:
      "https://medium.com/@basri.dogan.71/a-bit-of-comparison-on-javascript-and-ruby-array-iterators-3492d9ab1f6e"
  },
  {
    heading: "Starting to see the big picture…",
    description:
      "Obviously web development frameworks are also developed by programming languages — no magic here :). The ones I’d like to elaborate a bit more are : Ruby on Rails and Flask. RoR utilizes an MVC design pattern. Model holds business logic and data for the application. It also communicates with the database.",
    url:
      "https://medium.com/@basri.dogan.71/starting-to-see-the-big-picture-c9f211dd91eb"
  },
  {
    heading: "Baby Steps Continued— Pair-programming, Tests & Documentation",
    description:
      "TDD from the very start, however, we now have the first set of tests which we can use in the later versions. How so? Regression testing is important when big software projects come to life. Full disclosure: I used to be part of such big projects. I know how important being able to run regression",
    url:
      "https://medium.com/@basri.dogan.71/baby-steps-continued-pair-programming-tests-documentation-c382d6c60d23"
  },
  {
    heading: "Re-using with an intent",
    description:
      "delimiters_array is simply an array of every single delimiter that you would want to get rid of. Then comes the Regexp which is used to match a pattern against a string. It is used in conjunction with one of its methods - union. And the last one is the good old split. That’s it!",
    url:
      "https://medium.com/@basri.dogan.71/re-using-with-with-an-intent-6678b74c01db"
  }
];

export { HeroContent, ProjectsContent, BlogpostsContent };
