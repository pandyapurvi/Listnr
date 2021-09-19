import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../css/styles.module.css';
import Header from 'shared-components/Typography/Header';

function ShowCard({ shows }) {

	const podcastCount = shows && shows.length >= 1 ?
		`${shows.length} Podcasts` :
		`${shows.length} Podcast`;

	return (
		<>
			<Header as="h1" variant="m" text={podcastCount} linesToShow={1} mb="m" />
			{console.log('shows', shows)}
			<div className={styles.container}>
				{shows && shows.map(show => (
					<div key={show.id}>
              <img src={show.images.squareLarge.url} alt="images" className={styles.image} />
              <p className={styles.headerText}>{show.name}</p>
              <p className={styles.description}>{show.description}</p>
            </div>
				))}
			</div>
			</>
	)
};

ShowCard.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }))
};

ShowCard.defaultProps = {
  shows: []
};

export default ShowCard;