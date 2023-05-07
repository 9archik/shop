from django.db import models

# Create your models here.

class YouTubeVideo(models.Model):
    title = models.CharField(max_length=100)
    channel = models.CharField(max_length=100)
    
class Product(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.CharField(max_length=10000)
    image = models.CharField(max_length=150) 
    section_name = models.ForeignKey('ProductCategory', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.title
    
    
    
class ProductCategory(models.Model):
    section_name = models.CharField(max_length=100, db_index=True)
    section_name_ru = models.CharField(max_length=100, db_index=True)

    
    def __str__(self):
        return self.section_name_ru
