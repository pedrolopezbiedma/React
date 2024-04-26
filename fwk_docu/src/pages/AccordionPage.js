import Accordion from "../components/Accordion";

const items = [
    { id: 1, header: 'This is the first item', content: 'This is the content for the first item'},
    { id: 2, header: 'This is the second item', content: 'This is the content for the second item'},
    { id: 3, header: 'This is the third item', content: 'This is the content for the third item'},
];

const AccordionPage = () => {
    return (
        <Accordion items={ items } />
    )
}

export default AccordionPage