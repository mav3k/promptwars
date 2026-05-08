FROM nginx:alpine

# Copy static files to nginx public directory
COPY index.html /usr/share/nginx/html/index.html
COPY src/ /usr/share/nginx/html/src/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
