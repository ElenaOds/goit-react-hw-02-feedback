import propTypes from 'prop-types';
import { Container, Title } from './Section.styled'

const Section = ({ title, children}) => (
    <Container>
    <Title>{title}</Title>
    {children}
    </Container>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
  };
  
 export default Section;