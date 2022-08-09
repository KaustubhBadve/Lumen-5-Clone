import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <Box paddingBottom={"70px"} w={"100%"} background={"#f5f5f5"} h={"auto"}>
      <Container maxW="1200px">
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          // flexWrap={"wrap"}
          mr={" -15px"}
          ml={"-15px"}
          gap={"15px"}
        >
          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-darren.png"
            }
            title={
              "A member from our ProBlogger group created a video using Lumen5 and published it on Facebook. In 24 hours the video got 300,000 views, just using this little tool."
            }
            writter={"DARREN ROWSE"}
          />
          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-nicholas.png"
            }
            title={
              "By using Lumen5, we increased our Facebook engagements by 448%, and boosted our reach dramatically. Our page grew from 5,000 to 23,000 likes within a week!"
            }
            writter={"NICHOLAS YANG"}
          />
          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-tova.png"
            }
            title={`My first video already got over  650,000  views on my facebook page. It is an amazing program and I’m really impressed! It made converting a blog post into a video so easy.`}
            writter={"TOVA LEIGH"}
          />
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          mr={" -15px"}
          ml={"-15px"}
          gap={"15px"}
        >
          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-lauren.png"
            }
            title={
              "I created a video using an older blog post and it's been a huge hit! Great way to freshen up and share things again—170,000 views and climbing!"
            }
            writter={"LAUREN CASPER"}
          />
          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-steve.png"
            }
            title={
              "Lumen5 is fantastic! I made a video and now it has gone viral! It has 22,000 views from a reach of 65,000. No advertising. No promotion."
            }
            writter={"STEVE LAST"}
          />

          <ReviewCard
            img={
              "https://storage.googleapis.com/lumen5-site-images/comment-kaylene.png"
            }
            title={
              "My Lumen5 video went viral with over3 million reach and it grew my page from 1500 to 5000 likes! I’m making these for all my top posts."
            }
            writter={"KAYLENE GEORGE"}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default CustomerReview;
