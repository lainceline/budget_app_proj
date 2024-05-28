# Personal Budgeting Application

This is a Personal Budgeting Application that helps users manage their finances by tracking income, expenses, and budgets. The application consists of a Django backend, a React frontend, and uses MySQL as the database. The project is containerized using Docker and Docker Compose.

## Features

- Track income and expenses
- Display lists of income and expenses
- Add, edit, and delete income and expense entries
- Sample data for quick setup and testing

## Technologies Used

- Django
- Django REST Framework
- React
- MySQL
- Docker
- Docker Compose
- Axios

## Prerequisites

- Docker and Docker Compose installed on your machine
- Python 3.8 or later
- Node.js and npm

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/lainceline/personal-budgeting-app.git
cd personal-budgeting-app
```

### 2. Set Up Backend

#### Create a Virtual Environment and Activate It

```bash
python -m venv budget_app_venv
source budget_app_venv/bin/activate  # For Unix-based systems
# or
.\budget_app_venv\Scripts\activate  # For Windows
```

#### Install Backend Dependencies

```bash
pip install -r budget_app/requirements.txt
```

#### Environment Variables

Create a `.env` file in the root directory of the project:

```dotenv
DB_NAME=budget_db
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_HOST=db  # Use 'localhost' for local development
DB_PORT=3306
TEST_DB_NAME=test_budget_db
ALLOWED_HOSTS=localhost,127.0.0.1,web
```

### 3. Set Up Frontend

#### Install Frontend Dependencies

```bash
cd budget-frontend
npm install
```

### 4. Run the Application Using Docker Compose

#### Build and Start the Services

```bash
docker-compose up --build
```

This command will start the following services:

- `web`: Django backend running on `http://localhost:8000/`
- `frontend`: React frontend running on `http://localhost:3000/`
- `db`: MySQL database

### 5. Load Sample Data

To load the sample data into the database, run:

```bash
docker-compose exec web python manage.py loaddata budget/fixtures/sample_data.json
```

### 6. Running Tests

#### Backend Tests

To run backend tests, execute:

```bash
docker-compose exec web python manage.py test
```

#### Frontend Tests

To run frontend tests, execute:

```bash
cd budget-frontend
npm test
```

## Project Structure

```
personal-budgeting-app/
├── budget_app/
│   ├── budget/
│   │   ├── fixtures/
│   │   │   └── sample_data.json
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── budget_app/
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   ├── requirements.txt
│   └── Dockerfile
├── budget-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Income.js
│   │   │   ├── Expense.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
├── .env
├── docker-compose.yml
└── README.md
```

## Notes

- Ensure Docker and Docker Compose are running correctly on your machine.
- The `.env` file should contain the correct database credentials and other necessary environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
