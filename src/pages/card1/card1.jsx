import Card from "../../components/card/card";
import styles from './card1.module.css';

export default function Card1() {

    const cards = [
        {
            id: 1,
            title: 'Cartão de Casamento',
            description: 'Cartão de casamento com tema floral',
            image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/floral-ornaments-wedding-background-design-template-3515a5fc1e1225658f218f03a06e38e2_screen.jpg?ts=1695911586',
            tags: [
                { id: 1, name: 'Casamento' },
                { id: 2, name: 'Floral' }
            ]
        },
        {
            id: 2,
            title: 'Cartão de Aniversário',
            description: 'Cartão de aniversário com tema de borboletas',
            image: 'https://c8.alamy.com/comp/2KYMEB0/bright-multicolored-butterflies-seamless-pattern-wallpaper-background-children-party-craft-paper-scrapbooking-2KYMEB0.jpg',
            tags: [
                { id: 1, name: 'Aniversário' },
                { id: 2, name: 'Borboletas' },
                { id: 3, name: 'Infantil'}
            ]
        },
        {
            id: 3,
            title: 'Cartão de Natal',
            description: 'Cartão de natal com tema de flocos de neve',
            image: 'https://thumbs.dreamstime.com/b/fundo-de-natal-com-flocos-de-neve-azuis-que-caem-sobre-um-fundo-escuro-121224311.jpg',
            tags: [
                { id: 1, name: 'Natal' },
                { id: 2, name: 'Flocos de Neve' }
            ]
        }
    ]

    return (
        <main className={styles.cardMain}>
            {cards.map(card =>
                <Card 
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    tags={card.tags}
                />
            )};
        </main>
    )
}