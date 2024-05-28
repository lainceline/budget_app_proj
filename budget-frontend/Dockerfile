# Dockerfile
FROM node:14

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
