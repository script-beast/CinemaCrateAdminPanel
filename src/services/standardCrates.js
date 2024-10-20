import { api } from "../utils";

const allActiveStandardCrates = async ({
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

    const json = await api.get(`crates/standard?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

const allDeletedStandardCrates = async ({
  page = 0,
  limit = 10,
  search = null,
  ...options
}) => {
  try {
    let query = `page=${page}&limit=${limit}`;
    if (search) query += `&search=${search}`;

    const json = await api.get(`crates/standard/deleted?${query}`, {
      ...options,
    });
    return json.data;
  } catch (error) {
    throw error;
  }
};

const singleStandardCrate = async (id) => {
  try {
    const json = await api.get(`crates/standard/${id}`);
    return json.data;
  } catch (error) {
    throw error;
  }
};

const createStandardCrate = async (data) => {
  try {
    const json = await api.post(`crates/standard`, data);
    return json;
  } catch (error) {
    throw error;
  }
};

const updateStandardCrate = async (id, data) => {
  try {
    const json = await api.put(`crates/standard/${id}`, data);
    return json;
  } catch (error) {
    throw error;
  }
};

const deleteStandardCrate = async (id) => {
  try {
    const json = await api.delete(`crates/standard/${id}`);
    return json;
  } catch (error) {
    throw error;
  }
};

const restoreStandardCrate = async (id) => {
  try {
    const json = await api.patch(`crates/standard/restore/${id}`);
    return json;
  } catch (error) {
    throw error;
  }
};

export {
  allActiveStandardCrates,
  singleStandardCrate,
  createStandardCrate,
  allDeletedStandardCrates,
  updateStandardCrate,
  deleteStandardCrate,
  restoreStandardCrate,
};
