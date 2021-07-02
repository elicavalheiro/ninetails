import { shallow } from 'enzyme';
import { Button } from './Button';

const button = shallow(<Button>Teste</Button>);

it('should render button', () => {
  expect(button.text()).toEqual("Teste");
})