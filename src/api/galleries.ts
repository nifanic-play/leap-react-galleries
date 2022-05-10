import { ResponseJson } from "../types";

type GetGalleries = (
  currentPage?: number,
  limit?: string,
  isClosed?: boolean
) => Promise<number | ResponseJson>;

/**
 * Returns a list of available galleries.
 * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html#query-dsl Query DSL}
 */
export const getGalleries: GetGalleries = async (
  currentPage = 1,
  limit = "15",
  /**
   * `undefined` will should both closed and opened galleries.
   */
  isClosed = undefined
) => {
  const isClosedQuery = isClosed ? `&query[term][is_closed]=${isClosed}` : "";
  const ARTIC_URL = `https://api.artic.edu/api/v1/galleries/search?${isClosedQuery}&page=${currentPage}&limit=${limit}`;
  const galleries = await fetch(ARTIC_URL);
  const { ok, status } = galleries;

  if (!ok) return status;

  const responseJson = (await galleries.json()) as ResponseJson;

  return responseJson;
};
