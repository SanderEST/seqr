# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-07-12 18:57
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('seqr', '0060_matchmakerresult_match_removed'),
    ]

    operations = [
        migrations.AddField(
            model_name='family',
            name='assigned_analyst',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='assigned_families', to=settings.AUTH_USER_MODEL),
        ),
    ]
