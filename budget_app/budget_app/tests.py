# budget_app/tests.py

from django.test import TestCase
from .models.income import Income
from .models.expense import Expense

class IncomeModelTest(TestCase):
    def setUp(self):
        Income.objects.create(name="Salary", amount=5000)

    def test_income_creation(self):
        income = Income.objects.get(name="Salary")
        self.assertEqual(income.name, "Salary")
        self.assertEqual(income.amount, 5000)

class ExpenseModelTest(TestCase):
    def setUp(self):
        Expense.objects.create(name="Rent", amount=1500)

    def test_expense_creation(self):
        expense = Expense.objects.get(name="Rent")
        self.assertEqual(expense.name, "Rent")
        self.assertEqual(expense.amount, 1500)

# budget_app/tests.py (add to the same file)

from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models.income import Income
from .models.expense import Expense

class IncomeAPITest(APITestCase):
    def setUp(self):
        self.income = Income.objects.create(name="Salary", amount=5000)

    def test_get_incomes(self):
        url = reverse('income-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], "Salary")
        self.assertEqual(response.data[0]['amount'], "5000.00")

class ExpenseAPITest(APITestCase):
    def setUp(self):
        self.expense = Expense.objects.create(name="Rent", amount=1500)

    def test_get_expenses(self):
        url = reverse('expense-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['name'], "Rent")
        self.assertEqual(response.data[0]['amount'], "1500.00")
