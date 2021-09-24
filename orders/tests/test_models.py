from decimal import Decimal
import factory
import factory.fuzzy

import pytest

from ..models import Item, Order

pytestmark = pytest.mark.django_db


def test___str__(product):
    order = Order.objects.create(
        cpf="401.142.450-10",
        name="Nicolas Cagezinho",
        email="irlandadonorte@fulano.com",
        postal_code="01001-000",
        address="Praça da Sé",
        number="100",
        district="Sé",
        state="SP",
        city="São Paulo",
    )
    assert order.__str__() == f"Pedido {order.id}"
    assert str(order) == f"Pedido {order.id}"

    item = Item.objects.create(
        order=order,
        product=product,
        price=Decimal(69),
        quantity=1,
    )

    assert item.__str__() == str(item.id)
    assert str(item) == str(item.id)