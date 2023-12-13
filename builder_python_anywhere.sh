#!/usr/bin/env bash

set -o errexit  # exit on error

pip install -r requirements.txt

mkdir -p staticfiles media
python manage.py collectstatic --no-input
python manage.py makemigrations
python manage.py migrate

DJANGO_SUPERUSER_USERNAME=admin \
DJANGO_SUPERUSER_PASSWORD=123 \
DJANGO_SUPERUSER_EMAIL="admin@mail.com" \
python manage.py createsuperuser --noinput

