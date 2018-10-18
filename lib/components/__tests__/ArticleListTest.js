import React from 'react';
import ArticleList from '../ArticleList';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../Article';
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
  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    console.log(wrapper.find('ArticleContainer').length);
    // expect(tree.children.length).toBe(2);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
    console.log(wrapper);
  });
});
