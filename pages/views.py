from django.views.generic import TemplateView

from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail


class HomePageView(TemplateView):
    template_name = "home.html"


class AboutPageView(TemplateView):
    template_name = "about.html"

def ContactInfo(request):
    if request.method == "POST":
        name = request.POST.get('full-name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        data = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
        }
        message = '''
        De: {} <{}>

        Nova mensagem: {}
        '''.format(data['name'], data['email'], data['message'])
        send_mail(data['subject'], message, '',['caio.fsilva@aluno.faculdadeimpacta.com.br'])
        return HttpResponse('Agradecemos o contato, em breve o retornaremos.')
    return render(request, 'contact.html')

    