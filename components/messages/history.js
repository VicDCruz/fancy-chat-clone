import React from 'react';
import PropTypes from 'prop-types';
import Bubble from './bubble';

const History = props => (
  <div className="flex flex-col-reverse gap-3 px-4 mt-2">
    <Bubble message="I'll change it" orientation="right" />
    <Bubble message="My bad" orientation="right" />
    <Bubble message="😂🤣" orientation="right" />
    <Bubble message="Yeah, no problem, I'll fix it" orientation="left" />
    <Bubble message="Why is this Lorem Ipsum here?" orientation="left" />
    <Bubble
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit tempus metus, quis dictum turpis. Donec gravida eros quam, ac facilisis velit sagittis at. In pulvinar pulvinar pulvinar. Duis vulputate nisl nec metus volutpat aliquam. Aenean eu lacus faucibus, blandit nisi eget, sagittis velit. Nullam a quam et sem ultrices vestibulum. Sed sed sem sodales ipsum pulvinar vulputate. Nunc vel erat id diam pretium rhoncus et eget ante. Donec dapibus risus tortor, non pellentesque metus faucibus at. Nullam a auctor turpis. Nunc euismod, turpis sit amet sodales interdum, tortor tellus maximus nunc, at dignissim lectus nunc sit amet velit. Donec vitae mattis elit. Etiam at purus eros.

Donec interdum, ipsum vel convallis ornare, felis nulla sodales risus, ac iaculis leo purus vel urna. Quisque accumsan tortor nec nibh viverra vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc placerat tortor at felis dapibus, sit amet vulputate odio volutpat."
      orientation="left"
    />
    <Bubble message="Have you read it already?" orientation="right" />
    <Bubble message="Hi, how was the doc?" orientation="right" />
    <Bubble message="Yeah, you too!" orientation="right" />
    <Bubble message="Have a nice weekend" orientation="left" />
    <Bubble message="Bye" orientation="left" />
    <Bubble message="Ok" orientation="left" />
  </div>
);

History.propTypes = {};

export default History;
