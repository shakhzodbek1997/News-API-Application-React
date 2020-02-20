import React, {useEffect, useState, memo} from "react";
import {getStoryIds} from "../services/hnApi";
import {Story} from "../componenets/Story";
import {GlobalStyle, StoriesContainerWrapper} from "../styles/StoriesContainerStyles";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
    const {count} = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    const test = useInfiniteScroll();

    useEffect(() => {
        console.log('count',  count);
        getStoryIds().then(data => setStoryIds(data));
        console.log('count', count)
    }, []);

    return(
        <>
            <GlobalStyle/>
            <StoriesContainerWrapper data-test-id="stories-container">
            <h1>Hacker News Stories</h1>
            {storyIds.splice(0, count).map(storyId =>
                (<Story storyId={storyId} key={storyId} />))}
            </StoriesContainerWrapper>
        </>
    );
};