# -*- coding: utf-8 -*-

from imio.smartweb.core.contents.sections.base import ISection
from imio.smartweb.locales import SmartwebMessageFactory as _
from plone.dexterity.content import Container
from zope.interface import implementer
from zope import schema


class ISectionVideo(ISection):
    """Marker interface and Dexterity Python Schema for SectionVideo"""

    video_url = schema.URI(
        title=_(u"Video url"),
        description=_(u"Video url from youtube, vimeo"),
        required=True,
    )


@implementer(ISectionVideo)
class SectionVideo(Container):
    """SectionVideo class"""