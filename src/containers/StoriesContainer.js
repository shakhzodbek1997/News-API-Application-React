import React, {useEffect, useState} from "react";

import {getStoryIds, getStory} from "../services/hnApi";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() =>{
      getStoryIds().then(data => setStoryIds(data));
      getStory(22373406).then(data => console.log(data))
  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};