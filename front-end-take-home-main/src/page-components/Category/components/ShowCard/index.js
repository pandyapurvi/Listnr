import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../css/styles.module.css';

function ShowCard({ shows }) {
	return (
		<>
			{console.log('shows', shows)}
			<div className={styles.container}>
				{shows && shows.map(show => (
					<div key={show.id}>
              <img src={show.images.squareLarge.url} alt="images" className={styles.image} />
              <p>{show.name}</p>
              <p>{show.description}</p>
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