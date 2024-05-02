# Use Node.js image as base
FROM node:18-alpine AS builder

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Use Nginx image as base for serving the built application
FROM nginx:alpine

# Copy the built Next.js application from the previous stage to the NGINX server
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start NGINX server
CMD ["nginx", "-g", "daemon off;"]
