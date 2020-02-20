import React, {useEffect, useState} from "react";
import {getStory} from "../services/hnApi";
import {StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement} from "../styles/StoryStyles";
import {mapTime} from "../mappers/mapTime";

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>

            <StoryMeta>

                <span data-testid="story-by">
                    <StoryMetaElement color="red">By:</StoryMetaElement>{story.by}
                </span>

                <span data-testid="story-time">
                    <StoryMetaElement color="green">Posted:</StoryMetaElement>{` `}
                    {mapTime(story.time)}
                </span>
           </StoryMeta>

        </StoryWrapper>
    ) : null;
};