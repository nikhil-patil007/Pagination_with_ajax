from django.db import models

# Create your models here.

class lg_pro(models.Model):
    imaged = models.CharField(max_length=255)
    modeld = models.CharField(max_length=255)
    named = models.CharField(max_length=255)
    disd = models.CharField(max_length=255)
    sized = models.CharField(max_length=255)
    colord = models.CharField(max_length=255)
    categ = models.CharField(max_length=255)