from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from budget.models import Income, Expense

class BudgetAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.income = Income.objects.create(amount=5000.00, description='Salary')
        self.expense1 = Expense.objects.create(amount=1500.00, description='Rent')
        self.expense2 = Expense.objects.create(amount=200.00, description='Utilities')

    def test_get_incomes(self):
        response = self.client.get(reverse('income-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_expenses(self):
        response = self.client.get(reverse('expense-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
