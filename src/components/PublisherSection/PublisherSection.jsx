import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPublishers } from "../../redux/states/Hero/heroActions";
import Skeleton from "react-loading-skeleton";
import { fetchHeroWithPublisher } from "../../redux/sagas/requests/heroRequests";
import { withRouter } from "react-router";

const PublisherSection = (props) => {
  const [publisherList, setPublisherList] = useState([]);
  const [isPublisherListLoading, setIsPublisherListLoading] = useState(true);
  const [isPublisherHeroLoading, setIsPublisherHeroLoading] = useState(false);
  const [clickedPublisher, setClickedPublisher] = useState("");

  const reduxDispatch = useDispatch();
  const publisherListRedux = useSelector((state) => state.hero.publisherList);

  useEffect(() => {
    handleFetchPublisher();
  }, []);

  useEffect(() => {
    if (publisherListRedux.length > 0) {
      setPublisherList(publisherListRedux);
      setIsPublisherListLoading(false);
    }
  }, [publisherListRedux]);

  const handleFetchPublisher = () => {
    setIsPublisherListLoading(true);
    reduxDispatch(getPublishers());
  };

  const handleGetPublisherHero = async (publisher) => {
    setIsPublisherHeroLoading(true);
    setClickedPublisher(publisher);
    const heroId = await fetchHeroWithPublisher(publisher);
    setIsPublisherHeroLoading(false);
    setClickedPublisher("");
    props.history.push({
      pathname: `/hero`,
      state: {
        id: heroId,
      },
    });
  };

  return (
    <SectionWrapper>
      <h5 className="my-2">PUBLISHERS</h5>
      {isPublisherListLoading ? (
        <>
          {new Array(10).fill().map((item, index) => (
            <PublisherText key={index}>
              <Skeleton height="30px" />
            </PublisherText>
          ))}
        </>
      ) : (
        <></>
      )}

      {publisherList?.map((item, index) => (
        <PublisherText
          onClick={() => handleGetPublisherHero(item)}
          has_border={publisherList?.length === index + 1 ? 0 : 1}
          key={index}
          className=""
        >
          <div className="d-flex align-items-center justify-content-between">
            {item}
            {isPublisherHeroLoading && item === clickedPublisher ? (
              <i className="bx bx-loader-alt bx-spin"></i>
            ) : (
              <i className="bx bx-chevron-right"></i>
            )}
          </div>
        </PublisherText>
      ))}
    </SectionWrapper>
  );
};

export default withRouter(PublisherSection);

const SectionWrapper = styled.div`
  margin: 30px 0px;
`;

const PublisherText = styled.div`
  padding: 4px 0px;
  letter-spacing: 1.2px;
  line-height: 1.6;
  font-size: 1.3rem;
  font-weight: lighter;
  text-transform: uppercase;
  border-bottom: ${(props) =>
    props.has_border ? `1px solid ${props.theme.colors.lightColor}30` : "none"};
`;
