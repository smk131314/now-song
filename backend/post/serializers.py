# django + react 앱은 api요청을 통해 데이터를 주고 받는데, 반환값을 직렬화(serialize)해주는 것

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post