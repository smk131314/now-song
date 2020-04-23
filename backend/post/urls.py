# from django.urls import path
#
# from . import views
#
# urlpatterns = [
#     path('', views.ListPost.as_view()),
#     path('<int:pk>/', views.DetailPost.as_view()),
# ]

from django.conf.urls import url
from .views import PostViewSet

post_list = PostViewSet.as_view({"get": "list", "post": "create"})

post_detail = PostViewSet.as_view(
    {"get": "retrieve", "patch": "partial_update", "delete": "destroy"}
)


urlpatterns = [
    url("^post/$", post_list, name="post-list"),
    url("^post/(?P<pk>[0-9]+)/$", post_detail, name="post-detail"),
]