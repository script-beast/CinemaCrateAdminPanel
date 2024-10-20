import React from "react";
import { MyTextField, MySelect } from "../../../components/common";
import { MyChipsAutocomplete } from "../../../components/templates";
import { Grid, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  singleStandardCrate,
  updateStandardCrate,
  createStandardCrate,
} from "../../../services";
import { myToast } from "../../../utils";
import { showSmallLoader, hideSmallLoader } from "../../../helper/loaders";

const Edit = ({ isEdit = false }) => {
  const deaultValues = {
    name: "",
    price: "",
    genre: "",
    category: "",
    link: "",
    trailer: "",
    plot: "",
    casts: [],
  };

  const [values, setValues] = React.useState({ ...deaultValues });

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isEdit) {
      showSmallLoader();
      if (!id) navigate("crates/standard");
      singleStandardCrate(id)
        .then((data) => {
          setValues({
            name: data.result.name,
            price: data.result.price,
            genre: data.result.genre,
            category: data.result.category,
            link: data.result.link,
            trailer: data.result.trailer,
            plot: data.result.plot,
            casts: data.result.casts,
          });
        })
        .catch((error) => {
          myToast.basic(error, "error");
          navigate("/crates/standard");
        })
        .finally(() => {
          hideSmallLoader();
        });
    } else setValues({ ...deaultValues });
  }, [id]);

  const categoryOptions = [
    { value: "movie", label: "Movie" },
    { value: "web-series", label: "Web Series" },
    { value: "anime", label: "Anime" },
  ];

  const updateCrate = () => {
    showSmallLoader();
    updateStandardCrate(id, values)
      .then((data) => {
        myToast.basic(data.msg, "success");
        navigate("/crates/standard");
      })
      .catch((error) => {
        myToast.basic(error, "error");
      })
      .finally(() => {
        hideSmallLoader();
      });
  };

  const createCrate = () => {
    showSmallLoader();

    createStandardCrate({ ...values, price: +values.price })
      .then((data) => {
        myToast.basic(data.msg, "success");
        navigate("/crates/standard");
      })
      .catch((error) => {
        console.error(error);
        myToast("error", error.error || error.message);
      })
      .finally(() => {
        hideSmallLoader();
      });
  };

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!values.name) return myToast.basic("Name is required", "error");
    if (!values.price) return myToast.basic("Price is required", "error");
    if (!values.genre) return myToast.basic("Genre is required", "error");
    if (!values.category) return myToast.basic("Category is required", "error");
    if (!values.link) return myToast.basic("Link is required", "error");
    if (!values.trailer) return myToast.basic("Trailer is required", "error");
    if (!values.plot) return myToast.basic("Plot is required", "error");
    if (!values.casts.length)
      return myToast.basic("Casts is required", "error");

    if (isEdit) updateCrate();
    else createCrate();
  };

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Name"}
          name={"name"}
          value={values.name}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Price"}
          name={"price"}
          value={values.price}
          onChange={handleChanges}
          type={"number"}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Genre"}
          name={"genre"}
          value={values.genre}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MySelect
          title={"Category"}
          name={"category"}
          value={values.category || ""}
          onChange={handleChanges}
          options={categoryOptions}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Link"}
          name={"link"}
          value={values.link}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Trailer"}
          name={"trailer"}
          value={values.trailer}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12}>
        <MyTextField
          title={"Plot"}
          name={"plot"}
          value={values.plot}
          onChange={handleChanges}
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <MyChipsAutocomplete
          title={"Casts"}
          onChange={(e, v) => setValues({ ...values, casts: v })}
          value={values.casts || []}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {isEdit ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Edit;
