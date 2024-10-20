import { api } from "../utils";

const allActiveLimitedCrates = async ({
  page = 0,
  limit = 10,
  search = null,
  category = null,
  genre = null,
  cast = null,
  ...options
}) => {
  try {
    let query = `page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;
    if (category) query += `&category=${category}`;
    if (genre) query += `&genre=${genre}`;
    if (cast) query += `&cast=${cast}`;

    const json = await api.get(`crates/limited?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

const allInactiveLimitedCrates = async ({
  page = 0,
  limit = 10,
  search = null,
  ...options
}) => {
  try {
    let query = `page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;

    const json = await api.get(`crates/limited/past?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

const allDeletedLimitedCrates = async ({
  page = 0,
  limit = 10,
  search = null,
  ...options
}) => {
  try {
    let query = `page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;

    const json = await api.get(`crates/limited/deleted?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

const singleLimitedCrate = async (id) => {
  try {
    const json = await api.get(`crates/limited/${id}`);
    return json.data;
  } catch (error) {
    throw error;
  }
};

const createLimitedCrate = async (data) => {
  try {
    const json = await api.post(`crates/limited`, data);
    return json;
  } catch (error) {
    throw error;
  }
};

const updateLimitedCrate = async (id, data) => {
  try {
    const json = await api.put(`crates/limited/${id}`, data);
    return json;
  } catch (error) {
    throw error;
  }
};

const deleteLimitedCrate = async (id) => {
  try {
    const json = await api.delete(`crates/limited/${id}`);
    return json;
  } catch (error) {
    throw error;
  }
};

const restoreLimitedCrate = async (id) => {
  try {
    const json = await api.patch(`crates/limited/restore/${id}`);
    return json;
  } catch (error) {
    throw error;
  }
};

export {
  allActiveLimitedCrates,
  allInactiveLimitedCrates,
  singleLimitedCrate,
  createLimitedCrate,
  allDeletedLimitedCrates,
  updateLimitedCrate,
  deleteLimitedCrate,
  restoreLimitedCrate,
};
