# Dockerfile
FROM python:3.8-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libmariadb-dev \
    pkg-config

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the application code
COPY . .

# Copy the wait-for-it script
COPY wait-for-it.sh /app/wait-for-it.sh

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Run migrations and start the server
CMD ["sh", "-c", "/app/wait-for-it.sh db:3306 -- python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
