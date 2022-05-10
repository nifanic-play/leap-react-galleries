export interface Gallery {
  api_link: string;
  api_model: string;
  floor: string;
  id: number;
  is_closed: boolean;
  last_updated: string;
  last_updated_source: string;
  latitude: number;
  latlon: string;
  longitude: number;
  number: string;
  tgn_id: null;
  timestamp: string;
  title: string;
  type: string;
}

export interface Pagination {
  current_page: number;
  limit: number;
  next_url: string;
  offset: number;
  prev_url: string;
  total: number;
  total_pages: number;
}

export interface ResponseJson {
  pagination: Pagination;
  data: Gallery[];
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
}
