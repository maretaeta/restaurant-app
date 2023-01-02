from django.urls import path
from .views import MenuView, CategoryView, Popularview


urlpatterns = [
    path("", MenuView.as_view()),
    path("categories/", CategoryView.as_view()),
    path("popular/", Popularview.as_view()),

]
