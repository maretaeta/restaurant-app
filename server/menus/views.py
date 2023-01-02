from django.shortcuts import render
from rest_framework import generics
from .models import Category, Menu, Popular
from .serializers import MenuSerializer, CategorySerializer, PopularSerializer


class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class MenuView(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    
class Popularview(generics.ListAPIView):
    queryset = Popular.objects.all()
    serializer_class = PopularSerializer
