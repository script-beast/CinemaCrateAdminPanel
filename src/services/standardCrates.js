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

const updateStandardCrate = async (id, data) => {
  try {
    const json = await api.put(`crates/standard/${id}`, data);
    return json.data;
  } catch (error) {
    throw error;
  }
};

const deleteStandardCrate = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

export {
  allActiveStandardCrates,
  singleStandardCrate,
  allDeletedStandardCrates,
  updateStandardCrate,
  deleteStandardCrate,
};
