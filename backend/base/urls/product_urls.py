from django.urls import path, include
from base.views import product_views as views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('', viewset=views.productListViewSet)


urlpatterns = [

    path('', views.getProducts, name='List Products'),
    path('create/', views.addProducts, name='Add Products'),
    path('upload/', views.uploadImage, name='upload Image'),
    path('<str:pk>/', views.getProduct, name='Product By id'),
    #    path('', include(router.urls))
    path('update/<str:pk>/', views.updateProduct),
    path('delete/<str:pk>/', views.deleteProduct, name='Delete Product'),


]
