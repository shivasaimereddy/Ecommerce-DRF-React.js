# Generated by Django 3.1.7 on 2021-04-06 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_auto_20210406_1048'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='deliveredAt',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]