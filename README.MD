# Personal Budgeting Application

This is a personal budgeting application built using Django for the backend and React for the frontend. The application uses MySQL as the database and can be deployed using Kubernetes.

## Prerequisites

- Docker
- Docker Compose
- Kubernetes
- Minikube
- kubectl

## Getting Started

### Setting Up the Environment

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lainceline/budget_app_project.git
   cd personal-budgeting-app
   ```

2. **Set Up the Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Backend Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

### Using Docker Compose

1. **Build and Start the Containers**:
   ```bash
   docker-compose up --build
   ```

2. **Apply Migrations**:
   ```bash
   docker-compose exec web python manage.py migrate
   ```

3. **Load Sample Data**:
   ```bash
   docker-compose exec web python manage.py loaddata budget/fixtures/sample_data.json
   ```

4. **Create a Superuser** (Optional):
   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

5. **Access the Application**:
   - Backend: `http://localhost:8000`
   - Frontend: `http://localhost:3000`

### Using Kubernetes with Minikube

1. **Start Minikube**:
   ```bash
   minikube start
   ```

2. **Set Docker Environment to Minikube**:
   ```powershell
   & minikube -p minikube docker-env --shell powershell | Invoke-Expression
   ```

   ```bash
   eval $(minikube docker-env)
   ```

3. **Build Docker Images**:
   ```bash
   docker build -t budget_app:latest ./budget_app
   docker build -t budget-frontend:latest ./budget-frontend
   ```

4. **Apply Kubernetes Manifests**:
   ```bash
   kubectl apply -f k8s/mysql-deployment.yaml
   kubectl apply -f k8s/django-deployment.yaml
   kubectl apply -f k8s/react-deployment.yaml
   ```

5. **Verify Pods and Services**:
   ```bash
   kubectl get pods
   kubectl get services
   ```

6. **Access the Application**:
   ```bash
   minikube service react --url
   ```

## Running Tests

### Backend Tests

1. **Run Backend Tests**:
   ```bash
   docker-compose exec web python manage.py test
   ```

### Frontend Tests

1. **Install Frontend Test Dependencies**:
   ```bash
   cd budget-frontend
   npm install
   ```

2. **Run Frontend Tests**:
   ```bash
   npm test
   ```

## Directory Structure

```
personal-budgeting-app/
│
├── budget_app/                  # Django project directory
│   ├── budget/                  # Django app directory
│   ├── budget_app/              # Django project settings
│   ├── manage.py                # Django project management script
│   └── requirements.txt         # Python dependencies
│
├── budget-frontend/             # React project directory
│   ├── public/                  # Public assets
│   ├── src/                     # React source code
│   ├── package.json             # Node.js dependencies and scripts
│   └── package-lock.json        # Lockfile for Node.js dependencies
│
├── k8s/                         # Kubernetes manifests
│   ├── mysql-deployment.yaml    # MySQL deployment and service
│   ├── django-deployment.yaml   # Django deployment and service
│   └── react-deployment.yaml    # React deployment and service
│
├── docker-compose.yml           # Docker Compose configuration
└── README.md                    # Project README
```

## Contributing

Feel free to submit pull requests or open issues to improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` provides comprehensive instructions for setting up and running the application using Docker Compose and Kubernetes with Minikube, as well as running tests for both the backend and frontend. If you have any further questions or need additional information, please let me know!