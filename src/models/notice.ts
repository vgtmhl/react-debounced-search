/**
 * Generated with https://app.quicktype.io/
 * This stuff is a godsent
 */
export interface Notice {
    forename: string;
    date_of_birth: string;
    entity_id: string;
    nationalities: string[];
    name: string;
    _links: Links;
}

export interface Links {
    self: Images;
    images: Images;
    thumbnail: Images;
}

export interface Images {
    href: string;
}