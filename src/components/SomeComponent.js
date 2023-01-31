import useBoop from 'use-boop';
import { animated } from 'react-spring';

const SomeComponent = ({navElement}) => {
  const [style, trigger] = useBoop({ rotation: 30 });

  return (
    <animated.div style={style} onMouseEnter={trigger}>
      {/* Child can be anything */}
      <p>Home</p>
    </animated.div>
  );
};

export default SomeComponent;