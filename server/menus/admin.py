from django.contrib import admin
from .models import Menu, Category, Popular


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'description']

@admin.register(Popular)
class PopularAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']