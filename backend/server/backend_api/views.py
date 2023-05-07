from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product
from .serializer import ProductSerializer
from rest_framework.response import Response

# Create your views here.


class CatalogView(APIView):
    def get(self, request):
        output = {}
        output1 = []
        for product in Product.objects.all():
            if product.section_name.section_name_ru in output:
                output[product.section_name.section_name_ru].append(
                    {
                        "title": product.title,
                        "product_id": product.id,
                        "price": product.price,
                        "image": product.image,
                    }
                )
            else:
                output[product.section_name.section_name_ru] = [
                    {
                        "title": product.title,
                        "product_id": product.id,
                        "price": product.price,
                        "image": product.image,
                    }
                ]
        for key in output:
            output1.append({"product_list": output[key], "section": key})

        return Response(output1)
