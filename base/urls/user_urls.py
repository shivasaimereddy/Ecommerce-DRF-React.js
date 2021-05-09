from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),

    path('profile/', views.getUserProfile),
    path('profile/update/', views.updateUserProfile),

    path('', views.getUsers, name="users"),

    path('delete/<str:pk>/', views.deleteUser),

    path('<str:pk>/', views.getUsersById),

    path('update/<str:pk>/', views.updateUser),
]
