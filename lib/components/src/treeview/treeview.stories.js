import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';

import { Tree, TreeState, Leaf } from './treeview';

import { mockdata } from './treeview.mockdata';

const CustomLeaf = styled(Leaf)(({ isSelected }) => ({
  background: isSelected ? 'hotpink' : 'deepskyblue',
}));
CustomLeaf.displayName = 'CustomLeaf';

storiesOf('Components|Treeview', module)
  .add('stateful', () => <TreeState prefix="stateful" dataset={mockdata.dataset} />)
  .add('stateless', () => <Tree prefix="stateless" dataset={mockdata.dataset} root="1" />)
  .add('with custom node', () => (
    <TreeState prefix="stateful" dataset={mockdata.dataset} LeafNode={CustomLeaf} />
  ))
  .add('with roots node', () => <TreeState prefix="stateful" dataset={mockdata.withRoot} />)
  .add('with ensured', () => (
    <TreeState prefix="stateful" dataset={mockdata.withRoot} ensured={['1-12-122']} />
  ));