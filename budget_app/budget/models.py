from django.db import models

class Income(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=200)

class Expense(models.Model):
    amount = models.FloatField()
    description = models.CharField(max_length=200)
