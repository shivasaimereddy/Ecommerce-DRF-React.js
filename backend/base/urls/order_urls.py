from os import name
from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path('', views.getOrders, name="Get All Orders Admin Access Only"),
    path('add/', views.addOrderItems),
    path('myorders/', views.getAllOrders, name="Get All User Orders"),
    path('<str:pk>/deliver/', views.updateIsDelivered,
         name='Change Order to delivered'),
    path('<str:pk>/pay/', views.updateIsPaid, name='Pay Order'),
    path('<str:pk>/', views.getOrderById),
]
