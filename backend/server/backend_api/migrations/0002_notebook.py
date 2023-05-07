# Generated by Django 4.2 on 2023-05-03 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend_api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Notebook",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("price", models.IntegerField()),
                ("description", models.CharField(max_length=10000)),
                ("image", models.CharField(max_length=150)),
                ("rating", models.IntegerField()),
            ],
        ),
    ]