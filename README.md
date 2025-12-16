# CI/CD Pipeline with Docker and GitHub Actions

A full-stack React and Node.js/Express application demonstrating modern DevOps practices with automated CI/CD pipelines, Docker containerization, and cloud deployment.


## Overview

This project showcases a production-ready CI/CD pipeline that automatically builds, tests, and deploys an application to AWS EC2 instances using GitHub Actions and Docker containers stored in Amazon ECR.


### For Local Development (Without Docker):
- Node.js 22.x or higher
- npm 10.x or higher

### For Docker Development:
- Docker 20.x or higher
- Docker Compose 2.x or higher

### For CI/CD Setup:
- AWS Account with ECR and EC2 access
- GitHub repository with Actions enabled
- Gmail account for notifications (with App Password)

## Getting Started

### Setup Without Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JunaidSalim/ci-cd.git
   cd ci-cd
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the React frontend:**
   ```bash
   npm run build-react
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Setup With Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JunaidSalim/ci-cd.git
   cd ci-cd
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t ci-cd-app:latest .
   ```

3. **Run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

5. **View logs:**
   ```bash
   docker-compose logs -f
   ```

6. **Stop the application:**
   ```bash
   docker-compose down
   ```

## CI/CD Pipeline

### Workflow Overview

The project implements two automated workflows:

#### 1. Testing Environment (Pull Request Trigger)
- Triggers on pull requests to `main` branch
- Runs unit tests and linting
- Builds Docker image and pushes to Amazon ECR
- Deploys to Testing EC2 instance
- Sends email notification on completion

#### 2. Staging Environment (Merge Trigger)
- Triggers on merge to `main` branch
- Runs full test suite
- Builds and pushes Docker image to ECR
- Deploys to Staging EC2 instance
- Sends email notification on completion

### Pipeline Steps

1. **Code Checkout** - Fetch latest code from repository
2. **Dependency Installation** - Install Node.js dependencies
3. **Build** - Compile React application
4. **Test** - Run unit tests with coverage
5. **Lint** - Check code quality with ESLint
6. **Docker Build** - Create Docker image
7. **ECR Push** - Upload image to Amazon ECR
8. **Deploy** - SSH to EC2 and deploy container
9. **Notify** - Send email with deployment status


## Testing

### Run All Tests:
```bash
npm run test-react
```

### Run Tests with Coverage:
```bash
npm run test-react -- --coverage
```

### Run Linting:
```bash
npx eslint src/
```

## Deployment

### Manual Deployment

#### Without Docker:
```bash
# Install dependencies
npm install

# Build frontend
npm run build-react

# Start with PM2
pm2 start index.js --name ci-cd-app
```

#### With Docker:
```bash
# Build image
docker build -t ci-cd-app:latest .

# Run container
docker run -d -p 3000:3000 --name ci-cd-app ci-cd-app:latest
```

### Automated Deployment (CI/CD)

1. Create a feature branch
2. Make changes and commit
3. Create pull request to `main`
4. GitHub Actions deploys to Testing environment
5. Merge pull request after approval
6. GitHub Actions deploys to Staging environment

### Environment Variables

Configure the following secrets in GitHub repository settings:

**AWS Credentials:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_ACCOUNT_ID`
- `ECR_REPOSITORY`

**EC2 Configuration:**
- `EC2_TESTING_IP`
- `EC2_STAGING_IP`
- `EC2_SSH_KEY`

**Email Notifications:**
- `EMAIL_USERNAME`
- `GMAIL_APP_PASSWORD`
- `NOTIFICATION_EMAIL`

**Variables:**
- `EC2_HOST` (default: ubuntu)


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Acknowledgments

This project builds upon the original [ReactNodeTesting](https://github.com/eljamaki01/ReactNodeTesting) repository created by [eljamaki01](https://github.com/eljamaki01). The base application code, including the React frontend and Express backend, was adapted from this repository. Our contribution focuses on implementing a comprehensive CI/CD pipeline with Docker containerization, GitHub Actions workflows, and automated deployment to AWS infrastructure.

**Original Repository:** [https://github.com/eljamaki01/ReactNodeTesting](https://github.com/eljamaki01/ReactNodeTesting)

We extend our gratitude to the original author for providing an excellent foundation for demonstrating modern DevOps practices and automation workflows.

---
