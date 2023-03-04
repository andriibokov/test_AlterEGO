import { Box, Button, Container, Typography } from "@mui/material"
import { useState } from "react";
import { removePost } from "../../redux/news/action";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { postData } from "../../types/news";
import { useTranslation } from "react-i18next";
import { Loader } from "../../components/loader/Loader";


const News = () => {
  const { t } = useTranslation("translation", { keyPrefix: "news" });
  
  const dispatch = useAppDispatch();
  const step: number = 10;
  const [loadCounter, setLoadCounter] = useState(step);
  const postData: postData = useAppSelector(
    (state: any) => state.postReducer
  );

  let posts = postData.posts.slice(0, loadCounter);

  const loadPosts = ()=> {
    setLoadCounter(loadCounter + step);
  }

  const remove = (id:number) => {
    dispatch(removePost(id, postData.posts));
    posts = postData.posts.slice(0, loadCounter);
  }

  return (
    <Container sx={{ height: "100%" }} maxWidth="lg">
      {postData.loading && <Loader />}

      {postData.error && <Box>{postData.error}</Box>}

      <Box sx={{ height: "100%", padding: "20px 0" }}>
        {posts?.map((post: any, index: number) => {
          return (
            <Box
              display="grid"
              gridTemplateColumns=" 1fr auto"
              gap={2}
              sx={{ marginBottom: "20px", alignItems: "center" }}
              key={post?.id}
            >
              <Box gridColumn="1/2">
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ marginRight: "8px" }}>
                      {index + 1}.
                    </Typography>
                    <Typography level="h2" component="h2">
                      {post?.title}
                    </Typography>
                  </Box>
                  <Box>{post?.body}</Box>
                </Box>
              </Box>
              <Box gridColumn="2/2">
                <Button onClick={() => remove(post?.id)}>
                  {t("btnDelete")}
                </Button>
              </Box>
            </Box>
          );
        })}

        {postData.posts.length > loadCounter &&
          !postData.loading &&
          !postData.error && (
            <Button
              sx={{ display: "block", margin: "0 auto" }}
              onClick={() => loadPosts()}
            >
              {t("loadBtn")}
            </Button>
          )}
      </Box>
    </Container>
  );
}

export default News;

