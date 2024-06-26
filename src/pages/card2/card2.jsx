import Card from "../../components/card/card";
import styles from './card2.module.css';

export default function Card2() {

    const card = {
        title: 'Cartão de Aniversário',
        description: 'Cartão de aniversário com tema de flores e borboletas',
        image: 'https://c8.alamy.com/comp/2KYMEB0/bright-multicolored-butterflies-seamless-pattern-wallpaper-background-children-party-craft-paper-scrapbooking-2KYMEB0.jpg',
        tags: [
            { id: 1, name: 'Aniversário' },
            { id: 2, name: 'Borboletas' },
            { id: 3, name: 'Infantil'}
        ]
    }

    return (
        <main className={styles.cardMain}>
            <Card title={card.title} description={card.description} image={card.image} tags={card.tags}/>
        </main>
    )

}