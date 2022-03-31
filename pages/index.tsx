import type { NextPage } from 'next';
import HelloComponent from 'my-package';

// import { HelloComponent1 } from 'my-package';
// import HelloComponent2 from 'my-package2';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Lesson npm package</h1>
      <HelloComponent />
      {/* <HelloComponent color='blue' /> */}

      {/* <HelloComponent1 /> */}
      {/* <HelloComponent2 /> */}
    </div>
  );
};

export default Home;
