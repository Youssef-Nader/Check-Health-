from django.urls import path
from . import views

urlpatterns =[
    path('',views.home , name = "main-page"),
    path('dermatology/', views.dermatology, name='dermatology'),
    path('psychiatry/', views.psychiatry, name='psychiatry'),
    path('nutrition-dietetics/', views.nutrition, name='nutrition-dietetics'),
    path('cardiology/', views.cardiology, name='cardiology'),
    path('orthopedics/', views.orthopedics, name='orthopedics'),
    path('pulmonology/', views.pulmonology, name='pulmonology'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login'),  # changed from login to login_view
    path('logout/', views.logout_view, name='logout'), # added logout path
    path('patient/dashboard/', views.patient_dashboard, name='patient_dashboard'),
    path('doctor/dashboard/', views.doctor_dashboard, name='doctor_dashboard'),
    path('<str:specialty>/chat-patient/', views.chat_patient, name='chat_patient'),
    path('<str:specialty>/chat-doctor/', views.chat_doctor, name='chat_doctor'),    
    path('send_message/', views.send_message, name='send_message'),
    path('get_messages/', views.get_messages, name='get_messages'),
]