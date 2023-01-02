from .models import Category, Menu, Popular
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class PopularSerializer(serializers.ModelSerializer):
    class Meta:
        model = Popular
        fields = ['id', 'name', 'image', 'description']


class MenuSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Menu
        fields = ['id', 'category', 'name', 'image', 'price', 'description']
