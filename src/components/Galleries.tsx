import React, { useEffect, useState } from "react";
import Pluralize from "react-pluralize";

import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectProps,
  Stack,
  Switch,
  Typography,
} from "@mui/material/";
import { grey } from "@mui/material/colors";
import { UsePaginationProps } from "@mui/material/usePagination/usePagination";

import { getGalleries } from "../api/galleries";
import { Gallery, Pagination as PaginationType, ResponseJson } from "../types";

export const Galleries = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const [limit, setLimit] = useState<string>("15");
  const [pagination, setPagination] = useState<PaginationType>(null);

  useEffect(() => {
    Promise.resolve(getGalleries(currentPage, limit, isClosed)).then(
      (response) => {
        const { data, pagination } = response as ResponseJson;
        setGalleries(data);
        setPagination(pagination);
      }
    );
  }, [currentPage, limit, isClosed]);

  if (!pagination) return null;

  const { current_page, total, total_pages } = pagination;

  const handleOnPaginationChange: UsePaginationProps["onChange"] = (
    _event,
    page
  ) => {
    setCurrentPage(page);
  };

  const handleLimitChange: SelectProps<string>["onChange"] = (event) => {
    const { value } = event.target;
    setCurrentPage(1);
    setLimit(value);
  };

  const handleIsClosed: FormControlLabelProps["onChange"] = (
    _event,
    checked
  ) => {
    setCurrentPage(1);
    setIsClosed(checked);
  };

  const calculateCurrentPageResult = () => {
    const currentPageResult = Number(limit) * currentPage;
    /** if positive, we are on the last page. */
    const coefficient = currentPageResult - total;

    if (coefficient < 0) return currentPageResult;

    return currentPageResult - coefficient;
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography style={{ color: grey[500] }} variant="subtitle1">
          <Chip label={calculateCurrentPageResult()} size="small" /> of{" "}
          <Pluralize count={total} plural="results" singular="result" />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        {galleries.map((gallery) => {
          const { api_link, id, title } = gallery;
          return (
            <Card
              sx={{ minWidth: 275 }}
              key={id}
              style={{
                // border: "1px solid #888",
                // borderRadius: ".5rem",
                marginBottom: ".5rem",
              }}
              elevation={1}
            >
              <CardActionArea component="a" href={api_link} target="_blank">
                <CardContent>{title}</CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <Stack spacing={2}>
            <Pagination
              color="primary"
              count={total_pages}
              onChange={handleOnPaginationChange}
              page={current_page}
            />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Galleries</FormLabel>
            <FormControlLabel
              control={<Switch checked={isClosed} />}
              label="Closed only"
              onChange={handleIsClosed}
            />
            <FormHelperText>
              {isClosed ? "Only closed" : "All"} galleries shown
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Limit</InputLabel>
            <Select
              id="demo-simple-select"
              label="Limit"
              labelId="demo-simple-select-label"
              onChange={handleLimitChange}
              size="small"
              value={limit}
            >
              {[15, 50, 100].map((resultsPerPage) => (
                <MenuItem
                  disabled={Number(resultsPerPage) >= total}
                  key={resultsPerPage}
                  value={resultsPerPage}
                >
                  {resultsPerPage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
