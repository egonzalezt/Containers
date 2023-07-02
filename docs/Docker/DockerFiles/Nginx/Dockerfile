# Use the Ubuntu base image
FROM ubuntu:latest

# Install Nginx and dependencies
RUN apt-get update && \
    apt-get install -y nginx

# Copy a custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /var/www/html
# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
