# Dockerfile.frontend
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
