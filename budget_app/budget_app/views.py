# budget_app/views.py

from rest_framework import viewsets
from .models.income import Income
from .models.expense import Expense
from .serializers.income_serializer import IncomeSerializer
from .serializers.expense_serializer import ExpenseSerializer

class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
