import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../../../css/styles.module.css";
import Header from "shared-components/Typography/Header";
import SortButton from "shared-components/SortButton";
import { Flex } from "@rebass/grid";
import Paragraph from "shared-components/Typography/Paragraph";

function ShowCard({ shows }) {
  const [ascending, setAscending] = useState("ascending");

  const podcastCount =
    shows.length === 0
      ? `No Podcast`
      : shows.length === 1
      ? `${shows.length} Podcast`
      : `${shows.length} Podcasts`;

  const sortedList =
    shows &&
    shows.sort((a, b) => {
      const isReversed = ascending === "ascending" ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
    });

  const onToggleSort = (ascending) => {
    setAscending(ascending);
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Header
          as="h1"
          variant="m"
          text={podcastCount}
          linesToShow={1}
          mb="m"
        />

        <SortButton
          onOptionClick={(key) => onToggleSort(key)}
          options={[
            {
              key: "ascending",
              value: "Sort A-Z",
            },
            {
              key: "descending",
              value: "Sort Z-A",
            },
          ]}
        />
      </Flex>

      <div className={styles.container}>
        {sortedList.map((show) => (
          <div key={show.id}>
            <img
              src={show.images.squareLarge.url}
              alt="Listner images"
              className={styles.image}
            />
            <Header
              as="h3"
              variant="s"
              text={show.name}
              linesToShow={1}
              mb="m"
            />

            <div className={styles.para}>
              <Paragraph
                text={show.description}
                variant="m"
                transparent
								linesToShow={3}
              />
            </div>
            {/* I used my own to style thna later on I found Header and Paragraph from story book. So I kept here for reference */}
            {/* <p className={styles.headerText}>{show.name}</p> */}
            {/* <p className={styles.description}>{show.description}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}

ShowCard.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
};

ShowCard.defaultProps = {
  shows: [],
};

export default ShowCard;
