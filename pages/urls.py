from django.urls import path

from .views import AboutPageView, HomePageView, ContactInfo

app_name = "pages"

urlpatterns = [
    path("about/", AboutPageView.as_view(), name="about"),
    path("contact/", ContactInfo, name="contact"),
    path("", HomePageView.as_view(), name="home"),
]

