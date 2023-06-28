import wordayImage from '../assets/wordayImage.png'
import SocialNetAPI from '../assets/SocialNetAPI.jpg'
import CleanFolio from '../assets/CleanFolio.png'
import TwitterStreaming from '../assets/TwitterStreaming.png'
import TravelJournal from '../assets/TravelJournal.png'
import homeAssistantSystem from '../assets/homeAssistantSystem.png'
import UnixFileSystem from '../assets/UnixFileSystem.png'

const projectData = [
    {
        name: 'Word of The Day- Worday : Chrome Extension',
        image: wordayImage,
        description:'Developed a multi browser extension which displays the word of day, definition, part of speech in the same tab obtained using REST API calls and can mark the word as favorite to be accessed later using JavaScript, HTML and CSS.',
        technologiesUsed: ['JavaScript', 'HTML', 'CSS','wordnik'],
        sourcecode: 'https://github.com/Nandangonchikar/Worday---Word-of-the-day',
        Preview: 'https://chrome.google.com/webstore/detail/worday-word-of-the-day/fhmkkcmbpnbgkdeamhlagkkglhiphgep'
    },
    {
        name: 'SocialNet-API',
        image: SocialNetAPI,
        description:'Developed and deployed a robust RestAPI client for a social media platform using Python and Postgres, utilizing technologies such as Postman, FastAPI, and Docker. Implemented essential features like user registration,authentication, upvoting, and downvoting. Successfully deployed the application on Heroku, ensuring seamless functionality and performance for users',
        technologiesUsed: ['Python','fastAPI', 'Postgres', 'Docker','Heroku','Github','CI/CD'],
        sourcecode: 'https://github.com/Nandangonchikar/SocialNet-API',
        Preview: 'https://hub.docker.com/repository/docker/nandangonchikar/socialnet_api/general'
    },
    {
        name: 'Portfolio',
        image: CleanFolio,
        description:'A simple portfolio template for developers',
        technologiesUsed: ['React', 'React-router', 'JavaScript', 'HTML','CSS'],
        sourcecode: 'https://github.com/Nandangonchikar/portfolio',
        Preview: ''
    },

    {
        name: 'Twitter Streaming Sentiment Analysis and Visualization',
        image: TwitterStreaming,
        description:'Performed sentiment analysis and data visualization on twitter live stream data, filtered by a topic connected through the messaging platform Apache Kafka using pySpark and the sentiment of tweets is visualized using Elastic search, Logstash and Kibana which ran on a local server',
        technologiesUsed: ['python', 'Spark', 'Kafka','Elasticsearch','Kibana','Docker'],
        sourcecode: 'https://github.com/Nandangonchikar/Twitter_sentiment_analysis- ',
        Preview: ''
    },
    {
        name: 'Travel Journal',
        image: TravelJournal,
        description:'A simple travel journal to store all the travel information with the location of the place along with some images.',
        technologiesUsed: ['React', 'HTML', 'CSS', 'JavaScript'],
        sourcecode: 'https://github.com/Nandangonchikar/React_travel_journal',
        Preview: 'https://nandangonchikar.github.io/React_travel_journal/'
    },
    {
        name: 'Intelligent Home Assistance System',
        image: homeAssistantSystem,
        description:'Programmed a system capable of performing OCR, detecting persons, responding to voice commands, and managing the home appliances autonomously using python and machine learning algorithms. Also, the system is designed to be controlled by the user through Internet from anywhere',
        technologiesUsed: ['Python', 'OpenCV', 'RaspberryPi', 'Arduino','ESP8266','IFTT','MQTT'],
        sourcecode: 'https://github.com/Nandangonchikar/Intelligent-Home-Assistance-System',
        Preview: ''
    },
    {
        name: 'Unix version 6 file system implementation',
        image: UnixFileSystem,
        description:'Implemented the Unix v6 file system with custom modifications and commands in Java language by formatting a simple text file as v6 file system. Implemented commands such as opening of and initializing the file system, creation and deletion of the files and directories, changing the path in the file system, listing the entries of the directories, copying the data from the external files into the file system and vice-versa.',
        technologiesUsed: ['Java', 'Unix'],
        sourcecode: 'https://github.com/Nandangonchikar/Unix-Filesystem',
        Preview: ''
    },
   

];

export default projectData;