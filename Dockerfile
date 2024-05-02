# Use the official PHP image
FROM php:8.1-apache

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the application files to the container
COPY . .

# Expose port 80
EXPOSE 80