import React from "react";
import {
  MyTextField,
  MySelect,
  MyDatePicker,
  MyDateTimePicker,
} from "../../../components/common";
import { MyChipsAutocomplete } from "../../../components/templates";
import { Grid, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  singleLimitedCrate,
  updateLimitedCrate,
  createLimitedCrate,
} from "../../../services";
import { myToast } from "../../../utils";
import { showSmallLoader, hideSmallLoader } from "../../../helper/loaders";
import dayjs from "dayjs";

const Edit = ({ isEdit = false }) => {
  const deaultValues = {
    name: "",
    price: 0,
    genre: "",
    category: "",
    link: "",
    trailer: "",
    plot: "",
    casts: [],
    endTime: dayjs().add(1, "day"),
    discountPrice: 0,
    occassion: "",
    tagLine: "",
  };

  const [values, setValues] = React.useState({ ...deaultValues });

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isEdit) {
      showSmallLoader();
      if (!id) navigate("crates/limited");
      singleLimitedCrate(id)
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
            endTime: data.result.endTime,
            discountPrice: data.result.discountPrice,
            occassion: data.result.occassion,
            tagLine: data.result.tagLine,
          });
        })
        .catch((error) => {
          myToast.basic(error, "error");
          navigate("/crates/limited");
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
    updateLimitedCrate(id, {
      values,
      price: +values.price,
      discountPrice: +values.discountPrice,
      endTime: dayjs(values.endTime).format("YYYY-MM-DD"),
    })
      .then((data) => {
        myToast.basic(data.msg, "success");
        navigate("/crates/limited");
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

    createLimitedCrate({
      ...values,
      price: +values.price,
      discountPrice: +values.discountPrice,
      endTime: dayjs(values.endTime).format("YYYY-MM-DD"),
    })
      .then((data) => {
        myToast.basic(data.msg, "success");
        navigate("/crates/limited");
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
    if (!values.endTime) return myToast.basic("End Time is required", "error");
    if (!values.discountPrice)
      return myToast.basic("Discount Price is required", "error");
    if (!values.occassion)
      return myToast.basic("Occassion is required", "error");
    if (!values.tagLine) return myToast.basic("Tag Line is required", "error");

    if (isEdit) updateCrate();
    else createCrate();
  };

  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} md={6}>
        <MyDateTimePicker
          title={"Name"}
          name={"name"}
          onChange={(e) => console.log(new Date(e))}
        />
      </Grid>
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
          title={"Occassion"}
          name={"occassion"}
          value={values.occassion}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyTextField
          title={"Tag Line"}
          name={"tagLine"}
          value={values.tagLine}
          onChange={handleChanges}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MyDatePicker
          title={"End Time"}
          name={"endTime"}
          format={"DD MMM, YYYY"}
          minDate={dayjs().add(1, "day")}
          value={dayjs(values.endTime)}
          onChange={(e) => setValues({ ...values, endTime: e })}
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
          title={"Discount Price"}
          name={"discountPrice"}
          value={values.discountPrice}
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
