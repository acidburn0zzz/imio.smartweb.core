# -*- coding: utf-8 -*-

from imio.smartweb.locales import SmartwebMessageFactory as _
from plone.app.z3cform.widget import SelectFieldWidget
from plone.autoform import directives
from plone.dexterity.content import Container
from plone.supermodel import model
from zope import schema
from zope.interface import implementer


class IDirectoryView(model.Schema):
    """Marker interface and Dexterity Python Schema for DirectoryView"""

    directives.widget(selected_categories=SelectFieldWidget)
    selected_categories = schema.List(
        title=_("Selected Categories"),
        value_type=schema.Choice(
            vocabulary="imio.smartweb.vocabulary.DirectoryCategories"
        ),
        required=False,
    )

    nb_results = schema.Int(
        title=_("Number of items to display"), default=20, required=True
    )

    show_items_description = schema.Bool(
        title=_("Show items description"), default=True, required=False
    )


@implementer(IDirectoryView)
class DirectoryView(Container):
    """DirectoryView class"""
