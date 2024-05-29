# budget_app/serializers/income_serializer.py

from rest_framework import serializers
from budget_app.models.income import Income

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'
