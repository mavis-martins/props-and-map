import PropTypes from 'prop-types';
import styles from './card.module.css';

export default function Card({ title, description, image, tags }) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.cardImage} src={image} alt={title} />
                <div className={styles.cardBody}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                        {tags.map(tag => <li key={tag.id}>{tag.name}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired
}