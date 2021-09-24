import factory
from factory.faker import Faker
import factory.fuzzy

from ..models import Order

class OrderFactory(factory.django.DjangoModelFactory):
    cpf = factory.fuzzy.FuzzyInteger(00000000000,99999999999)
    name = factory.fuzzy.FuzzyText()
    email = factory.LazyAttribute(lambda o: '%s@example.com' % o.name)
    
    class Meta:
        model = Order