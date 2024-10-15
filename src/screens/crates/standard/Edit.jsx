import React from "react";
import { MyTextField, MySelect } from "../../../components/common";
import { MyChipsAutocomplete } from "../../../components/templates";
import { Grid, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { singleStandardCrate } from "../../../services/standardCrates";

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
      if (!id) navigate("crates/standard");
      singleStandardCrate(id).then((data) => {
        setValues(data.result);
      });
    } else setValues({ ...deaultValues });
  }, [id]);

  const categoryOptions = [
    { value: "movie", label: "Movie" },
    { value: "web-series", label: "Web Series" },
    { value: "anime", label: "Anime" },
  ];

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
        <Button variant="contained" color="primary">
          {isEdit ? "Update" : "Create"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Edit;
