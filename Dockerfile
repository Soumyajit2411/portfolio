# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the React app
CMD ["yarn", "start"]
