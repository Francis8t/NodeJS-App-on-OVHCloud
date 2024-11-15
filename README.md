# Deploying a Node.js App on OVHCloud with GitHub Actions

Automate your deployments with ease! This repository demonstrates how to set up a seamless CI/CD pipeline using GitHub Actions to deploy a Node.js application to an OVHCloud instance. By leveraging Docker, GitHub Actions, and OVHCloud, you can streamline your workflow and focus on building great applications.

For a detailed **step-by-step guide**, visit my Medium page: [From Code to Cloud: Deploying Node.js on OVHCloud with GitHub Actions](https://medium.com/@francis8t/from-code-to-cloud-deploying-node-js-on-ovhcloud-with-github-actions-5bc2ae5d08f0).

---

## Prerequisites

Before proceeding, ensure you have the following:
- An **OVHCloud account** with access to the OVHCloud Control Panel.
- A **GitHub repository** to store your Node.js application code.
- **Node.js** and **Docker** installed on your local machine for testing.
- A **DockerHub account** set up for storing Docker images.

---

## Steps Summary

### 1. Set Up Your OVHCloud Instance
- Create an instance via the OVHCloud Control Panel and configure its details (region, instance type, etc.).
- Retrieve your instance's public IP and access credentials.

### 2. Create a Simple Node.js Application
- Develop a basic Node.js app that responds with a message when accessed.
- Test the application locally to ensure it works.

### 3. Dockerize the Application
- Write a Dockerfile to containerize the Node.js app.
- Test the Docker container locally (optional).

### 4. Push the Docker Image to DockerHub
- Build and tag the Docker image.
- Push the tagged image to your DockerHub repository.

### 5. Configure GitHub Actions Workflow
- Create a `.github/workflows/deploy.yml` file to automate the CI/CD pipeline.
- Define steps for building, pushing Docker images, and deploying to OVHCloud via SSH.

### 6. Deploy to OVHCloud
- Use GitHub Secrets to store sensitive information like SSH keys and DockerHub credentials.
- Deploy the Dockerized application to your OVHCloud instance.

---

## Key Files in This Repository

- `app.js`: The Node.js application code.
- `Dockerfile`: Configuration for containerizing the application.
- `.github/workflows/deploy.yml`: The GitHub Actions workflow for CI/CD.

---

## How It Works

1. Code is pushed to the `master` branch, triggering the GitHub Actions workflow.
2. The workflow:
   - Checks out the repository.
   - Builds the Docker image.
   - Pushes the image to DockerHub.
   - SSHs into the OVHCloud instance and deploys the app.
3. The Node.js app is live on your OVHCloud instance, accessible via its public IP.

---

## Get Started
Clone this repository, set up your environment, and follow the steps to automate your deployments. For more details, visit the full guide on [Medium](https://medium.com/@francis8t/from-code-to-cloud-deploying-node-js-on-ovhcloud-with-github-actions-5bc2ae5d08f0).

---

Happy coding and deploying! 🚀
