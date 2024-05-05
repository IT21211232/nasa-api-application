# About the project

This project is a web application built for fetching and displaying data from the NASA APIs. The APIs used in the project are Astronomy Picture of the Day, Earth Imagery, and Mars Rover Photos. This application takes use of React js and sophisticated technologies such as tailwind CSS, along with Firebase for user management.

# Chosen APIs and how they were used

- **Astronomy Picture of the Day**: Users get to view daily uploaded content about the universe. The data returned from this API includes images, explanations, etc.

- **Mars Rover Photos**: This api returns a bunch of fascinating images captured by the NASA's Mars Rover. It allows users to witness the wonderful nature of our neighbouring planet.

- **Earth Imagery**: Users can simply type in a keyword and get hundreds of images related to that.

# Technologies used

- **React** : The project is built using React which is a popular javascript library.
- **Tailwind**: A utility-first CSS framework packed with classes to make the process of development easy and efficient.
- **Firebase user authentication**: Firebase authentication is used for authentication of the user.

# Installation of the project

To run the project locally, follow the installation instructions provided in the README.md file. Once installed, users can access the application to explore the wonders of space, discover captivating images, and engage with an immersive user experience.

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory

3. Use your favorite IDE to open the project
   Eg: VS Code

4. Install the necessary packages:

   ```bash
   npm install

   ```

5. Run the project on your local machine:
   ```bash
   npm start
   ```

# Hosted website link

- **Link**: https://earnest-marigold-daa848.netlify.app/
- **To open the hosted website click on the above link**

# User Credentials

- **Username**: it21211232@my.sliit.lk
- **password**: Tester432

# Challenges faced and how they were resolved

- **Problem**: Integrating with NASA APIs often requires an API key for authentication. Managing API keys securely and ensuring they are included in the API requests.
- **solution**: Use environment variables to securely store API keys. Ensure that API keys are kept out of version control by adding them to a .env file and using a package like dotenv to load them into your application.

- **Problem**: Fetching data from NASA APIs asynchronously and efficiently while ensuring a smooth user experience .
- **solution**: Utilize asynchronous JavaScript techniques such as Promises, async/await, and libraries like Axios to fetch data from NASA APIs.
