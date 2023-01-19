import fn from 'base';

const Component = () => (
  <div>
    this is a Story: {fn()}
  </div>
);

export const YourStory = () => <Component />;

export default {
  title: 'Your Stories',
};
