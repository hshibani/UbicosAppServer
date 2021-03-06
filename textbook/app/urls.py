
from django.contrib.auth import views as auth_views
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.login_form, name='login_form'),
    url('login', views.login, name='login'),
    url('logout', auth_views.logout, {'next_page': '/'}, name='logout'),
    url('index', views.index, name='index'),
    url('uploadImage', views.uploadImage, name='uploadImage'),
    url('getImage/(?P<group_id>\d+)/', views.getImage, name='getImg'),
    #url('activities',views.activityList, name='activities'),
    url('delete',views.deleteAllItems, name='activities'),
    url(r'^ajax/chat/$', views.broadcast),
    url('updateFeed', views.updateFeed),
    url('getUsername', views.getUsername)

]