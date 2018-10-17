import React from 'react';
import ArticleList from '../ArticleList';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import Enzyme from 'enzyme';
import { shallow,configure }  from 'enzyme';

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
    console.log(wrapper.getElement(testProps.children));
    // expect(tree.children.length).toBe(2);
    expect(wrapper.getElement(testProps.articles.length)).toBe(2);
    // expect(tree).toMatchSnapshot();
    // console.log(tree);
  });
});
