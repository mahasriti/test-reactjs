import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 300,
    minWidth: 200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

function Comment({ comment, handleRemoveItem }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(comment);
  }, [comment]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid>
                <Avatar src="/broken-image.jpg" />
              </Grid>
              <Grid item xs>
                <Typography>
                  <div className="author text-muted">{data.author}</div>
                  <div className="content">
                    <EditText
                      value={comment.content}
                      name="content"
                      onClick={handleChange}
                    />
                  </div>
                  <div className="content">
                    {comment.creationDate !== undefined
                      ? comment.creationDate.substring(0, 10)
                      : null}
                  </div>
                </Typography>
              </Grid>
              <Grid>
                <IconButton>
                  <EditIcon style={{ width: "20px" }} />
                  <DeleteIcon
                    onClick={() => handleRemoveItem(comment.author)}
                    aria-label="delete"
                    style={{ width: "20px" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Comment;
