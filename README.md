# Project Name: Skillz Syncer

Skillz Syncer is a platform designed to help coders network, find mentors, collaborate on projects, and discover opportunities. Whether you are a beginner looking to gain practical experience or an experienced developer seeking collaboration, SkillzSyncer connects you with like-minded individuals and teams to build, learn, and grow together.

## Features

- **User Authentication**: Secure sign-up and login system.
- **User Profiles**: Create and customize your profile with skills, bio, and experience.
- **Project Listings**: Post and search for projects to collaborate on.
- **Matching System**: Find projects that match your skills and interests.
- **Messaging**: Communicate with other users through a simple messaging system.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Vercel

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or remote instance)

### Clone the Repository

```bash
git clone https://github.com/yourusername/skillzsyncer.git
cd skillzsyncer
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT secret:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add the backend API URL:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

### Deployment

#### Deploying to Vercel

1. Push your code to a GitHub repository.

2. Go to Vercel and import your GitHub repository.

3. Follow the prompts to deploy both your frontend and backend. Vercel will automatically detect the appropriate settings from your project configuration.

## Usage

1. Sign up for a new account or log in with existing credentials.
2. Create your profile by adding your skills and bio.
3. Browse available projects or post your own.
4. Use the search/filter functionality to find projects that match your skills.
5. Start collaborating and messaging with other users.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Emmarie-Ahtunan/skillzsyncer/blob/main/LICENSE) file for details.

---

Thank you for using Skillz Syncer. Together, we can build, learn, and grow!
