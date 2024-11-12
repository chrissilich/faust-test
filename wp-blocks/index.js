// wp-blocks/index.js
import { CoreBlocks } from '@faustwp/blocks';

import CoreCode from './CoreCode';
import Hero from './Hero';
import FiftyFifty from './FiftyFifty';

export default {
  // From @faustwp/blocks
  CoreParagraph: CoreBlocks.CoreParagraph,
  CoreColumns: CoreBlocks.CoreColumns,
  CoreColumn: CoreBlocks.CoreColumn,
  CoreCode: CoreBlocks.CoreCode,
  CoreQuote: CoreBlocks.CoreQuote,
  CoreImage: CoreBlocks.CoreImage,
  CoreSeparator: CoreBlocks.CoreSeparator,
  CoreList: CoreBlocks.CoreList,
  CoreButton: CoreBlocks.CoreButton,
  CoreButtons: CoreBlocks.CoreButtons,
  CoreHeading: CoreBlocks.CoreHeading,

  // Custom written core blocks
  CoreCode,

  // Custom written IS blocks
  Hero,
  FiftyFifty,
};