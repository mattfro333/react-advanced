import React from 'react';
import ArticleList from '../ArticleList';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import Enzyme from 'enzyme';
import { shallow,configure }  from 'enzyme';
// import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    // console.log(wrapper.getElement(testProps.articles));
    // expect(tree.children.length).toBe(2);
    expect(wrapper.props().children.length).toBe(2);
    // expect(tree).toMatchSnapshot();
    // console.log(tree);
  });
});
