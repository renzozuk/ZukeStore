from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductListCreate.as_view(), name='product-list-create'),
    path('products/<uuid:pk>/', views.ProductRetrieveUpdateDestroy.as_view(), name='product-retrieve-update-destroy'),
]