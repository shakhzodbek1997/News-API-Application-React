import React, {useEffect, useState} from "react";
import {getStoryIds} from "../services/hnApi";
import {Story} from "../componenets/Story";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return storyIds.map(storyId => (
        <Story
            storyId={storyId}
            key={storyId}
        />
    ));
};