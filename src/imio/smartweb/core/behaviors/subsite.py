# -*- coding: utf-8 -*-

from imio.smartweb.core.contents import IFolder
from imio.smartweb.locales import SmartwebMessageFactory as _
from plone.autoform.interfaces import IFormFieldProvider
from plone.namedfile.field import NamedBlobImage
from plone.supermodel import model
from zope import schema
from zope.component import adapter
from zope.interface import implementer
from zope.interface import provider


@provider(IFormFieldProvider)
class IImioSmartwebSubsite(model.Schema):

    model.fieldset(
        "layout", label=_(u"Layout"), fields=["menu_depth", "logo", "logo_display"]
    )
    menu_depth = schema.Int(
        title=_(u"Menu depth"),
        description=_(u"Define number of levels in menu navigation subsite"),
        required=True,
        default=1,
    )

    logo = NamedBlobImage(
        title=_(u"Logo"),
        description=_(u"Define a logo for subsite"),
        required=False,
    )

    logo_display = schema.Choice(
        title=_(u"Logo display"),
        description=_(u"Choose your display mode"),
        source="imio.smartweb.vocabulary.SubsiteDisplayMode",
        required=True,
        default="title",
    )


@implementer(IImioSmartwebSubsite)
@adapter(IFolder)
class Subsite(object):
    """"""

    def __init__(self, context):
        self.context = context