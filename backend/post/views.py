from django.shortcuts import render
# from rest_framework import generics

from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

# class ListPost(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#
# class DetailPost(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()
    def perform_create(self, serializer):
        serializer.save()