from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission  

class CustomUser(AbstractUser):
    user_type = models.CharField(
        max_length=10,
        choices=[('patient', 'Patient'), ('doctor', 'Doctor')],
        default='patient'
    )
    def __str__(self):
        return self.username

    
class Message(models.Model):
    text = models.TextField()
    sender = models.CharField(max_length=50, choices=[('patient', 'Patient'), ('doctor', 'Doctor')])
    doctor = models.CharField(max_length=100)
    patient = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender} - {self.timestamp}: {self.text}"



