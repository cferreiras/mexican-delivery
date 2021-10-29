# Food Delivery: Comida Mexicana

# Como rodar o projeto

- No terminal, execute o comando
```
pip install -r requirements.txt

```

- Para iniciar o servidor:
```
python manage.py runserver
```

- Para rodar os testes
```
pytest
```
- Ou você pode usar o comando:
```
pytest -x --cov --cov-report=html
```

- Rode as migrations 
```
python manage.py migrate
```

- Para inserir os produtos no banco de dados, você pode usar a fixture `products.json` com o comando abaixo. As imagens encontram-se na pasta media.
```
python manage.py loaddata products
```

- Crie um superuser para a interface admin:
```
python manage.py createsuperuser
```

# Algumas referências

- [Livro Django for Professionals](https://djangoforprofessionals.com/)
- [Livro Django 3 By Example](https://www.packtpub.com/product/django-3-by-example-third-edition/9781838981952)
- [Livro Two Scoops of Django](https://www.feldroy.com/collections/two-scoops-press/products/two-scoops-of-django-3-x)
- [Livro A Wedge of Django](https://www.feldroy.com/collections/two-scoops-press/products/a-wedge-of-django)
- [Ordinary Coders: Dicas de Django, Bootstrap e linguagens correlacionadas](https://www.ordinarycoders.com/blog/article/django-pagination)
- [W3schools: Diversas refências e tutoriais sobre Python, HTML, CSS etc.](https://www.w3schools.com/)
