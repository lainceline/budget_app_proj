from rest_framework import viewsets
from .models import Income, Expense
from .serializers import IncomeSerializer, ExpenseSerializer

class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.query.all()
    serializer_class = IncomeSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.query.all()
    serializer_class = ExpenseSerializer
