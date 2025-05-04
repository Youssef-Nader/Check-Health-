from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.http import JsonResponse, HttpResponse 
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from .models import Message, CustomUser
import json
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def home(request):
    return render(request, 'index.html')

def dermatology(request):
    return render(request, 'index1.html')

def psychiatry(request):
    return render(request, 'index2.html')

def nutrition(request):
    return render(request, 'index3.html')

def cardiology(request):
    return render(request, 'index4.html')

def orthopedics(request):
    return render(request, 'index5.html')

def pulmonology(request):
    return render(request, 'index6.html')

def signup(request):
    return render(request, 'index7.html')

def login(request):
    return render(request, 'index8.html')



def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            # Based on Auth typer
            if hasattr(user, 'customuser'):
                if user.customuser.user_type == 'patient':
                    return redirect('patient_dashboard')
                elif user.customuser.user_type == 'doctor':
                    return redirect('doctor_dashboard')
            else:
                return redirect('home')  # if auth type not found
        else:
            return render(request, 'index8.html', {'error': 'Invalid credentials'})
    return render(request, 'index8.html')


# Logout function
def logout_view(request):
    auth_logout(request)
    return redirect('home')


# show detail of patient function
@login_required
def patient_dashboard(request):
    return render(request, 'patient_dashboard.html')


# دالة لعرض صفحة الدكتور (محمية)
@login_required
def doctor_dashboard(request):
    # هنا ممكن تجيب بيانات خاصة بالدكتور
    return render(request, 'doctor_dashboard.html')


# دالة لعرض شات المريض مع دكتور معين
@login_required
def chat_patient(request, specialty):
    doctor_name = request.GET.get('doctor')
    patient_name = request.user.username
    messages = Message.objects.filter(doctor=doctor_name, patient=patient_name).order_by('timestamp')
    return render(request, 'chat-patient.html', {'doctor_name': doctor_name, 'specialty': specialty, 'messages': messages, 'patient_name': patient_name})

# دالة لعرض شات الدكتور مع مريض معين
@login_required
def chat_doctor(request, specialty):
    patient_name = request.GET.get('patient')
    doctor_name = request.user.username
    messages = Message.objects.filter(doctor=doctor_name, patient=patient_name).order_by('timestamp')
    return render(request, 'chat-doctor.html', {'doctor_name': doctor_name, 'specialty': specialty, 'messages': messages, 'patient_name': patient_name})


# دالة لإرسال رسالة
@csrf_exempt
def send_message(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            message_text = data.get('text')
            sender = data.get('sender')
            doctor_name = data.get('doctor')
            patient_name = data.get('patient')

            Message.objects.create(text=message_text, sender=sender, doctor=doctor_name, patient=patient_name)
            return JsonResponse({"status": "success"})
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid JSON"}, status=400)
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method"}, status=400)


# دالة للحصول على الرسائل
def get_messages(request):
    doctor_name = request.GET.get('doctor')
    patient_name = request.GET.get('patient')

    if doctor_name and patient_name:
        messages = Message.objects.filter(doctor=doctor_name, patient=patient_name).order_by('timestamp')
        message_data = [{
            'text': msg.text,
            'sender': msg.sender,
            'timestamp': msg.timestamp.strftime('%Y-%m-%d %H:%M:%S')
        } for msg in messages]
        return JsonResponse(message_data, safe=False)
    else:
        return JsonResponse({'status': 'error', 'message': 'Missing parameters'}, status=400)