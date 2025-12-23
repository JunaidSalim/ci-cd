# Backend Dockerfile
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
